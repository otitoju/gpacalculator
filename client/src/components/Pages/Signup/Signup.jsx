import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Logo from "../../assets/img/res.png";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      level: "",
      password1: "",
      info: "",
      isLoading: false,
      department: "",
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFname = this.handleFname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleDepart = this.handleDepart.bind(this);
    this.handlePassword1 = this.handlePassword1.bind(this);
  }

  handleSubmit = () => {
    if (
      !this.state.fname ||
      this.state.lname ||
      this.state.department ||
      this.state.level ||
      this.state.password == ""
    ) {
      this.setState({ info: "Please fill all required field" });
    } else if (this.state.password !== this.state.password1) {
      this.setState({ info: `password not match`, isLoading: false });
    } else {
      alert("im here");
      fetch("/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: this.state.fname,
          lname: this.state.lname,
          level: this.state.level,
          email: this.state.email,
          password: this.state.password,
          department: this.state.department,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.message);
          this.setState({ isLoading: false });
          console.log(res);
          if (res.MESSAGE == "Created") {
            this.props.history.push("/signin");
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
  handleFname(e) {
    this.setState({ fname: e.target.value });
  }
  handleLname(e) {
    this.setState({ lname: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handlePassword1(e) {
    this.setState({ password1: e.target.value });
  }

  handleGender(e) {
    this.setState({ level: e.target.value });
  }
  handleDepart(e) {
    this.setState({ department: e.target.value });
  }

  render() {
    //     if(this.state.info===''){
    //         document.getElementById('info').style.display='none'
    //   }
    const noshowinfo = {
      display: "none",
    };

    return (
      <div>
        {/* <!--Form with header--> */}
        <div className="card mt-5" id="signup">
          <div className="card-body">
            {/* <!--Header--> */}
            <div className="card-header black-text text-center py-2">
              <h3>
                <a href="index.html" class="brand-link">
                  <img src={Logo} alt=" Logo" width="120" />
                </a>
              </h3>
            </div>

            {/* <!--Body--> */}
            <div className="md-form mt-4">
              {/* <i className="fa fa-user prefix"></i> */}
              <input
                type="text"
                id="form3"
                required="required"
                className="form-control"
                value={this.state.fname}
                onChange={this.handleFname}
              />
              <label for="form3">
                <span className="fa fa-user"></span> First Name
              </label>
            </div>
            <div className="md-form mt-4">
              {/* <i className="fa fa-user prefix"></i> */}
              <input
                type="text"
                id="form3"
                required="required"
                className="form-control"
                value={this.state.lname}
                onChange={this.handleLname}
              />
              <label for="form3">
                <span className="fa fa-user"></span>Last Name
              </label>
            </div>
            <div className="md-form">
              {/* <i className="fa fa-envelope prefix"></i> */}
              <input
                type="text"
                id="form2"
                className="form-control"
                value={this.state.email}
                onChange={this.handleEmail}
              />
              <label for="form2">
                <span className="fa fa-envelope"></span> Email
              </label>
            </div>
            <div className="md-form">
              {/* <i className="fa fa-envelope prefix"></i> */}
              <input
                type="text"
                id="form2"
                className="form-control"
                value={this.state.department}
                onChange={this.handleDepart}
              />
              <label for="form2">
                <span className="fa fa-envelope"></span> Department
              </label>
            </div>

            <div class="md-form">
              <select
                className="form-control"
                value={this.state.level}
                onChange={this.handleGender}
              >
                <option>--Select level--</option>
                <option>100L</option>
                <option>200L</option>
                <option>300L</option>
                <option>400L</option>
              </select>
            </div>

            <div className="md-form">
              {/* <i class="fa fa-lock prefix"></i> */}
              <input
                type="password"
                id="form4"
                className="form-control"
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <label for="form4">
                <span className="fa fa-lock"></span> Password
              </label>
            </div>

            <div className="md-form">
              {/* <i class="fa fa-lock prefix"></i> */}
              <input
                type="password"
                id="form10"
                className="form-control"
                name="password1"
                value={this.state.password1}
                onChange={this.handlePassword1}
              />
              <label for="form10">
                <span className="fa fa-lock"></span> Confirm Password
              </label>
            </div>

            <div className="md-form">
              <p className="p-1">
                {" "}
                <input type="checkbox" className="" required="required" /> I
                agree to <Link to="/terms">terms</Link> and{" "}
                <Link to="/c">conditions</Link> of ResultProcessing
              </p>
            </div>

            {this.state.info === "" || this.state.info === undefined ? (
              <div className="alert alert-danger" style={noshowinfo} id="info">
                ){this.state.info}
              </div>
            ) : (
              <div className="alert alert-danger" id="info">
                {this.state.info}
              </div>
            )}

            <div className="text-center">
              <button
                className="btn btn-info btn-block"
                style={{ color: "rgb(235,235,235)" }}
                onClick={this.handleSubmit}
              >
                {" "}
                &nbsp;Sign up
                <div style={{ margin: "auto", width: "50%" }}>
                  {this.state.isLoading === true ? (
                    <div className="loader"></div>
                  ) : null}
                </div>
              </button>
            </div>
            <p className="pt-3 text-right">
              {" "}
              Aready a member
              <Link to="/signin"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
