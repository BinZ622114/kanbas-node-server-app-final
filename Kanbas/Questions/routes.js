import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {

  app.post("/api/questions", async (req, res) => {
    const newQuestion = await questionsDao.createQuestion(req.body);
    res.send(newQuestion);
  });

  app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await questionsDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });

  app.delete("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const status = await questionsDao.deleteQuestion(questionId);
    res.send(status);
  });
}