from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="GEO TECH API",
    description="Professional Geotechnical Engineering SaaS Platform",
    version="0.1.0",
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "https://geotech.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
@app.get("/")
async def root():
    return {
        "message": "Welcome to GEO TECH API",
        "version": "0.1.0",
        "docs": "/docs",
        "redoc": "/redoc"
    }

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "GEO TECH API"
    }

@app.get("/api/products")
async def get_products():
    """Get all products"""
    return {
        "products": [
            {"id": 1, "name": "Bearing Capacity Calculator", "price": 29, "category": "tools"},
            {"id": 2, "name": "Settlement Analysis Pro", "price": 49, "category": "tools"},
            {"id": 3, "name": "Soil Database License", "price": 99, "category": "database"},
            {"id": 4, "name": "Lab Management System", "price": 199, "category": "lab"},
        ]
    }

@app.post("/api/auth/register")
async def register(email: str, password: str, full_name: str):
    """Register new user"""
    return {
        "message": "User registered successfully",
        "user": {
            "id": 1,
            "email": email,
            "full_name": full_name,
        }
    }

@app.post("/api/auth/login")
async def login(email: str, password: str):
    """Login user"""
    return {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
        "token_type": "bearer",
        "user": {
            "id": 1,
            "email": email,
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
