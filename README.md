# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Features
## Task 1 — Project Setup
Backend built with Express.js and Node.js
MongoDB connection set up using Mongoose
Vite + React front-end with proxy config
Organized directory structure
Environment variables for API keys and configuration

## Task 2 — Back-End Development
REST API endpoints implemented:
### Posts API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Retrieve all posts (pagination + search) |
| GET | `/api/posts/:id` | Retrieve one post |
| POST | `/api/posts` | Create a post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

---

### Categories API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| POST | `/api/categories` | Create a category |

---

### Authentication API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user (returns JWT) |

- JWT used for protected routes
- Authentication middleware implemented

---

### Comments API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/comments/:postId` | Get comments for a post |
| POST | `/api/comments/:postId` | Add a comment to a post |

---

### Other Backend Features
- Multer for image uploads
- express-validator for validation
- Error-handling middleware

---

### Test Login Account
email: lisa@example.com
password: 123456


## Task 3 — Front-End Development
React UI created using Vite
Views:
Post List
Single Post
Create/Edit Post

Login/Register
React Router for navigation
State management using hooks and context
Custom hooks for API communication

## Task 4 — Integration and Data Flow
Fully integrated front-end and back-end API calls
State management for posts, categories, and auth
Form validation
Loading and error states
Optimistic UI updates

## Task 5 — Advanced Features
User authentication with JWT
Image upload using Multer
Pagination for posts
Post search and category filtering
Blog comments system

## Tech Stack
Frontend:
React
React Router
Context API
Vite
Tailwind CSS

Backend:
Node.js
Express
MongoDB + Mongoose
Multer
JSON Web Tokens (JWT)
express-validator


## Project Structure

```
mern-project/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code   
│   │   ├── assets/  
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── App.jsx         # Main application component
│   └── index.html
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── uploads/            # Uploaded photos
│   ├── vaidation/
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```
## Running the Project
# Backend
```
cd mern-project\server
npm install
npm start
```

# Frontend
```
cd mern-project\client
npm install
npm run dev
```

## Environment Variables
# Backend .env
MONGODB_URI=your_mongo_uri
PORT=5000
JWT_SECRET=anysecretstring

# Frontend .env
VITE_API_URL=http://localhost:5000/api

# Note: 
Login and registration work via JWT authentication. After login, JWT token is stored in localStorage and required for protected routes such as /create.

## Outcome
A complete, responsive MERN blog app with:
CRUD functionality
Authentication + protected routes
File upload
Pagination
Search & filtering
Comments
Clean code and separation of concerns

## Images of working project.
Connection to database successful. <img width="1398" height="530" alt="image" src="https://github.com/user-attachments/assets/113ed888-280e-48ec-a522-ee71603adf2a" />

Thunder client test to log in. <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3681d8a7-d0e9-465c-84c9-31e875d9f530" />

Categories posted via thunder client display 
i) on port <img width="1914" height="282" alt="image" src="https://github.com/user-attachments/assets/7ade519a-9d08-4479-901a-3a14f06497e4" />

ii) on thunder client via GET request <img width="1382" height="681" alt="image" src="https://github.com/user-attachments/assets/df4bb78c-412c-450b-a119-e6cfd54a81e7" />


