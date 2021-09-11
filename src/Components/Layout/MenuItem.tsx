import { Link } from "gatsby";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import navArrow from "../../images/icons/nav-arrow.svg";
const MenuItem = ({ item }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="bg-white z-50">
      {item.children.length <= 0 ? (
        <Link
          to={item.Url}
          className="mr-8 text-base font-semibold text-myaubergine "
          key={uuidv4()}
        >
          {item.title}
        </Link>
      ) : (
        <div
          className=""
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div
            className="mr-8 text-base font-semibold text-myaubergine flex flex-row "
            key={uuidv4()}
          >
            {item.title}

            <img
              src={navArrow}
              alt="V"
              className={
                showDropdown
                  ? "transform transition rotate-180 ease-in duration-300"
                  : ""
              }
            />
          </div>
          <div className="absolute shadow-lg bg-white rounded-lg">
            {showDropdown &&
              item.children.map((child, index) => {
                return (
                  <Link
                    to={child.Url}
                    className="mr-8 text-base p-4 font-semibold text-myaubergine flex flex-row "
                    key={uuidv4()}
                  >
                    {child.title}
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
