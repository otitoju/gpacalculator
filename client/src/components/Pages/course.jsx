import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import { getStudentRegCourse } from "../apidata/api";
import Aside from "./aside";
export default class Course extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      unit: "",
      code: "",
      courses: [],
    };
    this.handleUnit = this.handleUnit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCode = this.handleCode.bind(this);
  }

  async componentWillMount() {
    const id = await localStorage.getItem("userId");
    if (id) {
      this.setState({ id: id });
    }
  }
  async componentDidMount() {
    const course = await getStudentRegCourse();
    if (course) {
      this.setState({ courses: course.student.courses });
    }
    console.log(course.student.courses);
  }
  handleTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleCode(e) {
    this.setState({ code: e.target.value });
  }
  handleUnit(e) {
    this.setState({ unit: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.unit || !this.state.title || !this.state.code) {
      alert("please input all filed");
    } else {
      let id = this.state.id;

      fetch(`/student/course/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          unit: this.state.unit,
          code: this.state.code,
          title: this.state.title,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ isLoading: false });
          console.log(res);
          alert(res.message);
          this.state.title = ''
          this.state.code = ''
          this.state.unit = ''
          this.props.history.push("/course");
        })
        .catch((err) => {
          console.log(err);
          this.setState({ isLoading: false });
        });
    }
  };

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
            <div className="content-wrapper">
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0">
                        <img src="../asset/img/subject.png" width={40} /> Course
                      </h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Course</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <section className="content">
                <div className="container-fluid">
                  <div className="card card-info">
                    <form>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card-header">
                              <span className="fa fa-file">
                                {" "}
                                Course Information
                              </span>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Course tilte</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Course Title"
                                    value={this.state.title}
                                    onChange={this.handleTitle}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Course Code</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Course Code"
                                    value={this.state.code}
                                    onChange={this.handleCode}
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Course Unit</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Course unit"
                                    value={this.state.unit}
                                    onChange={this.handleUnit}
                                  />
                                </div>
                              </div>
                              {/* <div className="col-md-12">
                            <div className="form-group">
                              <label>Description</label>
                              <textarea className="form-control" placeholder="Description" defaultValue={""} />
                            </div>
                          </div> */}
                            </div>
                            <div className="card-footer">
                              <button
                                onClick={this.handleSubmit}
                                className="btn btn-primary"
                              >
                                {this.state.isLoading === true ? (
                                  <p> Registering...</p>
                                ) : (
                                  <p> Register</p>
                                )}
                              </button>
                            </div>
                          </div>
                          <div
                            className="col-md-8"
                            style={{ borderLeft: "1px solid #ddd" }}
                          >
                            <table
                              id="example1"
                              className="table table-bordered table-hover"
                            >
                              <thead>
                                <tr>
                                  <th>S/n</th>
                                  <th>Course title</th>
                                  <th>Course Code</th>
                                  <th>Course Unit</th>
                                  {/* <th className="text-center">Action</th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.courses
                                  ? this.state.courses.map((course, index) => {
                                      const { title, unit, code } = course;
                                      return (
                                        <tr>
                                          <td> {index + 1}</td>
                                          <td>{code}</td>
                                          <td>{title}</td>
                                          <td>{unit}</td>
                                          {/* <td className="text-center">
                                <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                              </td> */}
                                        </tr>
                                      );
                                    })
                                  : null}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </form>
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
                    <h3>Are you sure want to delete this Subject?</h3>
                    <div className="m-t-20">
                      {" "}
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
          </div>
        </div>{" "}
      </div>
    );
  }
}
