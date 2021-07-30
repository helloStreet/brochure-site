import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Bar from "../Components/Layout/Bar";
import Layout from "../Components/Layout/Layout";
import HeaderWithBody from "../Components/TextBoxes/HeaderWithBody";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { maintenanceData } from "../utils/Strings";
const maintenance = () => {
  return (
    <Layout>
      <SmallPageHeader data={maintenanceData.header} />

      <ImageWithText data={maintenanceData.textBox1} />
      <Bar />
      <HeaderWithBody data={maintenanceData.textBox2} />
      <Bar />
      <ImageWithText data={maintenanceData.textBox3} />
      <Bar />
      <ImageWithText data={maintenanceData.textBox4} />
    </Layout>
  );
};

export default maintenance;
