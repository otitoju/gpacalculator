import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import {
  userProfile,
  getStudentRegCourse,
  getStudentGPA,
} from "../apidata/api";
import Aside from "./aside";
export default class Score extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      courses: [],
      studentId: "",
      gpa: "",
    };
  }

  async componentWillMount() {
    const course = await getStudentRegCourse();
    console.log(course.student._id);
    if (course) {
      this.setState({
        courses: course.student.courses,
        studentId: course.student._id,
        name: course.student.fname + " " + course.student.lname,
      });
    }
    const gpa = await getStudentGPA(course.student._id);
    console.log(gpa);
    if (gpa) {
      this.setState({ gpa: gpa });
    }
  }

  render() {
    const { id, name, userAvater } = this.state;
    const ImagesSTyle = {
      width: "90%",
      height: "150px",
      borderRadius: "45%",
    };

    return (
      <div>
        <Aside />
        <div>
          <div>
            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1 className="m-0">
                          <img src="../asset/img/score.png" width={40} /> Score
                        </h1>
                      </div>
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                          <li className="breadcrumb-item active">Score</li>
                        </ol>
                      </div>
                      <br />
                      <a
                        className="btn btn-sm btn-info elevation-4"
                        href="#"
                        data-toggle="modal"
                        data-target="#add"
                        style={{ marginLeft: "7px" }}
                      >
                        <i className="fa fa-plus-square" />
                        Check GPA
                      </a>
                    </div>
                  </div>
                </div>
                <section className="content">
                  <div className="container-fluid">
                    <div className="card card-info">
                      <br />
                      <div className="col-md-12">
                        <table id="example1" className="table table-hover">
                          <thead>
                            <tr>
                              <th>Course Code</th>
                              <th>Course title</th>
                              <th>Course Unit </th>
                              <th>Course score</th>
                              <th>Grade</th>
                            </tr>
                          </thead>

                          {this.state.courses
                            ? this.state.courses.map((course, inde) => {
                                const { title, unit, code, grade, score } =
                                  course;
                                return (
                                  <tbody>
                                    <tr>
                                      <td>{code}</td>
                                      <td>{title}</td>
                                      <td>{unit}</td>
                                      <td>
                                        {score == null ? "pending" : score}
                                      </td>
                                      <td>
                                        {grade == null ? "pending" : grade}
                                      </td>
                                    </tr>
                                  </tbody>
                                );
                              })
                            : null}
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="delete"
                className="modal animated rubberBand delete-modal"
                role="dialog"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <img
                        src="../asset/img/sent.png"
                        alt=""
                        width={50}
                        height={46}
                      />
                      <h3>Are you sure want to delete this Score?</h3>
                      <div className="m-t-20">
                        <a
                          href="#"
                          className="btn btn-white"
                          data-dismiss="modal"
                        >
                          Close
                        </a>
                        <button type="submit" className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="edit"
                className="modal animated rubberBand delete-modal"
                role="dialog"
              >
                <div className="modal-dialog modal-dialog-centered modal-md">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <form>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card-header">
                                <h5>
                                  <img
                                    src="../asset/img/score.png"
                                    width={40}
                                  />{" "}
                                  Score Information
                                </h5>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Student Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Member Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="float-left">
                                      School Year
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="School Year"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Subject
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Subject"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Criteria
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Criteria"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="float-left">Score</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Score"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                          <a
                            href="#"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Cancel
                          </a>
                          <button type="submit" className="btn btn-info">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="add"
                className="modal animated rubberBand delete-modal"
                role="dialog"
              >
                <div className="modal-dialog modal-dialog-centered modal-md">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <form>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card-header">
                                <h5>
                                  <img
                                    src="../asset/img/score.png"
                                    width={40}
                                  />{" "}
                                  Student GPA Information
                                </h5>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <h3>{this.state.name} Your GPA Below</h3>
                                  </div>
                                  <ul className="list-group">
                                    <li className="list-group-item">
                                      CGPA: {this.state.gpa.CGPA}
                                    </li>
                                    <li className="list-group-item">
                                      GPA: {this.state.gpa.GPA}
                                    </li>
                                    <li className="list-group-item">
                                      QP: {this.state.gpa.QP}
                                    </li>
                                    <li className="list-group-item">
                                      totalScore:: {this.state.gpa.totalScore}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                          <a
                            href="#"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Cancel
                          </a>
                          <button type="submit" className="btn btn-info">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
