import React from "react";
import { footerContactLinks, footerPages, NavLinks } from "../../utils/Links";
import DesktopNavBar from "./DesktopNavBar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import PromoBanner from "./PromoBanner";

const pages = footerPages;
const getInTouchLinks = footerContactLinks;
const NavItems = NavLinks;

const Layout = ({ title, children }) => {
  return (
    <div className="max-w-maxWidth mx-auto">
      {/* <TopBar /> */}
      <DesktopNavBar NavItems={NavItems} />
      <MobileNav mobileitems={NavItems} />
      {children}
      <PromoBanner />
      <Footer getInTouchLinks={getInTouchLinks} pages={pages} />
    </div>
  );
};

export default Layout;
