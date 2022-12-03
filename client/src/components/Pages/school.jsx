import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";


import Aside from "./aside";
export default class SchoolYear extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      userAvater:''
    };
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
<div>
        <div className="wrapper">
          <Aside/>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0"><img src="../asset/img/sy.png" width={40} /> School Year and Term</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">School Year/Term</li>
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
                            <span className="fa fa-calendar"> School Year Information</span>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>School Year</label>
                                <input type="text" className="form-control" placeholder="ex. 2021-1" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Save</button>
                          </div>
                        </div>
                        <div className="col-md-8" style={{borderLeft: '1px solid #ddd'}}>
                          <table id="example1" className="table table-bordered table-hover">
                            <thead>
                              <tr>
                                <th>School Year and Semester</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>2021-1</td>
                                <td className="text-center">
                                  <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                  <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                                </td>
                              </tr>
                              <tr>
                                <td>2021-2</td>
                                <td className="text-center">
                                  <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                  <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                                </td>
                              </tr>
                              <tr>
                                <td>2022-1</td>
                                <td className="text-center">
                                  <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                  <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                                </td>
                              </tr>
                               <tr>
                                <td>2022-2</td>
                                <td className="text-center">
                                  <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                  <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div></form>
                </div>
              </div>
            </section></div>
        </div>
        <div id="delete" className="modal animated rubberBand delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src="../asset/img/sent.png" alt="" width={50} height={46} />
                <h3>Are you sure want to delete School Year?</h3>
                <div className="m-t-20"> <a href="#" className="btn btn-white" data-dismiss="modal">Close</a>
                  <button type="submit" className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}
