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
      stId: "",
    };
  }

  async componentWillMount() {
    const course = await getStudentRegCourseL(this.props.match.params.id);
    console.log("GOO" + course);
    if (course) {
      this.setState({ courses: course.student.courses });
    }
  }
  async componentDidMount() {
    const studentid = this.props.match.params.id;
    if (studentid) {
      this.setState({ stId: studentid });
    }
  }

  handleSubmit = (courseid) => {
    this.setState({ isLoading: true });
    if (!this.state.score) {
      this.setState({
        info: "Please fill all required field",
        isLoading: false,
      });
    } else if (this.state.password !== this.state.password1) {
      this.setState({ info: `password not match`, isLoading: false });
    } else {
      let sid = this.state.stId;

      fetch(`/student/registered/course/${sid}/${courseid}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,

          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.message);
          this.setState({ isLoading: false });
          console.log(res);
          if ((res.MESSAGE = "Created" && res.status == 201)) {
            this.props.history.push("/lsignin");
          } else {
            this.setState({ info: res.message });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ isLoading: false });
        });

      //console.log(this.state)
    }
  };
  render() {
    const { stId, name, userAvater } = this.state;
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
                          Student List
                        </h1>
                      </div>
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                          <li className="breadcrumb-item active">Students</li>
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
                        Add New
                      </a>
                    </div>
                  </div>
                </div>
                <section className="content">
                  <div className="container-fluid">
                    <div className="card card-info">
                      <br />
                      <div className="col-md-12">
                        <table id="example1" className="table">
                          <thead className="btn-cancel">
                            <tr>
                              <th>S/n</th>
                              <th>Course title</th>
                              <th>Course Code</th>
                              <th>Course Unit</th>
                              <th>Coures ID</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.courses
                              ? this.state.courses.map((course, inde) => {
                                  const { title, unit, code, _id } = course;
                                  return (
                                    <tr>
                                      <td> {inde + 1}</td>
                                      <td>{code}</td>
                                      <td>{title}</td>
                                      <td>{unit}</td>
                                      <td>{_id}</td>

                                      <td className="text-center">
                                        <Link
                                          to={`/student/${stId}/${_id}`}
                                          className="btn btn-sm btn-success"
                                        >
                                          <i className="fa fa-user-edit" />{" "}
                                          update
                                        </Link>
                                      </td>
                                    </tr>
                                  );
                                })
                              : null}
                          </tbody>
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
                      <h3>Are you sure want to delete this User?</h3>
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
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <form>
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
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="add score"
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
                          <button type="submit" className="btn btn-info">
                            Save Changes
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
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <form>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card-header">
                                <h5>
                                  <img
                                    src="../asset/img/member.png"
                                    width={40}
                                  />{" "}
                                  Member Information
                                </h5>
                              </div>
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="float-left">
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="First Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Middle Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Middle Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Last Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="float-left">Age</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Age"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="float-left">Gender</label>
                                    <select className="form-control">
                                      <option>Male</option>
                                      <option>Female</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Contact
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Contact"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="float-left">Email</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Address
                                    </label>
                                    <textarea
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="float-left">
                                      Choose Profile
                                    </label>
                                    <div className="input-group">
                                      <div className="custom-file">
                                        <input
                                          type="file"
                                          className="custom-file-input"
                                          id="exampleInputFile"
                                        />
                                        <label
                                          className="custom-file-label"
                                          htmlFor="exampleInputFile"
                                        >
                                          Choose file
                                        </label>
                                      </div>
                                    </div>
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
                            className="btn btn-cancel"
                            data-dismiss="modal"
                          >
                            Cancel
                          </a>
                          <button type="submit" className="btn btn-save">
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
