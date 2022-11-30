const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/StudentController");

router.post("/register", StudentController.RegisterStudent);
router.get("/students", StudentController.GetStudents);
router.get("/student/:studentId", StudentController.GetStudent);
router.delete("/student/delete/:studentId", StudentController.DeleteStudent);
router.put("/student/update/:studentId", StudentController.UpdateStudent);
router.post("/student/course/:studentId", StudentController.RegisterCourse);
router.put("/student/registered/course/:studentId/:courseId", StudentController.UpdateStudentRegisteredCourse);
router.get("/calculate/gpa/:studentId", StudentController.CalculateCGPA);

module.exports = router;