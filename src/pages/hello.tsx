import React from "react";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";
import Layout from "../Components/Layout/Layout";
import { HeaderWithBody } from "../Components/TextBoxes/HeaderWithBody";
import ImageWithText from "../Components/TextBoxes/ImageWithText";
import { SayHelloData } from "../utils/Strings";

const Hello = () => {
  return (
    <Layout title="Hello Street">
      <SmallPageHeader data={SayHelloData.header} />

      <ImageWithText data={SayHelloData.textBox1} />
    </Layout>
  );
};

export default Hello;
