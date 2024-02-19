import React from "react";
import "../css/Category.css";
import { useNavigate } from "react-router-dom";

function Category(props) {
  const navigate = useNavigate();
  return (
    <div className="category-component">
      <div
        onClick={() => {
          navigate(props.navigation);
        }}
      >
        <img src={props.img} alt="" />
        <div className="category-title">
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Category;
