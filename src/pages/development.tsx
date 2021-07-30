import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import HeaderWithBody from "../Components/TextBoxes/HeaderWithBody";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { developmentData } from "../utils/Strings";
const development = () => {
  return (
    <Layout>
      <SmallPageHeader data={developmentData.header} />

      <HeaderWithBody data={developmentData.textBox} />
      <ImageWithText data={developmentData.textBox2} />
    </Layout>
  );
};

export default development;
