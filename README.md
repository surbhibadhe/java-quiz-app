# Java Quiz App

A full-stack quiz application built with **Spring Boot**, **React**, and **PostgreSQL**.

The application allows users to browse questions, create quizzes, attempt quizzes, and calculate quiz results through a REST API connected to a React frontend.

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* PostgreSQL
* Maven
* REST APIs

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS

## Features

* Create quizzes using questions from the database
* Fetch all available questions
* Fetch questions by ID
* Fetch questions by category
* Create quizzes with selected questions
* Retrieve quizzes
* Attempt quizzes through the frontend
* Calculate quiz scores
* REST API based backend
* PostgreSQL database integration
* React-based user interface

## Project Structure

```text
java-quiz-app/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/project/quizapp/
│   │   │       ├── Controller/
│   │   │       ├── Service/
│   │   │       ├── dao/
│   │   │       └── model/
│   │   └── resources/
│   │
│   └── test/
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

## Backend Architecture

The backend follows a layered architecture:

```text
Controller
    ↓
Service
    ↓
DAO / Repository
    ↓
Database
```

* **Controller** — Handles HTTP requests and exposes REST endpoints.
* **Service** — Contains application and business logic.
* **DAO / Repository** — Handles database operations using Spring Data JPA.
* **Model** — Contains JPA entities and request/response models.
* **PostgreSQL** — Stores questions, quizzes, and related data.

## API

The backend exposes REST endpoints for operations such as:

```text
GET    /question/allQuestions
GET    /question/{id}
GET    /question/category/{category}

POST   /quiz/create
GET    /quiz/get/{id}
POST   /quiz/submit/{id}
```

The exact endpoints may evolve as the application is developed.

## Running the Backend

### 1. Clone the repository

```bash
git clone https://github.com/surbhibadhe/java-quiz-app.git
cd java-quiz-app
```

### 2. Configure PostgreSQL

Create a PostgreSQL database and update the database configuration in:

```text
src/main/resources/application.properties
```

Configure your PostgreSQL URL, username, and password according to your local setup.

### 3. Start the Spring Boot application

On Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

Or run `QuizappApplication` directly from IntelliJ IDEA.

The backend runs by default on:

```text
http://localhost:8080
```

## Running the Frontend

Open another terminal:

```powershell
cd frontend
```

Install dependencies:

```powershell
npm install
```

Start the Vite development server:

```powershell
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

Make sure the Spring Boot backend is running before using functionality that requires API access.

## Database

The application uses **PostgreSQL** as its relational database.

Spring Data JPA and Hibernate are used to map Java entities to database tables and perform database operations.

## Development

This project is being developed as a full-stack application with a separate frontend and backend:

```text
React / Vite
     │
     │ HTTP / REST API
     ↓
Spring Boot
     │
     │ JPA / Hibernate
     ↓
PostgreSQL
```

## Future Improvements

Planned improvements include:

* Authentication and authorization
* Improved quiz creation interface
* Better quiz-taking experience
* Score and result history
* Improved validation and error handling
* Responsive UI
* Deployment of frontend and backend
* Automated testing
* API documentation

## Author

**Surbhi Badhe**

GitHub: https://github.com/surbhibadhe
