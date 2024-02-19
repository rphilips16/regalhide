import React from "react";
import Navbar from "./Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import data from "../assets/img/all_products";
import "../css/Item.css";
import { useNavigate } from "react-router-dom";

function Item(props) {
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
  const [shoe, setShoe] = useState({});
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);
  const string = window.location.pathname;
  const arr = string.split("/")[1].split("-");
  const product_id = arr[1];
  const article_id = arr[2];

  useEffect(() => {
    console.log(props.gender);
    const filter = data.filter((item) => item.product_id == product_id);
    console.log(filter);
    const article = filter[0].items.filter(
      (item) => item.article_id == article_id
    );
    console.log(article);
    setShoe({ ...filter[0], item: article[0] });
    setLoading(false);
  }, [reload]);

  return (
    <>
      {loading ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <>
          <Navbar />
          <div className="item-container-column">
            <div className="item-column-1">
              <img src={shoe.item.image[1].src} />
              <img src={shoe.item.image[0].src} />
              <img src={shoe.item.image[2].src} />
              <img src={shoe.item.image[3].src} />
            </div>
            <div className="item-column-2">
              <div className="item-column-2-row-1">
                <h2>{shoe.title}</h2>
                <p
                  className={
                    shoe.item.hasOwnProperty("sale_price") ? "sale-cross" : ""
                  }
                >
                  ${shoe.price}
                </p>
                <p className="sale">
                  {shoe.item.hasOwnProperty("sale_price")
                    ? `$${shoe.item.sale_price}`
                    : ""}
                </p>
              </div>
              <div className="item-column-2-row-2">
                <div className="color-parent">
                  {shoe.items.map((item, index) => {
                    console.log(item);
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
                            onClick={() => {
                              navigate(
                                `/${shoe.title.toLowerCase()}-${
                                  shoe.product_id
                                }-${item.article_id}`
                              );
                              setReload(reload + 1);
                            }}
                          ></div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="color-label-div">{shoe.item.color_name}</div>
              </div>

              <div className="item-column-2-row-3">
                <p>Fit: {shoe.fit}</p>
                <div className="size-parent">
                  {console.log(shoe)}
                  {shoe.item.size.map((item, index) => {
                    return (
                      <>
                        <div className="size-container">
                          <div
                            className={`size ${
                              item.availability ? "" : "unavailable"
                            }`}
                            id={`product-${props.product_id}-label-${index}`}
                          >
                            {item.size}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <h4>Description</h4>
                <p>{shoe.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Item;
