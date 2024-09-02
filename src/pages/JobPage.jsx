/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteJob(jobId);
    toast.success("Job Deleted successfully");
    navigate("/jobs");
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        console.log("jobs", data);
        setJob(data);
      } catch (error) {
        console.error("Error fetching job", error);
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);

  return (
    <>
      {
        loading ? (
          <Spinner />
        ) : (
          <section>
            <div className="h-14 bg-white w-full flex items-center pl-10 text-sky-600">
              <Link to={"/jobs"}>Back to Job Listing</Link>
            </div>
            <div className="flex bg-green-600 w-full h-screen">
              <div className="flex flex-col w-3/4 bg-blue-100 p-10">
                <div className="w-full h-auto bg-white mb-5 rounded-md p-4 flex flex-col ">
                  <span className="text-sm text-stone-400 mb-3">
                    {job.type}
                  </span>
                  <span className="text-md text-neutral-950 font-bold ">
                    {job.title}
                  </span>
                  <div className="flex items-center gap-5 mt-8">
                    <FaMapMarker className="text-rose-500" />
                    <span className="text-rose-500 font-bold">
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col w-full h-auto bg-white mb-5 rounded-md p-4 ">
                  <span className="text-sm text-sky-600 font-bold mb-3">
                    Job Description
                  </span>
                  <span className="text-md text-neutral-950 mb-5">
                    {job.description}
                  </span>
                  <span className="text-sm text-sky-600 font-bold mb-1">
                    Salary
                  </span>
                  <span className="text-md text-neutral-950  ">
                    {job.salary}
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-1/4  bg-blue-100 py-10 px-5 ">
                <div className="flex flex-col w-full h-auto bg-white mb-5 rounded-md p-2 ">
                  <span className="text-black text-sm font-bold mb-4">
                    Company Info
                  </span>
                  <div className="flex flex-col mb-4">
                    <span className="text-black text-sm font-bold mb-1">
                      {job.company.name}
                    </span>
                    <span className="text-black text-sm ">
                      {job.company.description}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 mb-1">
                    <span className="text-black text-md ">Contact Email:</span>
                    <span className="bg-slate-300 p-1 rounded-sm">
                      {job.company.contactEmail}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black text-md ">Contact Phone:</span>
                    <span className="bg-slate-300 p-1 rounded-sm">
                      {job.company.contactPhone}
                    </span>
                  </div>
                </div>
                <div className=" flex flex-col w-full h-auto bg-white rounded-md p-2">
                  <span className="text-black text-sm font-bold mb-4">
                    Manage Job
                  </span>
                  <div className="flex flex-col gap-4">
                    <Link
                      className="flex items-center justify-center bg-blue-700 rounded-md text-white py-1"
                      to={`/edit-jobs/${job.id}`}
                    >
                      Edit Job
                    </Link>
                    <button
                      className="bg-red-700 rounded-md text-white py-1"
                      onClick={() => onDeleteClick(job.id)}
                    >
                      Delete Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) //remove this
      }
    </>
  );
};

export default JobPage;
