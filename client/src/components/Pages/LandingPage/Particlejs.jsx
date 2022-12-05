import React from "react";
import { Link } from "react-router-dom";

import Particles from "react-particles-js";

import "./Particlejs.css";

const particleOption = {
  particles: {
    number: {
      value: 80,
      color: "#000000",

      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const Particlejs = () => {
  return (
    <div>
      <section>
        <Particles className="particle" params={{ particleOption }} />

        <div className="pSection">
          <h1>AUTOMATED RESULT PROCESSING SYSTEM.</h1>

          <br />
          <div style={{ margin: "10px" }}>
            <h3>Student</h3>
            <Link to="/signin">
              {" "}
              <button className="btn btn-info">Login</button>
            </Link>

            <Link to="/signup">
              {" "}
              <button className="btn btn-info">Register</button>
            </Link>
          </div>

          <br />
        </div>

        <div style={{ margin: "10px" }}>
          <h3 style={{ color: "white" }}>Lecturer</h3>
          <Link to="/lsignin">
            {" "}
            <button className="btn btn-primary">signin Lecturer</button>
          </Link>

          <Link to="/lsignup">
            {" "}
            <button className="btn btn-primary">Signup Lecturer</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Particlejs;
