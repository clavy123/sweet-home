import React from "react";
import { NotFoundImage } from "../assets/export";

const NotFound = () => {
  return (
    <section className={`py-12 lg:py-24 flex justify-center`}>
      <img src={NotFoundImage} className="not__found-image"/>
    </section>
  );
};

export default NotFound;
