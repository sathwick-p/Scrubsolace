import React from "react";
import { Link } from "react-router-dom";
import "./Logout.css";
function Logout() {
  return (
    <div className="Logout-page">
      <h1>Thank You for visiting our website!!</h1>
      {/* <Link to ="http://localhost:5000/login">
                Click here to get redirected to Login Page
            </Link> */}
      <p>
        <a href="http://localhost:5000/login">Click here </a> to get redirected
        to the login section
      </p>
    </div>
  );
}

export default Logout;
