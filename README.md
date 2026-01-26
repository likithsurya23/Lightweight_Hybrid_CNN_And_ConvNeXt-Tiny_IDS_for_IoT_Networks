
# 🔐 IoT Intrusion Detection System (IDS) Dashboard

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Django](https://img.shields.io/badge/Django-5.1.2-092E20?logo=django)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-EE4C2C?logo=pytorch)
![License](https://img.shields.io/badge/license-MIT-green)

**Full-Stack Dashboard for Hybrid CNN & ConvNeXt-Tiny Based Intrusion Detection**

[Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [API Docs](#-api-documentation)

</div>

---

## ✨ Features

### 🎯 Core IDS Features

* **Hybrid CNN + ConvNeXt-Tiny Model** – Combines fast local feature extraction (CNN) with powerful global feature learning (ConvNeXt-Tiny).
* **Lightweight Architecture** – Optimized for IoT environments with low latency and reduced computational cost.
* **High Accuracy Detection** – Effectively classifies traffic as *Normal* or *Attack*.
* **Single Prediction** – Predict intrusion for a single network traffic sample.
* **Batch Prediction** – Upload and classify large datasets at once.
* **Real-Time Inference** – Fast backend response suitable for live monitoring systems.
* **Model Checkpoint Support** – Load trained models from `Train/IDS_Checkpoints` without retraining.

---

### 📊 Analytics & Monitoring

* **Traffic Visualization** – Graphical view of normal vs attack traffic.
* **Prediction Statistics** – Accuracy, detection rate, and class distribution.
* **Model Insights Page** – Dedicated section explaining Hybrid CNN & ConvNeXt-Tiny architecture.
* **Dashboard Metrics** – Key IDS indicators shown in a professional dashboard layout.

---

### 🖥️ Frontend Features (ids_frontend)

* **Sidebar-Based Navigation** – Clean and professional navigation using `Navbar` + `Sidebar`.
* **Centralized Layout System** – `Layout.jsx` manages structure consistency across all pages.
* **Dark/Light Theme Support** – Managed globally using `ThemeContext.js`.
* **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.
* **Modular Page Design** – Separate pages for:

  * Landing
  * Dashboard
  * Single Prediction
  * Batch Prediction
  * Analytics
  * Model Information
  * About

---

### ⚙️ Backend Features (ids_backend)

* **RESTful API Design** – Clean API structure for prediction requests.
* **Model Inference Engine** – Loads trained models from the `model/` directory.
* **Checkpoint Management** – Uses saved weights from `Train/IDS_Checkpoints`.
* **Scalable Architecture** – Easily extendable for real-time traffic capture and edge deployment.

---

## 🏗️ Project Structure

### Backend (`ids_backend/`)
```
ids_backend/
├── api/                    # Django app for API endpoints
│   ├── migrations/        # Database migrations
│   ├── views.py          # API view functions
│   ├── serializers.py    # Data serialization
│   └── urls.py          # API routing
├── model/                 # ML model implementation
│   ├── hybrid_model.py   # CNN + ConvNeXt-Tiny architecture
│   ├── Hybrid_CNN_ConvNeXtTiny_Final.pth     # model path
├── Train/                 # Training scripts and checkpoints
│   └── IDS_Checkpoints/  # Saved model weights
└── ids_backend/          # Django project settings
    ├── settings.py       # Django configuration
    ├── urls.py          # Project URL routing
    └── wsgi.py          # WSGI application
```

### Frontend (`ids_frontend/src/`)
```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Layout components
│   ├── Navbar/          # Navigation sidebar
│   ├── Sidebar/         # Main sidebar component
│   └── Footer/          # Footer component
├── context/             # React context providers
│   └── ThemeContext.js  # Theme management
├── pages/               # Application pages
│   ├── Landing/         # Home page
│   ├── Dashboard/       # Main dashboard
│   ├── SinglePrediction/# Single prediction interface
│   ├── BatchPrediction/ # Batch processing interface
│   ├── Analytics/       # Data visualization
│   ├── ModelInfo/       # Model details
│   └── About/           # About page
└── App.jsx             # Main application component
```

---

## 🚀 Quick Start

### Prerequisites
- **Python 3.8+**
- **Node.js 16+**
- **PostgreSQL** (recommended) or SQLite
- **Git**

### Installation

**1. Clone the repository**
```bash
git clone <repository-url>
cd IoT-IDS-Dashboard
```

**2. Backend Setup**
```bash
cd ids_backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env with your settings

# Apply migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Load sample data (optional)
python manage.py loaddata sample_data.json
```

**3. Frontend Setup**
```bash
cd ../ids_frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your API URL
```

**4. Run Development Servers**

**Backend (Django):**
```bash
cd ../ids_backend
python manage.py runserver
```
✅ Backend running at: `http://localhost:8000`

**Frontend (React):**
```bash
cd ../ids_frontend
npm run dev
```
✅ Frontend running at: `http://localhost:5173`

---

## 📡 API Documentation

### Authentication Endpoints
```http
POST /api/auth/login/
POST /api/auth/register/
POST /api/auth/logout/
GET  /api/auth/user/
```

### Prediction Endpoints
```http
POST /api/predict/single/
Content-Type: application/json

{
    "features": [0.1, 0.5, 0.3, ...],
    "timestamp": "2024-01-15T10:30:00Z"
}

Response:
{
    "prediction": "DDoS",
    "confidence": 0.987,
    "is_malicious": true,
    "timestamp": "2024-01-15T10:30:00Z"
}
```

```http
POST /api/predict/batch/
Content-Type: multipart/form-data

file: <CSV_FILE>

Response:
{
    "job_id": "uuid",
    "status": "processing",
    "results_url": "/api/results/uuid/"
}
```

## 🎨 Frontend Pages Overview

### Landing Page (`/`)
- Project introduction and key features
- Quick start guide
- Live statistics preview

### Dashboard (`/dashboard`)
- Real-time monitoring dashboard
- Key metrics cards
- Recent predictions table
- System health indicators

### Single Prediction (`/predict/single`)
- Form for single prediction input
- Feature visualization
- Real-time results display
- Historical comparison

### Batch Prediction (`/predict/batch`)
- File upload interface (CSV/JSON)
- Batch processing status
- Results table with filtering
- Export functionality

### Analytics (`/analytics`)
- Interactive charts and graphs
- Attack type distribution
- Timeline analysis
- Performance trends

### Model Info (`/model`)
- Model architecture visualization
- Performance metrics
- Training history
- Version management

### About (`/about`)
- Project documentation
- Team information
- Acknowledgments
- License details

---

## 🔧 Configuration

### Backend Environment Variables (`.env`)
```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/ids_db
# or for SQLite
# DATABASE_URL=sqlite:///db.sqlite3

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:5173

# Model Settings
MODEL_PATH=Train/IDS_Checkpoints/best_model.pth
FEATURE_COUNT=42
CLASS_NAMES=["Normal","DDoS","PortScan","Botnet","SQLi","XSS"]
```

### Frontend Environment Variables (`.env`)
```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_WS_URL=ws://localhost:8000/ws/predictions/
REACT_APP_DEFAULT_THEME=dark
REACT_APP_PAGE_SIZE=10
```

---

## 🤖 Model Integration

### Loading the Model
```python
# model/inference.py
import torch
from model.hybrid_model import HybridCNNConvNeXt

def load_model(checkpoint_path):
    model = HybridCNNConvNeXt(
        input_channels=42,
        num_classes=6,
        dropout_rate=0.3
    )
    model.load_state_dict(torch.load(checkpoint_path))
    model.eval()
    return model
```

### Making Predictions
```python
# api/views.py
from model.inference import predict_single, predict_batch

@api_view(['POST'])
def single_prediction(request):
    features = request.data['features']
    result = predict_single(features)
    return Response(result)

@api_view(['POST'])
def batch_prediction(request):
    file = request.FILES['file']
    job_id = start_batch_prediction(file)
    return Response({'job_id': job_id})
```

---

## 📊 Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant ML_Model
    participant Database

    User->>Frontend: Submit Network Data
    Frontend->>Backend: POST /api/predict/single/
    Backend->>ML_Model: Process Features
    ML_Model->>Backend: Return Prediction
    Backend->>Database: Store Result
    Backend->>Frontend: JSON Response
    Frontend->>User: Display Results
    
    Note over Backend,Database: Real-time updates via WebSocket
    Backend->>Frontend: WS: New Prediction
```

## 🧪 Testing

### Backend Tests
```bash
cd ids_backend
python manage.py test api
python manage.py test model
```

### Frontend Tests
```bash
cd ids_frontend
npm test
npm run test:coverage
```

### API Testing with Postman
```bash
# Import Postman collection
open docs/IDS_API.postman_collection.json
```

---

## 📈 Performance Optimization

### Backend Optimizations
- **Database Indexing**: Optimized queries with Django indexes
- **Caching**: Redis cache for frequent predictions
- **Connection Pooling**: Database connection reuse
- **Asynchronous Processing**: Celery for batch predictions

### Frontend Optimizations
- **Code Splitting**: React.lazy for route-based splitting
- **Memoization**: React.memo for expensive components
- **Virtual Scrolling**: For large prediction tables
- **Image Optimization**: Lazy loading and WebP conversion

### Model Optimizations
- **Quantization**: FP16 precision for faster inference
- **Pruning**: Remove unnecessary model weights
- **ONNX Export**: Cross-platform optimized model format

---

## 🔒 Security Considerations

### Authentication & Authorization
- JWT token-based authentication
- Role-based access control (RBAC)
- Session management with secure cookies
- Rate limiting on prediction endpoints

### Data Security
- Input validation and sanitization
- SQL injection prevention
- File upload restrictions
- HTTPS enforcement in production

### Model Security
- Model watermarking
- Adversarial attack detection
- Secure model storage
- Access logging for predictions

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement`)
3. **Commit** changes (`git commit -m 'Add some improvement'`)
4. **Push** to branch (`git push origin feature/improvement`)
5. **Open** a Pull Request

### Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint for JavaScript/React
- Write tests for new features
- Update documentation accordingly
- Use conventional commit messages

---

## 📝 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Likith D

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
---

## 🙏 Acknowledgments

- **Django Team** for the excellent web framework
- **React Team** for the modern UI library
- **PyTorch Team** for deep learning capabilities
- **IoT Security Research Community** for datasets and benchmarks

---

## 📧 Support

- **Documentation**: Check the `/docs` folder
- **Issues**: Report bugs on GitHub Issues
- **Discussions**: Join community discussions
- **Email**: [your-email@example.com]

---

<div align="center">

**🔒 Secure Your IoT Networks with Intelligent Intrusion Detection**

**⭐ Star this repository if you find it useful for your IoT security projects!**

[⬆ Back to Top](#-iot-intrusion-detection-system-ids-dashboard)

</div>
```

