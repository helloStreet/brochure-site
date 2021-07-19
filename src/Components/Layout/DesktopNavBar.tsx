import { Link } from "gatsby";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../../images/logotransparentsmall.png";
import navArrow from "../../images/icons/nav-arrow.svg";
const desktopNavBar = ({ NavItems }) => {
  return (
    <div className="  border-mypink border-b h-20 z-50 bg-white  hidden md:block  mx-auto  w-full ">
      <div className="mx-auto max-w-screen-xl flex justify-between align-middle px-4 items-center flex-row">
        <Link to="/">
          <img src={logo} alt="" className="h-10" />
        </Link>
        <div className="text-white flex flex-row">
          {NavItems.map((item, i) => {
            return (
              <div>
                {item.children.length <= 0 ? (
                  <Link
                    to={item.Url}
                    className="mr-8 text-base text-myaubergine "
                    key={uuidv4()}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <Link
                      to={item.Url}
                      className="mr-8 text-base text-myaubergine flex flex-row "
                      key={uuidv4()}
                    >
                      {item.title}
                      <img src={navArrow} alt="V" />
                    </Link>
                    <div>
                      {item.children.map((child, index) => {
                        return (
                          <Link
                            to={child.Url}
                            className="mr-8 text-base text-myaubergine flex flex-row "
                            key={uuidv4()}
                          >
                            {child.title}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default desktopNavBar;
