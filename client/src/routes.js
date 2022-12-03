import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Addproject from './components/Pages/Addproject/Addproject'
import Signup from './components/Pages/Signup/Signup'
import Signin from './components/Pages/Signin/Signin'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import  Allprojects from './components/Pages/Allprojects/projects'
import ProjectD from './components/Pages/projectDetails/projectD'
import UserProfile from './components/Pages/user/userProfile'
import UploadDoc from'./components/Pages/Addproject/UploadDoc'
import Dashboard from './components/Pages/dashboard'
import LDashboard from './components/Pages/Ldashboard';
import UpdateProfile from './components/Pages/user/updateProfile'

import SchoolYear from './components/Pages/school';
import GradeYear from './components/Pages/Gradyear'
import Criteria from './components/Pages/criteria'
import Course from './components/Pages/course';
import Student from './components/Pages/Student';
import Score from './components/Pages/Score';
import ScoreReport from './components/Pages/ScoreReport';
import StudentProfile from './components/Pages/StudentProfile'
import LecturerLogin from './components/Pages/Signin/LecturerLogin';
import LectureRegister from './components/Pages/Signup/LecturerRegister';
class Router extends Component{


    render(){


        return(

            <div>
       <Switch>
       < Route path="/"  strict exact={true} component={LandingPage}/>
      <Route path="/signin" strict exact={true} component={Signin}/>
      <Route path="/signup" strict exact={true}  component={Signup}/>  
      <Route path = "/lsignin"
      strict exact = {
          true
      }
      component = {
          LecturerLogin}
      /> 
      <Route path = "/lsignup"
      strict exact = {
          true
      }
      component = {
          LectureRegister
      }
      />  
      <Route path="/addproject" strict exact={true} component={Addproject}/>  
      <Route path="/projects" strict exact={true} component={Allprojects}/>
      <Route path="/projectD/:id" strict exact={true} component={ProjectD}/>
      <Route path="/userprofile" strict exact={true} component={UserProfile}/>
      <Route path="/updateprofile/:id" strict exact={true} component={UpdateProfile}/>
      <Route path="/upload/:id"  strict exact={true} component={UploadDoc}
      />
      <Route path="/dashboard" strict exact={true} component={Dashboard}
      />
       <Route path="/ldashboard" strict exact={true} component={LDashboard}
      /> 
      <Route path="/schoolyear" strict exact={true} component={SchoolYear}
      />
      <Route path="/gradeyear" strict exact={true} component={GradeYear}
      />
      <Route path="/criteria" strict exact={true} component={Criteria}
      />
      <Route path="/course" strict exact={true} component={Course}
      />
        <Route path="/student" strict exact={true} component={Student}
        
      />
        <Route path = "/profile"
        strict exact = {
            true
        }
        component = {
            StudentProfile
        }

        />
       <Route path="/score" strict exact={true} component={Score}
      />
      <Route path="/scorereport" strict exact={true} component={ScoreReport}
      />


     
      
           </Switch>

            </div>
        )
    }
}

export default Router
