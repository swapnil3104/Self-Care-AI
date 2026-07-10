# ﻿# 👁️ SelfCareAI

<p align="center">
  <h3>AI-Powered Eye Disease Detection and Health Management Platform</h3>

  A full-stack web application that uses Deep Learning to classify retinal eye diseases, securely manages users, and provides medical guidance through an intuitive dashboard.
</p>

---

## 📌 Overview

SelfCareAI combines **Artificial Intelligence**, **Computer Vision**, and **Modern Web Technologies** to provide early screening for common eye diseases.

Users can register, upload retinal images, receive AI-powered disease predictions, view prediction history, and explore educational medical resources.

---

# ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 📤 Retina Image Upload
- 🤖 AI-based Disease Prediction
- 📊 Prediction Confidence Scores
- 📁 Prediction History
- 📚 Medical Library
- 📄 PDF Report Generation
- 📱 Responsive UI
- 💾 SQLite Database

---

# 🏗 System Architecture

```text
                    +----------------------+
                    |      User Browser    |
                    +----------+-----------+
                               |
                               |
                        React + TypeScript
                               |
                    Axios REST API Requests
                               |
                 +-------------▼--------------+
                 |        FastAPI Server      |
                 +-------------+--------------+
                               |
          +--------------------+----------------------+
          |                    |                      |
          |                    |                      |
 Authentication         TensorFlow Model       SQLite Database
     (JWT)              Image Prediction       Users & History
          |                    |                      |
          +--------------------+----------------------+
                               |
                       JSON Response
                               |
                        React Dashboard
```

---

# 🔄 Prediction Workflow

```text
          User Uploads Retina Image
                     │
                     ▼
        Frontend (React + TypeScript)
                     │
                     ▼
        POST /predict (FastAPI API)
                     │
                     ▼
        Image Preprocessing (224×224)
                     │
                     ▼
       TensorFlow/Keras AI Model
                     │
                     ▼
        Disease Classification
                     │
                     ▼
 Confidence + Severity Generated
                     │
                     ▼
     Prediction Stored in SQLite
                     │
                     ▼
      Display Results on Dashboard
```

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- Recharts
- jsPDF

## Backend

- FastAPI
- TensorFlow / Keras
- SQLAlchemy
- SQLite
- JWT Authentication
- Pillow
- NumPy

---

# 🧠 AI Model

### Model Information

| Property | Value |
|----------|-------|
| Framework | TensorFlow / Keras |
| Input Size | 224 × 224 |
| Model Type | CNN |
| Output Classes | 4 |

### Disease Classes

- 👁 Glaucoma
- 👁 Cataract
- 👁 Diabetic Retinopathy
- 👁 Normal Eye

---

# 📂 Project Structure

```text
SelfCareAI/
│
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── eslint.config.js
├── public/
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── App.css
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AuthLayout.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── SignupPage.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   │
│   │   ├── Dashboard/
│   │   │   └── DashboardPage.tsx
│   │   │
│   │   ├── Home/
│   │   │   └── HomePage.tsx
│   │   │
│   │   └── MedicalLibrary/
│   │       ├── index.tsx
│   │       ├── Hero.tsx
│   │       ├── ConditionCards.tsx
│   │       │
│   │       ├── Conditions/
│   │       │   ├── GlaucomaPage.tsx
│   │       │   ├── CataractPage.tsx
│   │       │   └── DiabeticRetinopathyPage.tsx
│   │       │
│   │       └── Prevention/
│   │           ├── EyeHealthPage.tsx
│   │           └── EyeExercisesPage.tsx
│   │
│   ├── lib/
│   │   └── api.ts
│   │
│   └── utils/
│       └── pdfGenerator.ts
│
├── backend/
│   ├── app.py
│   ├── auth.py
│   ├── database.py
│   ├── models.py
│   ├── requirements.txt
│   ├── model.h5
│   ├── sql_app.db
│   ├── uploads/
│   └── README.md
│
└── Eye_Diseases_Classification.ipynb
```
# 🔐 Authentication Flow

```text
 Register
    │
    ▼
 Store User
    │
    ▼
 Login
    │
    ▼
 Generate JWT Token
    │
    ▼
 Store Token (Browser)
    │
    ▼
 Protected Dashboard
    │
    ▼
 Authenticated API Calls
```

---

# 🌐 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/token` | Login |
| GET | `/users/me` | User Profile |
| POST | `/predict` | AI Prediction |
| GET | `/history` | Prediction History |
| GET | `/health` | API Health |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/SelfCareAI.git

cd SelfCareAI
```

---

## Backend

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

Runs at

```
http://localhost:8000
```

---

## Frontend

```bash
npm install

npm run dev
```

Runs at

```
http://localhost:5173
```

---

# 📊 Application Workflow

```text
                ┌───────────────────┐
                │   User Registers  │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │      Login        │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │ Upload Eye Image  │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │ AI Prediction     │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │ Save to Database  │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │ Dashboard Result  │
                └───────────────────┘
```

---

# 🚀 Future Enhancements

- Docker Deployment
- PostgreSQL Database
- Explainable AI (Grad-CAM)
- Cloud Storage
- Email Verification
- Password Reset
- Doctor Consultation Module
- Mobile Application
- Multi-language Support

---

# 👨‍💻 Author

**Your Name**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

Email: your@email.com

---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ If you found this project useful, don't forget to give it a star!Self-Care-AI
