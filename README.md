# 📚 Virtual Library API

This is a RESTful API for a Virtual Library built with Node.js, Express, Sequelize, and PostgreSQL.  
It supports user authentication (admin and user), book and author management, and a book loan system.

---

## 🚀 Features

- JWT Authentication with roles (`admin`, `user`)
- Admins can manage books and authors
- Users can borrow and return books
- Book availability is automatically managed
- Users can only see their own loans
- Admins can view all loans

---

## 🛠 Tech Stack

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- JWT for authentication

---

## 🔐 Authentication

To use protected routes, authenticate with:

**POST** `/api/auth/login`

**Admin user**
```json
{ "email": "admin@admin.com", "password": "123456" }
```

**Regular user**
```json
{ "email": "user@normal.com", "password": "123456" }
```

The response will contain a token:
```
{ "token": "..." }
```

Use it in requests:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 📚 Book Endpoints

| Method | Route                  | Auth     | Role     | Description                         |
|--------|------------------------|----------|----------|-------------------------------------|
| GET    | `/api/books`           | ❌       | any      | List all books                      |
| GET    | `/api/books/available` | ❌       | any      | List only available books           |
| GET    | `/api/books/:id`       | ❌       | any      | Get book details by ID              |
| POST   | `/api/books`           | ✅       | admin    | Create a new book                   |
| PUT    | `/api/books/:id`       | ✅       | admin    | Update a book                       |
| DELETE | `/api/books/:id`       | ✅       | admin    | Delete a book                       |

---

## ✍️ Author Endpoints

| Method | Route                  | Auth     | Role     | Description                         |
|--------|------------------------|----------|----------|-------------------------------------|
| GET    | `/api/authors`         | ❌       | any      | List all authors                    |
| GET    | `/api/authors/:id`     | ❌       | any      | Get author by ID                    |
| POST   | `/api/authors`         | ✅       | admin    | Create new author                   |
| PUT    | `/api/authors/:id`     | ✅       | admin    | Update author                       |
| DELETE | `/api/authors/:id`     | ✅       | admin    | Delete author                       |

---

## 🔄 Loan Endpoints

| Method | Route                     | Auth     | Role     | Description                             |
|--------|---------------------------|----------|----------|-----------------------------------------|
| GET    | `/api/loans`              | ✅       | admin    | View all loans                          |
| GET    | `/api/loans/me`           | ✅       | user     | View own loans                          |
| POST   | `/api/loans`              | ✅       | user     | Borrow a book (provide book_id)         |
| PUT    | `/api/loans/:id/return`   | ✅       | user/admin | Return a borrowed book                |

---

## ✅ How to Start

1. Clone the repository
2. Run `npm install`
3. Set up your `.env` file with PostgreSQL credentials:
```
DATABASE_URL=postgres://user:password@localhost:5432/library
JWT_SECRET=your_jwt_secret
PORT=3000
```
4. Run the server:
```bash
node server.js
```

---

## 📌 Notes

- No database for users is used — the users are hardcoded in `authController.js`
- You can extend this with a user table, validations, and more features like reservations, PDF export, etc.

---

## 👨‍💻 Developed by

Damião Gomes  
Full Stack Developer
