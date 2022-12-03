import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import { userProfile } from "../apidata/api";
import Aside from "./aside";
export default class ScoreReport extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      userAvater:''
    };
  }

  async componentWillMount() {
    
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
        <Aside/>
 <div>
        <div>
        <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0"><img src="../asset/img/report.png" width={40} /> Score Reports</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Score</li>
                </ol>
              </div><br />
              <a className="btn btn-sm btn-info elevation-4" href="#" data-toggle="modal" data-target="#add" style={{marginLeft: '7px'}}><i className="fa fa-plus-square" />
                Add New</a>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="info-box">
                  <div className="col-md-12">
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <p className="text-center">
                            <strong>Attendance</strong>
                          </p>
                          <div className="chart-responsive">
                            <canvas id="donutChart" height={150} />
                          </div>
                          {/* ./chart-responsive */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-8 offset-md-4">
                          <ul className="chart-legend clearfix">
                            <li><i className="far fa-circle text-danger" /> 30% Present</li>
                            <li><i className="far fa-circle text-success" /> 30% Tardy</li>
                            <li><i className="far fa-circle text-warning" /> 25% Excude</li>
                            <li><i className="far fa-circle text-info" /> 15% Unexcuse</li>
                          </ul>
                        </div>
                        {/* /.col */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="info-box">
                  <div className="col-md-12">
                    <p className="text-center">
                      <strong>Grade by Subject</strong>
                    </p>
                    <div className="progress-group">
                      Math
                      <span className="float-right"><b>70</b>/100</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-primary" style={{width: '70%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      Biology
                      <span className="float-right"><b>60</b>/100</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-danger" style={{width: '60%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      Literature
                      <span className="float-right"><b>65</b>/100</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-success" style={{width: '65%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      History
                      <span className="float-right"><b>60</b>/100</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-info" style={{width: '60%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      Art
                      <span className="float-right"><b>50</b>/100</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-warning" style={{width: '50%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      English
                      <span className="float-right"><b>55</b>/100</span>
                      <div className="progress progress-lg">
                        <div className="progress-bar bg-primary" style={{width: '55%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      </div>
</div> </div>
    );
  }
}
