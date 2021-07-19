import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { maintenanceData } from "../utils/Strings";
const maintenance = () => {
  return (
    <Layout>
      <SmallPageHeader data={maintenanceData.header} />

      <ImageWithText data={maintenanceData.textBox}></ImageWithText>
    </Layout>
  );
};

export default maintenance;
