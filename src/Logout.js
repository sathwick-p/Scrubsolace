import React from 'react';
import { Link } from 'react-router-dom';
function Logout(){
    return(
        <div>
            <h1>Thank You for visiting our website!!</h1>
            {/* <Link to ="http://localhost:5000/login">
                Click here to get redirected to Login Page
            </Link> */}
            <a href="http://localhost:5000/login">Click here</a>
        </div>
  
    )
}

export default Logout;
