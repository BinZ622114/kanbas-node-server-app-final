import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {
  app.post("/api/quizzes/new", (req, res) => {
    const newQuiz = quizzesDao.createQuiz(req.body);
    res.send(newQuiz);
  });

  app.put("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

  app.delete("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const status = quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });
}