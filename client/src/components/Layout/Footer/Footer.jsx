import React, { Component } from 'react';
 import {Link} from 'react-router-dom'

export default class Footer extends Component{
    render(){
 const FTstyle={
     marginTop:"200px"

 }
    return(
        <div>
                        {/* <!-- Footer --> */}
                
            <footer style={FTstyle} className="page-footer font-small unique-color-dark">

            <div>

            {/* <!-- Footer Links --> */}
            <div className="container text-center text-md-left mt-5 p-2">

            {/* <!-- Grid row --> */}
            <div className="row mt-3">

                 <h3>ResultProcessingSystem</h3>
                 </div>
            </div>
            {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links --> */}

            {/* <!-- Copyright --> */}
            <div className="footer-copyright text-center py-3">© 2022 Copyright &nbsp; with <span style={{color:'red',fontSize:'20px'}}>&hearts; &nbsp;</span>
            <a href="">by OTUTUBUIKE PATIENCE UCHECHI</a>
            </div>
            {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}

        </div>
    )
}
}

// export default Footer;