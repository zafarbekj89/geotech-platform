# GEO TECH Platform 🌍

**Professional Geotechnical Engineering SaaS Platform**

Comprehensive web-based platform for geotechnical engineering calculations, laboratory management, and online tools.

## 🎯 Features

### Engineering Applications
- ✅ Bearing Capacity Calculator
- ✅ Settlement Analysis
- ✅ Pile Foundation Designer
- ✅ Liquefaction Risk Assessment
- ✅ Slope Stability Analysis
- ✅ Retaining Wall Designer
- ✅ Seismic Analysis Tool

### Database & Knowledge Base
- ✅ Soil Properties Library
- ✅ Geotechnical Standards (KMK, SNiP, etc.)
- ✅ Lab Test Database
- ✅ Material Properties
- ✅ Reference Calculations

### Laboratory Management
- ✅ Test Request System
- ✅ Sample Tracking
- ✅ Result Management
- ✅ Certificate Generation
- ✅ Report Generation (PDF/DOCX)

### E-Commerce
- ✅ Product Catalog
- ✅ Shopping Cart
- ✅ Checkout System
- ✅ Payment Integration (Stripe, Click, Payme)
- ✅ Order Management
- ✅ Delivery Tracking

### Multi-Language Support
- 🇺🇿 Uzbek (O'zbekcha)
- 🇬🇧 English
- 🇷🇺 Russian (Русский)

## 🏗️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Vite** - Build tool
- **Axios** - HTTP client
- **i18next** - Multi-language support
- **React Router** - Navigation
- **Zustand** - State management

### Backend
- **Python 3.10+** - Programming language
- **FastAPI** - Web framework
- **SQLAlchemy** - ORM
- **PostgreSQL** - Database
- **Pydantic** - Data validation
- **JWT** - Authentication
- **Stripe/Click/Payme** - Payment processing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container setup
- **Vercel** - Frontend hosting
- **Railway/AWS** - Backend hosting

## 📁 Project Structure

```
geotech-platform/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── api/          # API client
│   │   ├── context/      # Context providers
│   │   ├── locales/      # i18n translations
│   │   └── styles/       # Global styles
│   └── package.json
├── backend/               # FastAPI application
│   ├── app/
│   │   ├── models/       # Database models
│   │   ├── schemas/      # Pydantic schemas
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── core/         # Core utilities
│   └── requirements.txt
├── database/              # Database setup
│   └── schema.sql        # SQL schema
└── docs/                  # Documentation
    ├── SETUP.md
    ├── API.md
    ├── DATABASE.md
    └── BRANDING.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL 12+
- Docker (optional)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Access: http://localhost:5173

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Access: http://localhost:8000
API Docs: http://localhost:8000/docs

### Database Setup

```bash
# Create database
creatdb geotech_db

# Import schema
psql -U postgres -d geotech_db -f database/schema.sql
```

### Docker Setup (Optional)

```bash
docker-compose up
```

## 📚 Documentation

- [Setup Guide](docs/SETUP.md)
- [API Documentation](docs/API.md)
- [Database Schema](docs/DATABASE.md)
- [Branding Guide](docs/BRANDING.md)

## 🎨 Branding

### Logo
```
⬢ GEO TECH
```

### Colors
- Primary Blue: `#1E3A8A`
- Secondary Green: `#059669`
- Accent Red: `#DC2626`
- Background: `#F9FAFB`
- Text: `#111827`

### Typography
- Headings: Inter Bold
- Body: Inter Regular
- Code: Roboto Mono

## 🔐 Environment Variables

Create `.env` files in `frontend/` and `backend/` directories:

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=GEO TECH
VITE_DEFAULT_LANGUAGE=en
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost/geotech_db
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
CLICK_MERCHANT_ID=your-click-id
PAYME_MERCHANT_ID=your-payme-id
```

## 📖 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product details
- `POST /api/products` - Create product (admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/{id}` - Get order details

### Calculations
- `POST /api/calculations` - Create calculation
- `GET /api/calculations` - Get calculations
- `GET /api/calculations/{id}` - Get calculation result
- `GET /api/calculations/{id}/report` - Download report

### Payments
- `POST /api/payments/stripe` - Stripe payment
- `POST /api/payments/click` - Click payment
- `POST /api/payments/payme` - Payme payment

For full API documentation, see [API.md](docs/API.md)

## 👥 Team

- **Founder:** Zafarbek Jumayev
- **Platform:** Professional Geotechnical Engineering

## 📄 License

MIT License - see LICENSE file

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines.

## 📞 Contact

- Website: https://geotech.com
- Email: info@geotech.com
- GitHub: https://github.com/zafarbekj89/geotech-platform

---

**Version:** 0.1.0-MVP  
**Last Updated:** May 20, 2026  
**Status:** 🔴 In Development
