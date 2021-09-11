import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import HeaderWithBody from "../Components/TextBoxes/HeaderWithBody";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { chartAnimation } from "../utils/Images";
import { developmentData } from "../utils/Strings";
import chartcut from "../images/chartcut.webp";
import chartsvg from "../images/chartsvg.svg";
const development = () => {
  return (
    <Layout>
      <SmallPageHeader data={developmentData.header} />
      {/* <div className="w-1/2 image-wrapper relative top-0">
        <img src={chartcut} alt="Chart image" />
        <object
          type="image/svg+xml"
          data={chartsvg}
          className="couple-animation"
        />
      </div> */}
      <HeaderWithBody data={developmentData.textBox} />
      <ImageWithText data={developmentData.textBox2} />
    </Layout>
  );
};

export default development;
