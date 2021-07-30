import { Link } from "gatsby";

import React from "react";

const ProductCard = ({ data, key }) => {
  console.log(key);
  console.log(data.image);
  return (
    <Link to={data.link}>
      <div className="w-80 border-t-4  cursor-pointer  border-mypink ">
        <div className=" flex  h-56 bg-myaubergine">
          <img
            // todo change the image over
            src={data.image}
            // image={data.img}
            style={{ objectFit: "cover" }}
            loading="lazy"
            alt="Portfolio Card Image"
            className="relative transform hover:shadow-xl  mx-auto "
          />
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
