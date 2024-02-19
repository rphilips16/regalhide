import React from "react";
import "../css/Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const changeLabelDisplay = (index) => {
    const label = document.getElementById(
      `product-${props.product_id}-label-${index}`
    );
    console.log(label);
    label.style.display === "none"
      ? (label.style.display = "block")
      : (label.style.display = "none");
  };
  return (
    <div className="card">
      <div
        onClick={() => {
          navigate(
            `/${props.title.toLowerCase()}-${props.product_id}-${
              props.items[0].article_id
            }`
          );
        }}
      >
        <img src={props.items[0].image[0].src} alt="" />
      </div>
      <div className="card-container">
        <h2>{props.title}</h2>
        <p className={props.sale == true ? "sale" : ""}>${props.price}</p>
        <div className="color-parent">
          {props.items.map((item, index) => {
            return (
              <>
                <div className="color-div">
                  <div
                    className="color-label"
                    id={`product-${props.product_id}-label-${index}`}
                    style={{ display: "none" }}
                  >
                    {item.color_name}
                  </div>
                  <div
                    className="color"
                    style={{ backgroundColor: item.color_code }}
                    onMouseEnter={() => {
                      changeLabelDisplay(index);
                    }}
                    onMouseLeave={() => {
                      changeLabelDisplay(index);
                    }}
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
