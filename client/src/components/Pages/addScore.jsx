import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import {
  userProfile,
  getAllStudents,
  getStudentRegCourseL,
} from "../apidata/api";
import Asidel from "./asideLecturer";
export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      courses: [],
      cid: "",
      score: "",
    };
    this.handleScore = this.handleScore.bind(this);
  }

  async componentWillMount() {
    const course = await getStudentRegCourseL(this.props.match.params.id);
    if (course) {
      this.setState({ courses: course.student.courses });
    }
  }
  async componentDidMount() {
    const studentid = this.props.match.params.id;
    const cid = this.props.match.params.cid;
    if (studentid) {
      this.setState({ id: studentid, cid: cid });
    }
    console.log(studentid + "gggggg " + cid);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    if (!this.state.score) {
      this.setState({
        info: "Please fill all required field",
        isLoading: false,
      });
    } else {
      this.setState({ isLoading: true });
      let studentId = this.state.id;
      let courseId = this.state.cid;

      fetch(`/student/registered/course/${studentId}/${courseId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: this.state.score,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.message);
          this.setState({ isLoading: false });
          console.log(res);
          if (res.message == "Course Updated" && res.status == 200) {
            alert(res.message);
          }
          this.props.history.push(`/student/${studentId}`);
        })
        .catch((err) => {
          console.log(err);
          this.setState({ isLoading: false });
        });

      //console.log(this.state)
    }
  };

  handleScore(e) {
    this.setState({ score: e.target.value });
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
        <Asidel />
        <div>
          <div>
            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1 className="m-0">
                          <img src="../asset/img/student.png" width={40} />{" "}
                          Update score
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
                    </div>
                  </div>
                </div>
                <section className="content">
                  <div className="container-fluid">
                    <div className="card card-info">
                      <br />
                      <div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card-header">
                                <h5>
                                  <img
                                    src="../asset/img/member.png"
                                    width={40}
                                  />{" "}
                                  Add Score
                                </h5>
                              </div>
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Add Score
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="add score"
                                      value={this.state.score}
                                      onChange={this.handleScore}
                                    />
                                  </div>
                                </div>

                                {this.state.info === "" ||
                                this.state.info === undefined ? (
                                  <p
                                    className="alert alert-warning"
                                    style={{ display: "none" }}
                                  >
                                    {this.state.info}
                                  </p>
                                ) : (
                                  <p className="alert alert-danger">
                                    {this.state.info}
                                  </p>
                                )}
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
                          <button
                            onClick={this.handleSubmit}
                            className="btn btn-info"
                          >
                            Save
                            <div style={{ margin: "auto", width: "50%" }}>
                              {this.state.isLoading === true ? (
                                <p>add...</p>
                              ) : null}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
