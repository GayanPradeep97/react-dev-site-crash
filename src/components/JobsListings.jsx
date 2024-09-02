/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Jobs from "../jobs.json";
import JobsListing from "../components/JobsListing";
import Spinner from "../components/Spinner";

const JobsListings = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setLoading(false);
      }
    };
    fetcchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobsListing key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobsListings;
