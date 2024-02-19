import React from "react";
import "../css/SignIn.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sign_in_banner from "../assets/img/sign_in_banner.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="sign-in">
        <div className="sign-in-columm">
          <div className="sign-in-left">
            <img src={sign_in_banner} alt="" />
          </div>
          <div className="sign-in-right">
            <div className="sign-in-right-col-1"></div>
            <div className="sign-in-right-col-2">
              <p>
                Need an account?{" "}
                <span>
                  <a
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign Up
                  </a>
                </span>
              </p>
              <h1>Sign In</h1>
              <div className="sign-in-fields">
                <p>Email</p>
                <input type="email" placeholder="Email Address" />
                <p>Password</p>
                <input type="password" placeholder="Password" />
              </div>

              <div className="sign-in-btn">
                <button>Sign In</button>
              </div>
            </div>
            <div className="sign-in-right-col-3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
