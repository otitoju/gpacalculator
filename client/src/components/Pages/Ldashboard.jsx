import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";
import { getStudentRegCourse, getAllStudents } from "../apidata/api";

import Asidel from "./asideLecturer";
export default class Ldashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      fname: "",
      lname: "",
      courses: [],
      students: [],
    };
  }

  async componentWillMount() {
    const user = await window.localStorage.getItem("userId");

    if (user) {
      // if(user.user==)
      const course = await getStudentRegCourse();
      const students = await getAllStudents();
      console.log(students);
      if (course) {
        this.setState({
          courses: course.student.courses,
          students: students.students,
        });
      }
      console.log(this.state.courses.length);
      await this.setState({ fname: fname });

      const id = await window.localStorage.getItem("userId");
      const fname = await localStorage.getItem("fname");
      const lname = await localStorage.getItem("lname");

      await this.setState({ id: id, fname: fname, lname: lname });
      console.log(this.state.id);
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    const { id, fname, lname, courses } = this.state;
    const ImagesSTyle = {
      width: "90%",
      height: "150px",
      borderRadius: "45%",
      courses: [],
    };

    return (
      <div>
        <div className="wrapper">
          <Asidel />{" "}
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">
                      <img src="../asset/img/dashboard.png" width={40} />{" "}
                      Welcome {fname + " " + lname}{" "}
                    </h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-8 col-md-8 offset-sm-2 offset-md-2 offset-lg-2">
                    <div className="info-box">
                      <span className="info-box-icon text-success elevation-4">
                        <img src="../asset/img/student.png" width={50} />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">
                          <h5>admin Chain</h5>
                        </span>
                        <span className="info-box-number">
                          <h2></h2>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-8 col-md-8 offset-sm-2 offset-md-2 offset-lg-2">
                    <div className="info-box">
                      <span className="info-box-icon text-info elevation-4">
                        <img src="../asset/img/subject.png" width={50} />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">
                          <h5>Number of Students</h5>
                        </span>
                        <span className="info-box-number">
                          <h2>
                            {this.state.students
                              ? this.state.students.length
                              : "No student "}
                          </h2>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
