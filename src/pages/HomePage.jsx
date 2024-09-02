/* eslint-disable no-unused-vars */

import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsListings from "../components/JobsListings";
import ViewAllJobs from "../components/ViewAllJobs";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
