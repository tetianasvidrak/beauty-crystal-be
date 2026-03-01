# Scheduler App - Backend

Backend API for the **Scheduler App** - appointment management system for beauty salons and service-based businesses.

This server handles authentication, data persistence, and business logic for scheduling, clients, services, and employees.

Frontend communicates with this backend: [Scheduler Frontend](https://github.com/tetianasvidrak/appointment-scheduler).

Built with **Node.js, Express and MongoDB**.

---

## ✨ Features

### 🔐 Authentication

- User registration
- User login
- JWT-based authentication
- Protected routes via middleware
- Password hashing with bcrypt

### 📅 Visit Management

- Create, update, delete visits
- Store scheduling data
- Designed for calendar-based frontend integration

### 👥 Clients Management

- Create, edit and delete clients

### 🛎 Services Management

- Manage services with duration, price and category

### 🏷 Categories & Employees

- Manage service categories
- Manage employees

---

## 🛠 Technology Stack

- Node.js
- Express 5
- MongoDB
- Mongoose
- jsonwebtoken (JWT)
- bcrypt
- dotenv
- cors
- nodemon
- module-alias

---

## 📂 Project Structure

```
scheduler-be/
│
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
│
├── index.js
└── .env
```

---

## ⚙️ Installation & Running Locally

1. Clone repository

   ```
   git clone https://github.com/tetianasvidrak/appoinment-scheduler-be.git
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Create environment variables

   ```
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key

   ```

4. Run server

Development mode:

    ```
    npm run dev
    ```

Production mode:

    ```
    npm start
    ```

Server runs on:

    ```
    http://localhost:5000
    ```

## 🔐 Authentication

### Register

**_POST_** `/api/auth/register`

Body:

    ```json
    {
        "email": "admin@salon.com",
        "password": "123456"
    }
    ```

### Login

**_POST_** `/api/auth/login`

Response:

    ```json
    {
        "token": "JWT_TOKEN"
    }
    ```

### Using Protected Routes

All protected routes require a **Bearer Token** in the request headers.

Example header:

    ```
    Authorization: Bearer YOUR_JWT_TOKEN
    ```

Example request:

    ```
    GET /api/visits
    ```

---

## 📌 API Routes

### Auth

- **POST** `/auth/register`
- **POST** `/auth/login`

### Categories

- **GET** `/categories`
- **POST** `/categories`
- **PUT** `/categories/:id`
- **DELETE** `/categories/:id`

### Clients

- **GET** `/clients`
- **POST** `/clients`
- **PUT** `/clients/:id`
- **DELETE** `/clients/:id`

### Services

- **GET** `/services`
- **POST** `/services`
- **PUT** `/services/:id`
- **DELETE** `/services/:id`

### Employees

- **GET** `/employees`
- **POST** `/employees`
- **PUT** `/employees/:id`
- **DELETE** `/employees/:id`

### Visits

- **GET** `/visits`
- **POST** `/visits`
- **PUT** `/visits/:id`
- **DELETE** `/visits/:id`

---

## 🔒 Security

- Password are hashed using **bcrypt**
- JWT authentication
- Protected routes secured via **middleware**
- Sensitive data stored in **environment variables**

---

## 🚀 Future Improvements

- Multi-salon (multi-tenant) architecture
- Role-based access control
- Refresh tokens
- Swagger API documentation
- Deployment documentation
