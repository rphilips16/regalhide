import React from "react";
import "../css/SignUp.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sign_up_banner from "../assets/img/sign_up_banner.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="sign-up">
        <div className="sign-up-columm">
          <div className="sign-up-left">
            <img src={sign_up_banner} alt="" />
          </div>
          <div className="sign-up-right">
            <div className="sign-up-right-col-1"></div>
            <div className="sign-up-right-col-2">
              <p>
                Have an account?{" "}
                <span>
                  <a
                    onClick={() => {
                      navigate("/signin");
                    }}
                    id="link"
                  >
                    Sign in
                  </a>
                </span>
              </p>
              <h1>Sign Up</h1>
              <div className="sign-up-fields">
                <p>Name</p>
                <input type="text" placeholder="Your Name" />
                <p>Email</p>
                <input type="email" placeholder="Email Address" />
                <p>Password</p>
                <input type="password" placeholder="Password" />
              </div>
              <div className="sign-up-agree">
                <input type="checkbox" name="" id="" />
                <p>
                  By continuing, I agree to the terms of use & privacy policy.
                </p>
              </div>
              <div className="sign-up-btn">
                <button>Sign Up</button>
              </div>
            </div>
            <div className="sign-up-right-col-3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
