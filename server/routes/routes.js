const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/StudentController");
const AdminController = require("../controllers/Admin");

router.post("/register", StudentController.RegisterStudent);
router.get("/students", StudentController.GetStudents);
router.get("/student/:studentId", StudentController.GetStudent);
router.delete("/student/delete/:studentId", StudentController.DeleteStudent);
router.put("/student/update/:studentId", StudentController.UpdateStudent);
router.post("/student/course/:studentId", StudentController.RegisterCourse);
router.put("/student/registered/course/:studentId/:courseId", StudentController.UpdateStudentRegisteredCourse);
router.get("/calculate/gpa/:studentId", StudentController.CalculateCGPA);
router.post("/login", StudentController.LoginStudent);

router.post("/signup", AdminController.CreateNewAccount);
router.post("/signin", AdminController.LoginAdminAccount);

module.exports = router;