import React from "react";
import "../css/Sale.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import data from "../assets/img/all_products";
import Filter from "../components/Filter";
import Card from "../components/Card";

function Sale() {
  const { category } = useParams();
  let sale_price;
  const cards =
    category == null
      ? data.filter((article) =>
          article.items.some((item) => Boolean(item.sale_price))
        )
      : data.filter(
          (article) =>
            article.category == category.replace("-", " ") &&
            article.items.some((item) => Boolean(item.sale_price))
        );
  console.log(cards);
  return (
    <>
      <Navbar />
      <div className="women-container">
        <div className="women-container-col-1"></div>
        <div className="women-container-col-2">
          <Filter styles={["Ballet Flats", "Boots", "Pumps", "Loafers"]} />
        </div>
        <div className="women-container-col-3"></div>
      </div>

      <div className="card-deck">
        {cards.map((card, index) => {
          const items_with_sale = card.items.filter((item) => {
            sale_price = item.sale_price;
            return Boolean(item.sale_price);
          });
          return (
            <Card
              product_id={card.product_id}
              title={card.title}
              price={sale_price}
              items={items_with_sale}
              gender={false}
              sale={true}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default Sale;
