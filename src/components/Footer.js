import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-lists">
          <ul>
            <li className="footer-title">Customer Care</li>
            <li>Help & contact</li>
          </ul>
          <ul>
            <li className="footer-title">RegalHide Shoemakers</li>
            <li>About us</li>
            <li>Career</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li className="footer-title">Info</li>
            <li>About us</li>
            <li>Career</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>© 2024 RegalHide International</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
