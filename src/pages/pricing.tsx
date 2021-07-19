import React from "react";

import PricingGrid from "../Components/Grids/PricingGrid";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import ImageWithText from "../Components/TextBoxes/ImageWithText";

import { priceCardInfo, pricingData } from "../utils/Strings";
const pricing = () => {
  return (
    <Layout>
      <SmallPageHeader data={pricingData.header} />
      <PricingGrid data={priceCardInfo} />
      <ImageWithText data={pricingData.textBox}></ImageWithText>
    </Layout>
  );
};

export default pricing;
