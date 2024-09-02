/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListings from "./components/JobsListings";
import ViewAllJobs from "./components/ViewAllJobs";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import AddJobs from "./pages/AddJobs";
import NotFound from "./pages/NotFound";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  //add new job
  const addjob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //delete existing job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route
          path="/edit-jobs/:id"
          element={<EditJobPage deleteJob={deleteJob} />}
        />
        <Route path="/add-jobs" element={<AddJobs addJobsSubmit={addjob} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
