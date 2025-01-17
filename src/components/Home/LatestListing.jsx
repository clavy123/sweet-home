import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import ListCard from "../Global/ListCard";
import { popularlist } from "../../constants/popularList";

const LatestListing = () => {
  return (
    <section
      className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
    >
      <h1 className="text-2xl font-semibold">Latest listings</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <p className="text-gray-500">SweetHome's most popular watch lists.</p>
        <div className="flex items-center justify-start gap-2 ">
          <p className="float-left">View All 2,414 listings</p>
          <Link
            to="/"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
          >
            <TiArrowRight className="w-full h-full" />
          </Link>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
    </section>
  );
};

export default LatestListing;
