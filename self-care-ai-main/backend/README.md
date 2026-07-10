# Eye Disease Classification - FastAPI server

This directory adds a small FastAPI server to serve predictions from the trained
EfficientNetB7 model (`model.h5`). It accepts an image upload,
preprocesses it the same way used for training (EfficientNet `preprocess_input`),
and returns the predicted class plus probabilities for each class.

Files added
- `app.py` - FastAPI application with `/predict` and `/health` endpoints
- `model.py` - helper that loads the Keras model and runs preprocessing/prediction
- `classes.txt` - one class name per line (edit if your model used different labels)
- `requirements.txt` - Python dependencies

Quick start (PowerShell)

1. Create a virtual environment and activate it (optional but recommended):

   python -m venv .venv; .\.venv\Scripts\Activate.ps1

2. Install dependencies:

   pip install -r requirements.txt

3. Place your `model.h5` into this project folder (same level as `app.py`).

4. If necessary, edit `classes.txt` so each line contains the class name in the exact
   order the model outputs (one name per line).

5. Run the server:

   uvicorn app:app --host 0.0.0.0 --port 8000 --reload

Example request (Python):

```python
import requests

url = "http://127.0.0.1:8000/predict"
files = {"file": open("example.jpg","rb")}
resp = requests.post(url, files=files)
print(resp.json())
```

Notes
- The server uses TensorFlow to load the model; install the correct `tensorflow` wheel for your system.
- If the model or class order does not match the placeholder `classes.txt`, update the file.
