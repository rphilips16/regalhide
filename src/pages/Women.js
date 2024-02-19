import React from "react";
import "../css/Women.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../assets/img/all_products";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useParams } from "react-router-dom";

function Women() {
  const { category } = useParams();
  const cards =
    category == null
      ? data.filter((item) => item.sex == "women")
      : data.filter(
          (item) =>
            item.sex == "women" && item.category == category.replace("-", " ")
        );
  return (
    <>
      <Navbar />
      <div className="women-container">
        <div className="women-container-col-1"></div>
        <div className="women-container-col-2">
          <Filter styles={["Ballet Flats", "Boots", "Pumps"]} sex={"women"} />
        </div>
        <div className="women-container-col-3"></div>
      </div>

      <div className="card-deck">
        {cards.map((card, index) => {
          return (
            <Card
              product_id={card.product_id}
              title={card.title}
              price={card.price}
              items={card.items}
              gender={false}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Women;
