const Student = require("../models/Student");
const Course = require("../models/Course");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");

function GetGrade(score) {
    if(score >= 70 && score <= 100) {
        return "A"
    }
    else if(score >= 60 && score < 70) {
        return "B"
    }
    else if(score >= 50 && score < 60) {
        return "C"
    }
    else if(score >= 45 && score < 50) {
        return "D"
    }
    else if(score >= 40 && score < 45) {
        return "E"
    }
    else if(score >= 0 && score < 40) {
        return "F";
    }
    else {
        return "INVALID GRADE";
    }
}

function GetGP(score) {
    if(score >= 70 && score <= 100) {
        return 5.00
    }
    else if(score >= 60 && score < 70) {
        return 4.00
    }
    else if(score >= 50 && score < 60) {
        return 3.00
    }
    else if(score >= 45 && score < 50) {
        return 2.00
    }
    else if(score >= 40 && score < 45) {
        return 1.00
    }
    else if(score >= 0 && score < 40) {
        return 0.00
    }
    else {
        return "INVALID GP";
    }
}

const JWT_SEC = "admin63673626263636";
class StudentController {
    static async RegisterStudent(req, res) {
        try {
            const { fname, lname, level, department, email, password } = req.body;
            if(!fname || !lname || !level || !department) {
                return res.status(400).json({
                    MESSAGE: "Not allowed"
                });
            }
            else {
                const hashed = bcrypt.hashSync(password, 10);
                const info = await Student.create(req.body);
                info.password = hashed;
                await info.save();
                return res.status(201).json({
                    MESSAGE: "Created",
                    info: info
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    static async GetStudents(req, res) {
        try {
            const students = await Student.find({}).sort({ "_id": -1 }).lean().populate("courses");
            if(students.length > 0) {
                return res.status(200).json({
                    students: students
                });
            }
            return res.status(404).json({
                MESSAGE: "NOT FOUND"
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    static async GetStudent(req, res) {
        try {
            const { studentId } = req.params;
            const student = await Student.findOne({ _id: studentId }).lean().populate("courses");
            if(student) {
                return res.status(200).json({
                    student: student
                });
            }
            return res.status(404).json({
                MESSAGE: "NOT FOUND"
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    static async DeleteStudent(req, res) {
        try {
            const { studentId } = req.params;
            const student = await Student.findOneAndRemove({ _id: studentId });
            if(student) {
                return res.status(200).json({
                    student: student,
                    MESSAGE: "Deleted"
                });
            }
            return res.status(404).json({
                MESSAGE: "NOT FOUND"
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    static async UpdateStudent(req, res) {
        try {
            const { studentId } = req.params;
            const student = await Student.findOne({ _id: studentId });
            if(student) {
                const { email, fname, lname, level, department } = req.body;
                student.email = student.email || email;
                student.fname = student.fname || fname;
                student.lname = student.lname || lname;
                student.level = student.level || level;
                student.department = student.department || department;
                await student.save();
                return res.status(200).json({
                    student: student,
                    MESSAGE: "Updated"
                });
            }
            return res.status(404).json({
                MESSAGE: "NOT FOUND"
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    static async RegisterCourse(req, res) {
        try {
            const { studentId } = req.params;
            const studentInfo = await Student.findOne({ _id: studentId });
            if (!studentInfo) {
                return res.json({
                    status: 404,
                    message: "NOT_FOUND"
                });
            }
            else {
                // Add course
                const { title, code, unit } = req.body;
                if (!title || !code|| !unit) {
                    return res.json({
                        status: 400,
                        message: "NOT_ALLOWED"
                    });
                }
                else {
                    const courseInfo = await Course.create(req.body);
                    const studentCourse = studentInfo.courses;
                    studentCourse.push(courseInfo);
                    await studentInfo.save();
                    return res.json({
                        status: 200,
                        message: "CREATED",
                    });
                }
            }
        } catch (error) {
            return res.json({
                status: 500,
                message: "INTERNAL_SERVER_ERROR",
                error: error.message
            });
        }
    }

    static async UpdateStudentRegisteredCourse(req, res) {
        try {
            const { studentId, courseId } = req.params;
            const studentInfo = await Student.findOne({ _id: studentId });
            if (!studentInfo) {
                return res.json({
                    status: 404,
                    message: "NOT_FOUND"
                });
            }
            else {
                const courseInfo = await Course.findOne({ _id: courseId });
                if(courseInfo) {
                    const { title, code, unit, grade, gradePoint, score } = req.body;
                    courseInfo.title = title || courseInfo.title;
                    courseInfo.code = code || courseInfo.code;
                    courseInfo.unit = unit || courseInfo.unit;
                    courseInfo.grade = GetGrade(score) || courseInfo.grade;
                    courseInfo.score = score || courseInfo.score;
                    courseInfo.gradePoint = GetGP(score) || courseInfo.gradePoint;
                    courseInfo.quantityPoint = courseInfo.unit * courseInfo.gradePoint;
                    await courseInfo.save();
                    return res.json({
                        status: 200,
                        message: "Course Updated",
                    });
                }
            }
        } catch (error) {
            return res.json({
                status: 500,
                message: "INTERNAL_SERVER_ERROR",
                error: error.message
            });
        }
    }

    static async CalculateCGPA(req, res) {
        try {
            const { studentId } = req.params;
            const student = await Student.findOne({ _id: studentId }).lean().populate("courses");
            if(student) {
                let studentCourse = student.courses;
                const totalScore = studentCourse.reduce((accumulator, object) => {
                    return accumulator + object.score;
                }, 0);

                const totalCU = studentCourse.reduce((accumulator, object) => {
                    return accumulator + object.unit;
                }, 0);

                let QP = studentCourse.reduce((accumulator, object) => {
                    return accumulator + object.quantityPoint;
                }, 0);

                let GPA = (QP/totalCU);
                let CGPA = (QP/totalCU);

                return res.status(200).json({
                    CGPA: CGPA,
                    GPA: GPA,
                    QP: QP,
                    totalScore: totalScore
                });
            }
            
            
        } catch (error) {
            return res.json({
                status: 500,
                message: "INTERNAL_SERVER_ERROR",
                error: error.message
            });
        }
    }

    static async LoginStudent(req, res) {
        try {
            const { email, password } = req.body;
            if(!email || !password) {
                return res.json({
                    status: 400,
                    message: "NOT_ALLOWED"
                });
            }
            else {
                const user = await Student.findOne({ email: email });
                
                if(!user) {
                    return res.json({
                        status: 401,
                        message: "UNAUTHORIZED_OR_BAD_CREDENTIALS"
                    });
                }
                else {
                    const IsCorrectPassword = bcrypt.compareSync(password, user.password);

                    if(!IsCorrectPassword) {
                        return res.json({
                            status: 401,
                            message: "UNAUTHORIZED_OR_BAD_CREDENTIALS"
                        });
                    }
                    else {
                        const accessToken = jwt.sign(
                            {
                                id: user._id,
                                fname: user.fname,
                                lname: user.lname,
                                email: user.email,
                                department: user.department
                            },
                            config.userSecret,
                            { expiresIn: "3d" }
                        );
                        return res.json({
                            status: 200,
                            message: "AUTHORIZED",
                            accessToken: accessToken,
                            userId: user._id,
                            fname: user.fname,
                            lname: user.lname,
                            email: user.email,
                            department: user.department
                        });
                    }
                }
            }

        } catch (error) {
            return res.json({
                status: 500,
                message: "INTERNAL_SERVER_ERROR",
                error: error.message
            });
        }
    }
}

module.exports = StudentController;