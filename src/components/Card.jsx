/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ children, bg = "bg-purple-50" }) => {
  return (
    <>
      <div className={`${bg} h-52 w-96 rounded-xl m-2 shadow-md xl:w-[400px] `}>
        {children}
      </div>
    </>
  );
};

export default Card;
