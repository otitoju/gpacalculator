import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import { userProfile } from "../apidata/api";
import Aside from "./aside";
export default class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      userAvater:''
    };
  }

  async componentWillMount() {
    const user = await userProfile();
    console.log(user.message + "  ookkkkk");
    if (user.message === "success") {
      // if(user.user==)

      await this.setState({ name: user.name.toLowerCase(),userAvater:user.avater });

      const id = await window.localStorage.getItem("userId");

      await this.setState({ id: id });
      console.log(this.state.id);
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    const { id, name, userAvater } = this.state;
    const ImagesSTyle={
      width:'90%',
      height:'150px',
      borderRadius:'45%'
    }

    return (
      <div>
        {/* <UsersHeader />
        <div className="alert alert-info">
          Welcome {name} much{" "}
          <span style={{ color: "red", fontSize: "20px" }}>&hearts;</span>
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <nav className="nav flex">
              <div className="navlink">
                <img src={userPicPlaceholder} alt="" style={ImagesSTyle}/>
                <Link className="nav-link  dlink" to="/userprofile">
                  profile
                </Link>
                <Link className="icon" to="addproject">
                  <i className="mdi mdi-account-box-outline icon" />
                </Link>
              </div>

              <div className="navlink">
                <img src={bookAdd} alt="" style={ImagesSTyle} />
                <Link className="nav-link dlink" to="addproject">
                  addproject
                </Link>
                <Link className="icon " to="addproject">
                  <i className="mdi mdi-note-plus-outline  icon" />
                </Link>
              </div>
              <div className="navlink">
                <img src={bookShef} alt="" style={ImagesSTyle} />
                <Link className="nav-link  dlink" to="projects">
                  View Project
                </Link>

                <Link className="icon" to="projects">
                  <i className="mdi mdi-eye-outline  icon" />
                </Link>
              </div>
            </nav>
          </div>
        </div> */}




         <div className="wrapper">
        <Aside/>        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                   Welcome Mr {"...."} {" "}
                  <h1 className="m-0"><img src="../asset/img/dashboard.png" width={40} /> Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                    <span className="info-box-icon text-success elevation-4"><img src="../asset/img/student.png" width={50} /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">
                        <h5>Number of Students</h5>
                      </span>
                      <span className="info-box-number">
                        <h2>45</h2>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-8 offset-sm-2 offset-md-2 offset-lg-2">
                  <div className="info-box">
                    <span className="info-box-icon text-info elevation-4"><img src="../asset/img/subject.png" width={50} /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">
                        <h5>Number of Courses</h5>
                      </span>
                      <span className="info-box-number">
                        <h2>8</h2>
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
