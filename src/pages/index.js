import * as React from "react";
import Layout from "../Components/Layout/Layout";
import HomeHeader from "../Components/Headers/HomeHeader";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import ProductCarousel from "../Components/Carousels/ProductCarousel";
import { homeData } from "../utils/Strings";

const IndexPage = () => {
  return (
    <Layout>
      <HomeHeader />
      <ImageWithText data={homeData.textBox} />
      <ImageWithText data={homeData.textBox2} />

      <ProductCarousel />
    </Layout>
  );
};

export default IndexPage;
