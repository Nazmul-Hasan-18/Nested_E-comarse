import React from "react";
import Main from "./HomeComponent/main/Main";
import CategoryComponent from "./HomeComponent/Category/CategoryComponent";
import Baner from "./HomeComponent/card/Baner";
import HomeProduct from "./HomeComponent/homeProduct/HomeProduct";
import BestSellsProduct from "./HomeComponent/hbestSellsProduct/BestSellsProduct";
import EmailLatter from "./HomeComponent/subscribe/EmailLatter";
import Time from "./HomeComponent/timeCom/Time";
import TopSells from "./HomeComponent/hTopSellProduct/TopSells";
import BestPrice from "./HomeComponent/bestprice/BestPrice";
import Footer from "../footer/Footer";

// #29A56C

const Home = () => {
  return (
    <div>
      <Main />
      <CategoryComponent />
      <Baner />
      <HomeProduct />
      <BestSellsProduct />
      <Time />
      <TopSells />
      <EmailLatter />
      <BestPrice />
     
    </div>
  );
};

export default Home;
