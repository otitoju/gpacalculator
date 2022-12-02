import React from 'react';
import {Link} from 'react-router-dom'

import Particles from 'react-particles-js';

import './Particlejs.css'


const particleOption={
    particles: {
    number:{
      value:80,
      color:"#000000",
  
      density:{
        enable:true,
        value_area:800
      },

    }
   
    
  }
  
  
      
  }  


const Particlejs=()=>{

 
return(

    <div>
       <section >
        <Particles  className="particle"
              params={{particleOption}}/>
     
       <div className="pSection">
      <h1 >AUTOMATED RESULT PROCESSING AND TRANSCRIPT GENERATION APP.</h1>
        
      <br/>
      <div style={{margin:'10px'}}>
     <Link to="/signin"> <button className="btn btn-info">Login</button></Link>

          <Link to="/signup"> <button className="btn btn-info">Register</button></Link>
          </div>

            <br/>
           
          </div>
          </section>

    </div>
)

}


export default Particlejs
