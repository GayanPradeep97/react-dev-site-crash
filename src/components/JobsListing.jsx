/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobsListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="">
              <span className="text-gray-500">{job.type}</span>
            </div>
            <div className="mb-10">
              <span className="text-black font-bold">{job.title}</span>
            </div>
            <div className="mb-4">
              <span className="text-black ">{description}</span>
            </div>
            <div>
              <button
                className="text-indigo-500 mb-8 hover:text-indigo-600"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? "Less" : "More"}
              </button>
            </div>
            <div className="mb-5">
              <span className="text-indigo-500">{job.salary}</span>
            </div>
            <hr></hr>
            <div className="mt-5 flex gap-4 items-center">
              <FaMapMarker className="text-rose-500" />
              <span className="text-rose-500 font-bold">{job.location}</span>
            </div>
            <div className="mt-7 ">
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 h-[36px] rounded-lg">
                <Link
                  to={`/jobs/${job.id}`}
                  className="bg-indigo-500  hover:bg-indigo-600 text-white px-2 py-2  text-center text-sm"
                >
                  Read more
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsListing;
