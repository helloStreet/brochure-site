import React from "react";
import PriceCard from "../Cards/PriceCard";

const PricingGrid = ({ data }) => {
  return (
    <div className="mx-auto max-w-screen-xl mb-16 pt-1 px-4">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row mx-auto ">
        {data.map((card, index) => {
          return <PriceCard data={card} />;
        })}
      </div>
    </div>
  );
};

export default PricingGrid;
