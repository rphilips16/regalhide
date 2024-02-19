import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import data from "../assets/img/all_products";

function Filter(props) {
  const sex = props.sex == "men" || props.sex == "women" ? props.sex : "sale";
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li
          onClick={() => {
            navigate(`/${sex}`);
          }}
        >
          All
        </li>
        {props.styles.map((item, index) => {
          return (
            <>
              <li
                onClick={() => {
                  //change this
                  navigate(`/${sex}/${item.toLowerCase().replace(" ", "-")}`);
                }}
              >
                {item}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default Filter;
