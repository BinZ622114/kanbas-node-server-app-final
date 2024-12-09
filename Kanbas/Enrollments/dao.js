import model from "./model.js";

export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.filter((enrollment) => enrollment.course !== null)
                      .map((enrollment) => enrollment.course);  //filter null value due to the failure of populate
   }
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.filter((enrollment) => enrollment.user !== null)
                      .map((enrollment) => enrollment.user);
   }
export function enrollUserInCourse(user, course) {
    return model.create({ user, course });
   }
export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
   }
   
