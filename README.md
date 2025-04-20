# NeoQuiz

A simple quiz application with user authentication using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It incorporates full CRUD operations with token-based authentication (JWT).

## Features

### Admin
- **Login Authentication**: Admin login with error message for invalid credentials and redirection to the dashboard upon successful login.
- **Quiz Management**: Add, Edit, and Delete quizzes. Quizzes include title, description (optional), and timer.
- **Question Management**: Add, Edit, and Delete questions for each quiz. All questions are multiple-choice.
- **View Quizzes**: View all quizzes added to the application.
- **View Scores**: View scores of all users who attempted a quiz or any particular quiz.
- **Dashboard**: View all necessary data on the admin dashboard.

### User
- **View Quizzes**: View all available quizzes added by the admin.
- **Attempt Quizzes**: Answer questions in quizzes that the user has not attempted. Display an appropriate message if the user has attempted the quiz previously.
- **View Scores**: View scores after completing a quiz.
- **View Attempts**: View all previously attempted quizzes and scores.
- **Dashboard**: View all necessary data on the user dashboard.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)

## Installation

### Prerequisites
- Node.js
- MongoDB

### API Endpoints
#### Auth
POST /api/auth/register: Sign Up User.
POST /api/auth/login: Authenticate admin/user and return a JWT token.

#### Admin
GET /api/admin/quizzes: Get all quizzes.

POST /api/admin/quizzes: Add a new quiz.

PUT /api/admin/quizzes/:id: Update a quiz.

DELETE /api/admin/quizzes/:id: Delete a quiz.

GET /api/admin/quizzes/:id/questions: Get all questions for a quiz.

POST /api/admin/quizzes/:id/questions: Add a new question to a quiz.

PUT /api/admin/questions/:id: Update a question.

DELETE /api/admin/questions/:id: Delete a question.

GET /api/admin/scores: Get scores for all users or a particular quiz.

#### User
GET /api/quizzes: Get all available quizzes.

POST /api/quizzes/:id/attempt: Attempt a quiz.

GET /api/users/:id/attempts: Get all attempts for a user
