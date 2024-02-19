import React from "react";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-categories">
          <ul>
            <li
              onClick={() => {
                navigate("/women");
              }}
            >
              Women
            </li>
            <li
              onClick={() => {
                navigate("/men");
              }}
            >
              Men
            </li>
            <li
              onClick={() => {
                navigate("/sale");
              }}
            >
              Sale
            </li>
          </ul>
        </div>
        <div className="navbar-title">
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            RegalHide
          </h1>
        </div>
        <div className="navbar-buttons">
          <ul>
            <li
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign in
            </li>
            <li
              onClick={() => {
                navigate("/favorites");
              }}
            >
              Favorites
            </li>
            <li
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
