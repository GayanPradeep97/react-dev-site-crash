/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListings from "./components/JobsListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <hr></hr>
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
