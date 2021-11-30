import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">Contact Me</div>
      <div className="contact__email">
        <p className="email">
          <i className="fas fa-envelope" /> <span>Email</span>
        </p>
        <p>dekalusha@gmail.com</p>
        <p>dekalusha@yahoo.com</p>
      </div>
      <div className="contact__phone">
        <p className="phone">
          <i className="fa fa-phone" /> <span>Phone</span>
        </p>
        <p>+234-81-301-49426</p>
      </div>
      <div className="contact__address">
        <p className="address__title">
          Address
        </p>
        <p className="address">
          Road 5 Greenland Estate, Olokonla, Lekki Epe, Lagos State
        </p>
      </div>
    </div>
  );
};

export default Contact;
