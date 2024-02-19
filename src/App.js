import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import home_banner_1 from "./assets/img/home_banner_1.png";
import home_banner_2 from "./assets/img/home_banner_2.png";
import HomeBanner from "./components/HomeBanner";
import Category from "./components/Category";

import item_1 from "./assets/img/item_1.png";
import item_2 from "./assets/img/item_2.png";
import item_3 from "./assets/img/item_3.png";
import item_4 from "./assets/img/item_4.png";
import item_5 from "./assets/img/item_5.png";
import item_6 from "./assets/img/item_6.png";

import w_01_01_01 from "./assets/img/w_01_01_01.png";
import w_02_01_01 from "./assets/img/w_02_01_01.png";
import w_03_01_01 from "./assets/img/w_03_01_01.png";
import w_04_01_01 from "./assets/img/w_04_01_01.png";

import m_13_01_01 from "./assets/img/m_13_01_01.png";
import m_14_01_01 from "./assets/img/m_14_01_01.png";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <HomeBanner />

        <div className="category-column">
          <div className="category-offset">
            <Category
              img={w_01_01_01}
              title="Giselle"
              navigation="./giselle-1-100"
            />
            <Category
              img={w_02_01_01}
              title="Delia"
              navigation="./delia-2-102"
            />
            <Category
              img={w_03_01_01}
              title="Riley"
              navigation="./riley-3-103"
            />
            <Category
              img={w_04_01_01}
              title="Jolin"
              navigation="./jolin-4-104"
            />
          </div>
        </div>

        <div className="category-column">
          <div className="category-column-left">
            <Category img={item_1} title="Pumps" navigation="./women" />
          </div>
          <div className="category-column-right">
            <Category img={item_2} navigation="./women" />
          </div>
        </div>

        <div className="category-column">
          <div className="category-offset">
            <Category img={m_13_01_01} title="Dresses" navigation="./men" />
            <Category img={m_14_01_01} title="Coats" navigation="./men" />
            <Category img={item_3} title="Bags" navigation="./men" />
            <Category img={item_3} title="Bags" navigation="./men" />
          </div>
        </div>

        <div className="category-column">
          <div className="category-column-left">
            <Category img={item_5} title="Loafers" navigation="./men" />
          </div>
          <div className="category-column-right">
            <Category img={item_6} title="Dress Shoes" navigation="./men" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
