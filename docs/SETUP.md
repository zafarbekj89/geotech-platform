# GEO TECH - Setup Guide

## Prerequisites

- Node.js 18+ (https://nodejs.org/)
- Python 3.10+ (https://www.python.org/)
- PostgreSQL 12+ (https://www.postgresql.org/)
- Git (https://git-scm.com/)
- Docker & Docker Compose (optional)

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/zafarbekj89/geotech-platform.git
cd geotech-platform
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local`:

```
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=GEO TECH
VITE_DEFAULT_LANGUAGE=en
```

Run development server:

```bash
npm run dev
```

Access: http://localhost:5173

### 3. Backend Setup

```bash
cd backend
python -m venv venv
```

Activate virtual environment:

```bash
# On macOS/Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env`:

```
DATABASE_URL=postgresql://user:password@localhost:5432/geotech_db
JWT_SECRET=your-secret-key
DEBUG=True
```

Run server:

```bash
python main.py
```

Access:
- API: http://localhost:8000
- Docs: http://localhost:8000/docs

### 4. Database Setup

Create database:

```bash
creatdb geotech_db
```

Import schema:

```bash
psql -U postgres -d geotech_db -f database/schema.sql
```

### 5. Docker Setup (Alternative)

```bash
docker-compose up
```

This will start:
- PostgreSQL on port 5432
- FastAPI on port 8000
- React on port 5173

## Configuration

### Environment Variables

#### Frontend (`.env.local`)

```
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=GEO TECH
VITE_DEFAULT_LANGUAGE=en
VITE_STRIPE_PUBLIC_KEY=pk_test_xxxxx
```

#### Backend (`.env`)

```
DATABASE_URL=postgresql://user:password@localhost:5432/geotech_db
JWT_SECRET=your-secret-key-minimum-32-characters
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
DEBUG=True
ENVIRONMENT=development
```

## Development

### Frontend

```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run ESLint
```

### Backend

```bash
cd backend
python main.py   # Start server
pytest          # Run tests
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173 (Frontend)
lsof -ti:5173 | xargs kill -9

# Kill process on port 8000 (Backend)
lsof -ti:8000 | xargs kill -9

# Kill process on port 5432 (Database)
lsof -ti:5432 | xargs kill -9
```

### Database Connection Error

1. Ensure PostgreSQL is running
2. Check DATABASE_URL in `.env`
3. Verify credentials

### CORS Errors

Ensure backend CORS is configured for your frontend URL in `main.py`

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for production setup.

## Next Steps

1. ✅ Setup complete
2. 📝 Create user account
3. 🔧 Configure payment systems
4. 📦 Add products
5. 🚀 Deploy to production
