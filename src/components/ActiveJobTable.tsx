import React from "react";

function ActiveJobTable() {
  return (
    <div className="box">
      <div className="box-header">
        <h4 className="box-title">Active Jobs</h4>
        <ul className="box-controls pull-right d-md-flex d-none">
          <li className="dropdown">
            <button
              className="btn btn-primary px-10 "
              data-toggle="dropdown"
              href="#"
            >
              View List
            </button>
          </li>
        </ul>
      </div>
      <div className="box-body">
        <div id="active_jobs"></div>
      </div>
      <div className="box-body">
        <div className="bb-1 d-flex justify-content-between">
          <h5>Job title</h5>
          <h5>Applications</h5>
        </div>
        <div className="d-flex justify-content-between my-15">
          <p>Project Manager</p>
          <p>
            <strong>325</strong>
            <button
              type="button"
              className="waves-effect waves-light btn btn-xs btn-outline btn-primary-light mx-5"
            >
              <i className="fa fa-line-chart"></i>
            </button>
          </p>
        </div>
        <div className="d-flex justify-content-between my-15">
          <p>Sales Manager</p>
          <p>
            <strong>154</strong>
            <button
              type="button"
              className="waves-effect waves-light btn btn-xs btn-outline btn-primary-light mx-5"
            >
              <i className="fa fa-line-chart"></i>
            </button>
          </p>
        </div>
        <div className="d-flex justify-content-between my-15">
          <p>Machine Instrument</p>
          <p>
            <strong>412</strong>
            <button
              type="button"
              className="waves-effect waves-light btn btn-xs btn-outline btn-primary-light mx-5"
            >
              <i className="fa fa-line-chart"></i>
            </button>
          </p>
        </div>
        <div className="d-flex justify-content-between mt-15">
          <p>Operation Manager</p>
          <p>
            <strong>412</strong>
            <button
              type="button"
              className="waves-effect waves-light btn btn-xs btn-outline btn-primary-light mx-5"
            >
              <i className="fa fa-line-chart"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActiveJobTable;
