import React, { useState } from "react";
import JobCard from "../../components/JobCard";
import JobDetails from "../../components/JobDetails";
import { useRouteMatch, Switch, Route } from "react-router-dom";

function Jobs() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <div className="row">
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
          <div className="col-lg-4 col-12">
            <JobCard />
          </div>
        </div>
      </Route>
      <Route path={`${path}/:jobId`}>
        <JobDetails />
      </Route>
    </Switch>
  );
}

export default Jobs;
