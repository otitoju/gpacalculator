import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import { userProfile } from "../apidata/api";
import Aside from "./aside";
export default class Student extends Component {
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
        <Aside/>
 <div>
        <div>
        <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0"><img src="../asset/img/student.png" width={40} /> Student List</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Students</li>
                  </ol>
                </div><br />
                <a className="btn btn-sm btn-info elevation-4" href="#" data-toggle="modal" data-target="#add" style={{marginLeft: '7px'}}><i className="fa fa-plus-square" />
                  Add New</a>
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
                        <th>Profile</th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src="../asset/img/profile.png" width={40} /></td>
                        <td>Ola muhamed</td>
                        <td>24</td>
                        <td>Male</td>
                        <td>09876543232</td>
                        <td>olawale@gmail.com</td>
                        <td>Adankolo,Lokoja</td>
                        <td className="text-center">
                          <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-user-edit" /> update</a>
                          <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                        </td>
                      </tr>
                      <tr>
                        <td><img src="../asset/img/profile.png" width={40} /></td>
                        <td>William Smith</td>
                        <td>24</td>
                        <td>Male</td>
                        <td>09876543232</td>
                        <td>wilieam@gmail.com</td>
                        <td>lokoja</td>
                        <td className="text-center">
                          <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-user-edit" /> update</a>
                          <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                        </td>
                      </tr>
                      <tr>
                        <td><img src="../asset/img/profile.png" width={40} /></td>
                        <td>James Bond</td>
                        <td>27</td>
                        <td>Male</td>
                        <td>09876543232</td>
                        <td>emal@gmail.com</td>
                        <td>lokoja</td>
                        <td className="text-center">
                          <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-user-edit" /> update</a>
                          <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="delete" className="modal animated rubberBand delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src="../asset/img/sent.png" alt="" width={50} height={46} />
                <h3>Are you sure want to delete this User?</h3>
                <div className="m-t-20">
                  <a href="#" className="btn btn-white" data-dismiss="modal">Close</a>
                  <button type="submit" className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="edit" className="modal animated rubberBand delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body text-center">
                <form>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-header">
                          <h5><img src="../asset/img/member.png" width={40} /> Member Information</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="float-left">First Name</label>
                              <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="float-left">Middle Name</label>
                              <input type="text" className="form-control" placeholder="Middle Name" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="float-left">Last Name</label>
                              <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label className="float-left">Age</label>
                              <input type="text" className="form-control" placeholder="Age" />
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
                              <label className="float-left">Contact</label>
                              <input type="text" className="form-control" placeholder="Contact" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label className="float-left">Email</label>
                              <input type="text" className="form-control" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="float-left">Address</label>
                              <textarea className="form-control" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="float-left">Choose Profile</label>
                              <div className="input-group">
                                <div className="custom-file">
                                  <input type="file" className="custom-file-input" id="exampleInputFile" />
                                  <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
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
                    <a href="#" className="btn btn-danger" data-dismiss="modal">Cancel</a>
                    <button type="submit" className="btn btn-info">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="add" className="modal animated rubberBand delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body text-center">
                <form>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-header">
                          <h5><img src="../asset/img/member.png" width={40} /> Member Information</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="float-left">First Name</label>
                              <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="float-left">Middle Name</label>
                              <input type="text" className="form-control" placeholder="Middle Name" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="float-left">Last Name</label>
                              <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label className="float-left">Age</label>
                              <input type="text" className="form-control" placeholder="Age" />
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
                              <label className="float-left">Contact</label>
                              <input type="text" className="form-control" placeholder="Contact" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label className="float-left">Email</label>
                              <input type="text" className="form-control" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="float-left">Address</label>
                              <textarea className="form-control" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="float-left">Choose Profile</label>
                              <div className="input-group">
                                <div className="custom-file">
                                  <input type="file" className="custom-file-input" id="exampleInputFile" />
                                  <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
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
                    <a href="#" className="btn btn-cancel" data-dismiss="modal">Cancel</a>
                    <button type="submit" className="btn btn-save">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
</div> </div>
    );
  }
}
