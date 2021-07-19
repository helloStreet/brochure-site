import React from "react";
import PriceCard from "../Cards/PriceCard";

const PricingGrid = ({ data }) => {
  return (
    <div className="mx-auto ">
      <div className="flex flex-col md:flex-row mx-auto ">
        {data.map((card, index) => {
          return <PriceCard data={card} />;
        })}
      </div>
    </div>
  );
};

export default PricingGrid;
