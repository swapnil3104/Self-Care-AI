from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    hashed_password = Column(String)
    dob = Column(String)
    gender = Column(String)
    address = Column(String)
    profile_image = Column(String) # Path or Base64

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    image_path = Column(String)
    label = Column(String)
    confidence = Column(String) # Store as string or float
    timestamp = Column(String)
    severity = Column(String)
