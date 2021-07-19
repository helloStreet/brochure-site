import React from "react";

import SEO from "../components/seo";

import Layout from "../components/Layout/Layout";
import SmallPageHeader from "../Components/Headers/SmallPageHeader";

interface PageTemplateInterface {
  data: any;
  children: any;
}

const pageTemplate = ({ children }: PageTemplateInterface) => {
  return (
    <Layout title={"siteTitle"}>
      {/* <SEO title={`${siteTitle} | ${page.title}`} description="homepage" /> */}
      <SmallPageHeader data={{ title: "pageTile", tagLine: "pageTagline" }} />
      {children}
    </Layout>
  );
};

export default pageTemplate;
