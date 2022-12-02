import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import { userProfile } from "../apidata/api";
import Aside from "./aside";
export default class Criteria extends Component {
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
        <Aside/>
 <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0"><img src="../asset/img/criteria.png" width={40} /> Criteria</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Criteria</li>
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
                          <span className="fa fa-file"> Criteria Information</span>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Criteria Name</label>
                              <input type="text" className="form-control" placeholder="Criteria Name" />
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
                              <th>Criteria</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Criteria 1</td>
                              <td className="text-center">
                                <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Criteria 2</td>
                              <td className="text-center">
                                <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Criteria 3</td>
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
        <div id="delete" className="modal animated rubberBand delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src="../asset/img/sent.png" alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Criteria?</h3>
                <div className="m-t-20"> <a href="#" className="btn btn-white" data-dismiss="modal">Close</a>
                  <button type="submit" className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     </div>
    );
  }
}
