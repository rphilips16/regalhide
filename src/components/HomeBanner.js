import React from "react";
import "../css/HomeBanner.css";
import home_banner_1 from "../assets/img/home_banner_1.png";
import home_banner_2 from "../assets/img/home_banner_2.png";
import { useNavigate } from "react-router-dom";

function HomeBanner() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-banner">
        <div className="home-banner-column">
          <img src={home_banner_1} alt="" />
          <div className="home-banner-title">
            <h2>
              <span>Elements of </span> SPRING
            </h2>
          </div>
          <div className="home-banner-btn">
            <button
              onClick={() => {
                navigate("/sale");
              }}
            >
              Discover now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
