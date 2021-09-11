import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../images/hellostreet/logotransparentsmall.png";

const MobileNav = ({ mobileitems }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="bg-black block md:hidden relative z-50 ">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center flex-row py-3 px-5">
        <img src={logo} alt="Regent's" className="w-36" />

        <div className="text-white">
          <BurgerMenu onClick={() => setShowMobileNav(!showMobileNav)}>
            <Line1 showMobileMenu={showMobileNav} />
            <Line2 showMobileMenu={showMobileNav} />
            <Line3 showMobileMenu={showMobileNav} />
          </BurgerMenu>
        </div>
      </div>
      {showMobileNav && (
        <div className="bg-white w-full h-full flex flex-col  absolute transition ease-in duration-1000">
          {mobileitems.map((item, i) => {
            return (
              <div className="bg-white flex relative px-5 w-full h-full shadow-xl">
                <Link
                  to={item.Url}
                  className="text-bodytablet bg-white py-5 border-solid border-keyline border-b "
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileNav;

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 30px;
  height: 21px;
  justify-content: space-between;
  margin: 0 10px;
`;
interface BurgerProps {
  showMobileMenu: boolean;
}
const Line1 = styled.div<BurgerProps>`
  height: 3px;
  width: 100%;
  background-color: white;
  position: relative;
  transform: translateY(${(props) => (props.showMobileMenu ? "9px" : "")})
    ${(props) => (props.showMobileMenu ? "rotate(45deg)" : "")};
  transition-duration: 0.5s;
`;
const Line2 = styled(Line1)<BurgerProps>`
  transform: ${(props) => (props.showMobileMenu ? "scaleX(0)" : "scaleX(1)")};
`;
const Line3 = styled(Line1)<BurgerProps>`
  transform: translateY(${(props) => (props.showMobileMenu ? "-9px" : "")})
    ${(props) => (props.showMobileMenu ? "rotate(-45deg)" : "")};
`;
