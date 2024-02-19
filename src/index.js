import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Sale from "./pages/Sale";
import reportWebVitals from "./reportWebVitals";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Card from "./components/Card";
import SignIn from "./pages/SignIn";
import Item from "./components/Item";
import Filter from "./components/Filter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/sale",
    element: <Sale />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/:item_id",
    element: <Item />,
  },
  {
    path: "/women/:category",
    element: <Women />,
  },
  {
    path: "/men/:category",
    element: <Men />,
  },
  {
    path: "/sale/:category",
    element: <Sale />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
