/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card bg="bg-violet-300">
            <div className="flex flex-col justify-center py-11 rounded-xl px-2 pl-10 gap-5  ">
              <span className="text-black text-2xl font-bold">
                For Developers
              </span>
              <span>Browse our React jobs and start your career today</span>

              <Link
                to="/jobs"
                className="rounded-md bg-black text-xs text-white w-24 h-8 flex items-center justify-center"
              >
                {" "}
                Browse Jobs
              </Link>
            </div>
          </Card>
          <Card bg="bg-fuchsia-400">
            <div className="flex flex-col justify-center py-11 rounded-xl px-2 pl-10 gap-5 ">
              <span className="text-black text-2xl font-bold">
                For Employees
              </span>
              <span>Browse our React jobs and start your career today</span>
              <Link
                to="/add-jobs"
                className="rounded-md bg-black text-xs text-white w-24 h-8 flex items-center justify-center"
              >
                Add Job
              </Link>
            </div>
          </Card>
          <Card bg="bg-indigo-400">
            <div className="flex flex-col justify-center py-11 rounded-xl px-2 pl-10 gap-5 ">
              <span className="text-black text-2xl font-bold">For Users</span>
              <span>Browse our React Site and Learn More details In React</span>
              <button className="rounded-full bg-purple-50"></button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
