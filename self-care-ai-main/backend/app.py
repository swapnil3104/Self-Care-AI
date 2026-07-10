from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware

import os
# Reduce TensorFlow verbose startup logs and disable oneDNN custom ops.
# Must set these before TensorFlow is imported to take effect.
os.environ.setdefault("TF_CPP_MIN_LOG_LEVEL", "2")
os.environ.setdefault("TF_ENABLE_ONEDNN_OPTS", "0")
import io
from typing import List, Dict, Tuple

import numpy as np
from PIL import Image
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.efficientnet import preprocess_input

from database import engine
import models
import auth

# Create database tables
models.Base.metadata.create_all(bind=engine)

class ModelPredictor:
    """Loads a Keras .h5 model and provides a predict(img_bytes) method.

    The class looks for `model_path` in the current directory and reads class names
    from `classes_path` (one per line). If `classes_path` is missing or empty,
    it falls back to a small default list — update `classes.txt` to match your
    model's output ordering.
    """

    def __init__(self, model_path: str = "model.h5"):
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model file not found at: {model_path}")
        # load model (no compile needed for inference)
        self.model = load_model(model_path, compile=False)
        self.input_size = (224, 224)
        # Embedded class names (order must match the model's output order)
        self.classes = ["glaucoma", "normal", "diabetic_retinopathy", "cataract"]

    # class names are embedded; no external class file is required
    def _load_classes(self, classes_path: str) -> List[str]:
        return self.classes

    def _preprocess(self, img_bytes: bytes) -> np.ndarray:
        image = Image.open(io.BytesIO(img_bytes)).convert("RGB")
        image = image.resize(self.input_size)
        arr = np.array(image).astype("float32")
        arr = preprocess_input(arr)
        arr = np.expand_dims(arr, axis=0)
        return arr

    def predict(self, img_bytes: bytes) -> Tuple[str, Dict[str, float]]:
        x = self._preprocess(img_bytes)
        preds = self.model.predict(x)[0]
        probs = { (self.classes[i] if i < len(self.classes) else str(i)) : float(preds[i]) for i in range(len(preds)) }
        idx = int(np.argmax(preds))
        label = self.classes[idx] if idx < len(self.classes) else str(idx)
        return label, probs


app = FastAPI(title="Eye Disease Classification API")

# allow CORS from everywhere (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)

from fastapi.staticfiles import StaticFiles
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")


# instantiate predictor (loads model file from current working dir)
predictor = ModelPredictor(model_path="model.h5")


@app.get("/health")
def health():
    return {"status": "ok"}


import shutil
import uuid
from datetime import datetime
from pydantic import BaseModel
from database import get_db
from sqlalchemy.orm import Session

# ... (existing imports)

class PredictionResponse(BaseModel):
    id: int
    label: str
    confidence: str
    timestamp: str
    severity: str
    image_path: str

@app.get("/users/me", response_model=auth.UserResponse)
async def read_users_me(current_user: models.User = Depends(auth.get_current_user)):
    return current_user

@app.get("/history", response_model=List[PredictionResponse])
async def get_history(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    return db.query(models.Prediction).filter(models.Prediction.user_id == current_user.id).all()

@app.post("/predict")
async def predict(file: UploadFile = File(...), current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    """
    Accepts an image file upload and returns predicted class and probabilities.
    Requires authentication.
    """
    content_type = (file.content_type or "").lower()
    if not content_type.startswith("image"):
        raise HTTPException(status_code=400, detail="Uploaded file must be an image")

    # Save image
    os.makedirs("uploads", exist_ok=True)
    file_extension = os.path.splitext(file.filename)[1]
    file_name = f"{uuid.uuid4()}{file_extension}"
    file_path = os.path.join("uploads", file_name)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Read for prediction
    with open(file_path, "rb") as f:
        image_bytes = f.read()

    try:
        label, probabilities = predictor.predict(image_bytes)
        
        # Determine severity (mock logic, refine as needed)
        severity = "High" if label != "normal" else "Low"
        confidence = f"{probabilities[label]:.2f}"

        # Save prediction
        prediction = models.Prediction(
            user_id=current_user.id,
            image_path=file_path,
            label=label,
            confidence=confidence,
            timestamp=datetime.now().isoformat(),
            severity=severity
        )
        db.add(prediction)
        db.commit()
        db.refresh(prediction)

    except FileNotFoundError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {e}")

    return JSONResponse({
        "predicted_label": label, 
        "probabilities": probabilities,
        "severity": severity,
        "confidence": confidence,
        "image_path": file_path,
        "timestamp": prediction.timestamp
    })


if __name__ == "__main__":
    # When executed directly, run the FastAPI app with Uvicorn.
    # This makes `python app.py` behave like `uvicorn app:app`.
    import uvicorn

    uvicorn.run("app:app", host="127.0.0.1", port=8000, log_level="info")
