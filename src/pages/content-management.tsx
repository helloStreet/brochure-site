import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { contentManagementData } from "../utils/Strings";

const ContentManagement = () => {
  return (
    <Layout>
      <SmallPageHeader data={contentManagementData.header} />
      <ImageWithText data={contentManagementData.textBox} />
      <ImageWithText data={contentManagementData.textBox2} />
    </Layout>
  );
};

export default ContentManagement;
