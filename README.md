# AI Task Manager

A small full-stack productivity application that demonstrates clean backend architecture, secure APIs, and AI-powered task insights.

This project was built as part of a technical assessment for the **Senior Software Engineer role at Better Software**.

---

# Overview

AI Task Manager allows users to:

- Register and log in securely
- Create and manage tasks
- View tasks in a dashboard
- Generate AI-powered productivity insights based on task activity

The system is designed to demonstrate **clean architecture, security, AI integration, and deployability** rather than UI complexity.

---

# Tech Stack

Frontend

- React
- Axios
- Tailwind CSS

Backend

- Python
- Flask
- Flask-JWT-Extended
- SQLAlchemy

Database

- MySQL (AWS RDS)

AI

- HuggingFace Router API
- openai/gpt-oss-120b model

Deployment

- Frontend: Vercel
- Backend: Render
- Database: AWS RDS

---

# Architecture

The backend follows a layered architecture:

Routes → Services → Repositories → Database

### Routes

Handle HTTP requests and responses.

### Services

Contain business logic such as authentication, task operations, and AI insights.

### Repositories

Handle database interaction using SQLAlchemy.

### Models

Define the database schema.

This separation keeps the system **maintainable and extensible**.

---

# Features

Authentication

- User registration
- User login
- JWT authentication
- Secure protected endpoints

Task Management

- Create task
- List tasks
- Update task
- Delete task

AI Insights

- Analyze user's tasks
- Generate productivity advice
- Improve insight quality using LLM

---

# AI Insight Engine

The AI insight system uses a **hybrid approach**.

1. Generate a deterministic rule-based insight from tasks.

Example:

"You have 3 tasks. 2 are pending."

2. Send this insight to an LLM to improve readability and usefulness.

This design ensures:

- system correctness
- safe fallback if AI fails
- predictable behavior

---

# Security

Security features implemented:

- JWT authentication
- Password hashing
- User-scoped task access
- API protection

Each user can only access their own tasks.

---

# Observability

The system includes:

- structured logging
- error handling
- AI fallback mechanism

This ensures failures remain **visible and diagnosable**.

---

# Deployment

Frontend  
Vercel

Backend  
Render

Database  
AWS RDS MySQL

AI  
HuggingFace inference router

---

# Running Locally

Backend

cd backend

pip install -r requirements.txt

python app.py

Frontend

cd frontend

npm install

npm start

---

# Future Improvements

Possible extensions include:

- task prioritization
- deadline tracking
- AI task planning
- team collaboration
- analytics dashboard

---

# Author

Krishnaraj Singh Chauhan
