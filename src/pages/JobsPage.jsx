/* eslint-disable no-unused-vars */
import React from "react";
import JobsListings from "../components/JobsListings";

const JobsPage = () => {
  return (
    <>
      <section className="bg-blue-50 px-4 py-6">
        <JobsListings isHome={false} />
      </section>
    </>
  );
};

export default JobsPage;
