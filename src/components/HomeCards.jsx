/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <section>
        <div className="flex gap-3">
          <Card bg="bg-violet-300">
            <div className="flex flex-col justify-center py-11 rounded-xl px-2 pl-10 gap-5  ">
              <span className="text-black text-2xl font-bold">
                For Developers
              </span>
              <span>Browse our React jobs and start your career today</span>
              <button className="bg-black"></button>
            </div>
          </Card>
          <Card bg="bg-fuchsia-400">
            <div className="flex flex-col justify-center py-11 rounded-xl px-2 pl-10 gap-5 ">
              <span className="text-black text-2xl font-bold">
                For Employees
              </span>
              <span>Browse our React jobs and start your career today</span>
              <button className="rounded-full bg-purple-50"></button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
