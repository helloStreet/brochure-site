import { Link } from "gatsby";
import React from "react";

const PriceCard = ({ data }) => {
  return (
    <Link to={data.link}>
      <div className="border-myblue border border-t-4 hover:border-mypink m-2 w-full md:max-w-priceCard p-10">
        <h6>{data.title}</h6>
        <h2 className="">{data.price}</h2>
        <p>{data.body}</p>
      </div>
    </Link>
  );
};

export default PriceCard;
