import * as React from "react";
import Layout from "../Components/Layout/Layout";
import HomeHeader from "../Components/Headers/HomeHeader";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import ProductCarousel from "../Components/Carousels/ProductCarousel";
import { homeData } from "../utils/Strings";
import Bar from "../Components/Layout/Bar";
const IndexPage = () => {
  return (
    <Layout>
      <HomeHeader />
      <ImageWithText data={homeData.textBox} />
      <Bar />
      <ImageWithText data={homeData.textBox2} />
      <Bar />

      <ProductCarousel />
    </Layout>
  );
};

export default IndexPage;
