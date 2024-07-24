const express = require("express");
const router = express.Router();
const { authMiddleware, adminMiddleware } = require("../middleware/Auth");

// Import Controllers
const {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getAllQuizzes,
  getQuizById,
  attemptQuiz,
  getUserAttempts,
} = require("../controllers/quizController");
const {
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");
const { login, register } = require("../controllers/userController");

// User Authentication
router.post("/login", login);
router.post("/register", register);

// Quiz routes
router.post("/quizzes", authMiddleware, adminMiddleware, createQuiz);
router.put("/quizzes/:id", authMiddleware, adminMiddleware, updateQuiz);
router.delete("/quizzes/:id", authMiddleware, adminMiddleware, deleteQuiz);

// question routes
router.post("/questions", authMiddleware, adminMiddleware, createQuestion);
router.put("/questions/:id", authMiddleware, adminMiddleware, updateQuestion);
router.delete(
  "/questions/:id",
  authMiddleware,
  adminMiddleware,
  deleteQuestion
);

// data routes
router.get("/quizzes", authMiddleware, getAllQuizzes);
router.get("/quizzes/:id", authMiddleware, getQuizById);
router.post("/quizzes/:id/attempt", authMiddleware, attemptQuiz);
router.get("/attempts", authMiddleware, getUserAttempts);

module.exports = router;
