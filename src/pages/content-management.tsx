import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import { contentManagementData } from "../utils/Strings";

const ContentManagement = () => {
  return (
    <Layout>
      <SmallPageHeader data={contentManagementData.header} />
    </Layout>
  );
};

export default ContentManagement;
