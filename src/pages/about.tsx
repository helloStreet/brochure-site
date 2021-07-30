import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import { AboutUsData } from "../utils/Strings";

const About = () => {
  return (
    <Layout title="About">
      <SmallPageHeader data={AboutUsData.header} />;
    </Layout>
  );
};

export default About;
