# GEO TECH - Database Schema

## Overview

PostgreSQL database with 10 tables for complete platform functionality.

## Tables

### 1. Users

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    phone VARCHAR(20),
    role VARCHAR(50) DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Roles:** user, engineer, lab, admin

### 2. Products

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    product_type VARCHAR(50) NOT NULL,
    image_url VARCHAR(255),
    stock INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Types:** tool, license, service, equipment

### 3. Orders

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    payment_method VARCHAR(50),
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Statuses:** pending, processing, completed, cancelled

### 4. Order Items

```sql
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    product_id INTEGER NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
```

### 5. Calculations

```sql
CREATE TABLE calculations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    app_type VARCHAR(100) NOT NULL,
    input_data JSONB,
    results JSONB,
    pdf_report BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. Lab Tests

```sql
CREATE TABLE lab_tests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    test_type VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    results JSONB,
    certificate_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 7. Soil Properties

```sql
CREATE TABLE soil_properties (
    id SERIAL PRIMARY KEY,
    soil_type VARCHAR(100) NOT NULL,
    properties_json JSONB,
    standards VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 8. Payments

```sql
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    method VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    transaction_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Methods:** stripe, click, payme, bank_transfer  
**Statuses:** pending, completed, failed, refunded

### 9. Support Tickets

```sql
CREATE TABLE support_tickets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    subject VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Indexes

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_calculations_user_id ON calculations(user_id);
CREATE INDEX idx_payments_order_id ON payments(order_id);
```

## Relationships

```
users
  ├── orders (1:N)
  ├── calculations (1:N)
  ├── lab_tests (1:N)
  └── support_tickets (1:N)

orders
  ├── order_items (1:N)
  └── payments (1:N)

products
  └── order_items (1:N)
```

## Data Types

- **SERIAL** - Auto-incrementing integer
- **VARCHAR** - String (variable length)
- **TEXT** - Long text
- **JSONB** - JSON binary (flexible data)
- **BYTEA** - Binary data (PDFs, files)
- **DECIMAL(10,2)** - Fixed-point number (prices)
- **BOOLEAN** - True/False
- **TIMESTAMP** - Date and time

## Backup & Restore

### Backup

```bash
pg_dump geotech_db > backup.sql
```

### Restore

```bash
psql geotech_db < backup.sql
```
