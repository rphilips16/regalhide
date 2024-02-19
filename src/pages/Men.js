import React from "react";
import "../css/Men.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../assets/img/all_products";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useParams } from "react-router-dom";

function Men() {
  const { category } = useParams();
  const cards =
    category == null
      ? data.filter((item) => item.sex == "men")
      : data.filter(
          (item) =>
            item.sex == "men" && item.category == category.replace("-", " ")
        );
  return (
    <>
      <Navbar />
      <div className="men-container">
        <div className="men-container-col-1"></div>
        <div className="men-container-col-2">
          <Filter styles={["Loafers", "Boots", "Dress shoes"]} sex={"men"} />
        </div>
        <div className="men-container-col-3"></div>
      </div>

      <div className="card-deck">
        {cards.map((card, index) => {
          return (
            <Card
              product_id={card.product_id}
              title={card.title}
              price={card.price}
              items={card.items}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Men;
