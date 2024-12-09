import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    

    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params;
        const enrollments = dao.findEnrollmentsForUser(userId);
        res.send(enrollments);
    });
}