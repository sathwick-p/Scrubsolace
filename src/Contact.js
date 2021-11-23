import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="banner-area">
        <div className="content-area">
          <div className="content">
            <h1 className="titleStyle">About Scrubsolace.</h1>
            <h2 className="titleStyle2">Personalised Scrubs</h2>
            <button className="browse_products">BROWSE PRODUCTS</button>
          </div>
          <br />
        </div>
      </div>
      <div className="contact_info">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">E-MAIL</h5>
            <h6 className="card-subtitle mb-2 text-muted">Mail us at </h6>
            <p className="card-text">geetikanair.gn@gmail.com</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">PHONE</h5>
            <h6 className="card-subtitle mb-2 text-muted">Call us at</h6>
            <p className="card-text">+91 9876543210</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Vist Us at</h5>
            <h6 className="card-subtitle mb-2 text-muted">Address</h6>
            <p className="card-text">
              Arekere, Bannerghatta Main Road,Banglore - 560076
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
