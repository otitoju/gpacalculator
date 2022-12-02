import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

import { userProfile } from "../apidata/api";
import Aside from "./aside";
export default class Course extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      unit: "",
      code:""

    };
    this.handleUnit= this.handleUnit.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleCode = this.handleCode.bind(this)
  }

  async componentWillMount() {
    const user = await userProfile();
    console.log(user.message + "  ookkkkk");
    if (user.message === "success") {
    

      await this.setState({ title: "yiyle" });

      const id = await window.localStorage.getItem("userId");

      await this.setState({ id: id });
      console.log(this.state.id);
    } else {
      this.props.history.push("/");
    }
  }
    handleTitle(e){
            this.setState({title:e.target.value})
        }
        handleCode(e){
            this.setState({code:e.target.value})
        }
        handleUnit(e){
            this.setState({unit:e.target.value})
        }

 handleSubmit=()=>{
             
          let  id= this.state.id
             
           fetch(`/student/course/${id}`, { 
               method:'POST',
               headers:{
                   'Accept':'application/json',
                   'Content-Type':'application/json'
               },
               body:JSON.stringify({
                   fname:this.state.fname,
                    lname:this.state.lname,
                    level :this.state.level,
                   email:this.state.email,
                   password:this.state.password,
                   department: this.state.department
               })

           } )
           .then(res => res.json())
           .then((res) => {console.log(res.message)
            this.setState({isLoading:false})
               console.log(res)
               if(res.MESSAGE = "Created"){
                
                this.props.history.push('/signin')
               }else{
               this.setState({info:res.message})}
        })
           .catch(err =>{ console.log(err)
            this.setState({isLoading:false})
        })

         

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
                  <h1 className="m-0"><img src="../asset/img/subject.png" width={40} /> Course</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                          <span className="fa fa-file"> Course Information</span>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Course tilte</label>
                              <input type="text" className="form-control" placeholder="Course Title" value={this.state.title} onChange={this.handleTitle} />
                            </div>
                             <div className="form-group">
                              <label>Course Code</label>
                              <input type="text" className="form-control" placeholder="Course Code"  value={this.state.code} onChange={this.handleCode}/>
                            </div>

                            <div className="form-group">
                              <label>Course Unit</label>
                              <input type="text" className="form-control" placeholder="Course unit"  value={this.state.unit} onChange={this.handleUnit}/>
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
                          <button onClick={this.handleSubmit} className="btn btn-primary">Register</button>
                        </div>
                      </div>
                      <div className="col-md-8" style={{borderLeft: '1px solid #ddd'}}>
                        <table id="example1" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Course title</th>
                              <th>Course Code</th>
                              <th>Course Unit</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Csc-101</td>
                              <td>Introduction to programing</td>
                              <td>6</td>
                              <td className="text-center">
                                <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                              </td>
                            </tr>
                            <tr>
                              <td>CSC-105</td>
                              <td>ccccc</td>
                              <td>Description</td>
                              <td className="text-center">
                                <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i className="fa fa-edit" /> update</a>
                                <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i className="fa fa-trash-alt" /> delete</a>
                              </td>
                            </tr>
                            <tr>
                              <td>CSC-103</td>
                              <td>ggggg</td>
                              <td>Description</td>
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
                <h3>Are you sure want to delete this Subject?</h3>
                <div className="m-t-20"> <a href="#" className="btn btn-white" data-dismiss="modal">Close</a>
                  <button type="submit" className="btn btn-danger">Delete</button>
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
