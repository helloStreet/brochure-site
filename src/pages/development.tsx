import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { developmentData } from "../utils/Strings";
const development = () => {
  console.log(developmentData.header);
  return (
    <Layout>
      <SmallPageHeader data={developmentData.header} />

      <ImageWithText data={developmentData.textBox} />
    </Layout>
  );
};

export default development;
