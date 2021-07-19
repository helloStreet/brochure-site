import { Link } from "gatsby";
import React from "react";

const PriceCard = ({ data }) => {
  return (
    <Link to={data.link}>
      <div className="bg-mylightblue w-300   p-10">
        <h3>{data.title}</h3>
        <h1>{data.price}</h1>
        <p>{data.body}</p>
      </div>
    </Link>
  );
};

export default PriceCard;
