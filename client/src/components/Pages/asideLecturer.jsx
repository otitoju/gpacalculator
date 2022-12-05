import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import { userProfile } from "../apidata/api";
export default class Aside extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      userAvater: "",
    };
  }

  async componentWillMount() {}
  render() {
    return (
      <div>
        <div className="wrapper">
          <nav
            className="main-header navbar navbar-expand navbar-light"
            style={{ backgroundColor: "rgb(27,100,107)" }}
          >
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i className="fas fa-bars" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" role="button">
                  <img
                    src="../asset/img/avatar.png"
                    className="img-circle"
                    alt="User Image"
                    style={{ marginTop: "-8px" }}
                    width={40}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="fullscreen"
                  href="#"
                  role="button"
                >
                  <i className="fas fa-expand-arrows-alt" />
                </a>
              </li>
              <li className="nav-item">
                <Link title="Sign out"
                  className="nav-link"
                  data-widget="fullscreen"
                  to="/"
                >
                  <i className="fas fa-sign-out-alt" />
                </Link>
              </li>
            </ul>
          </nav>
          <aside className="main-sidebar sidebar-dark-primary">
            {/* Brand Logo */}
            <a href="index.html" className="brand-link">
              <img src="../asset/img/logo.png" alt="DSMS Logo" width={200} />
            </a>
            <div className="sidebar">
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <Link to="/ldashboard" className="nav-link">
                      <img src="../asset/img/dashboard.png" width={30} />
                      <p>Dashboard</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <img src="../asset/img/criteria.png" width={30} />
                      <p>notification</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="lcourse" className="nav-link">
                      <img src="../asset/img/subject.png" width={30} />
                      <p>Courses</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="student" className="nav-link">
                      <img src="../asset/img/student.png" width={30} />
                      <p>Student</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <img src="../asset/img/score.png" width={30} />
                      <p>Score</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      {/* <img src="../asset/img/report.png" width={30} /> */}
                      <i className="fas fa-sign-out-alt"  width={30} />
                      <p>Logout</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
