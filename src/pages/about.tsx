import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { aboutUsData } from "../utils/Strings";

const About = () => {
  return (
    <Layout title="About">
      <SmallPageHeader data={aboutUsData.header} />
      <ImageWithText data={aboutUsData.textBox} />s
    </Layout>
  );
};

export default About;
