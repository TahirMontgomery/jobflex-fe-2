import React from "react";
import ReactApexChart from "react-apexcharts";

interface JobTypeProps {
  title: string;
  amount: Number;
}
interface ActiveJobTableProps {
  chart: ReactApexChart;
  jobs: Array<JobTypeProps>;
}
function ActiveJobTable({ chart, jobs }: ActiveJobTableProps) {
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
      <div className="box-body">{chart}</div>
      <div className="box-body">
        <div className="bb-1 d-flex justify-content-between">
          <h5>Job title</h5>
          <h5>Applications</h5>
        </div>
        {jobs.map((job, index) => {
          return (
            <div key={index} className="d-flex justify-content-between my-15">
              <p>{job.title}</p>
              <p>
                <strong>{job.amount}</strong>
                <button
                  type="button"
                  className="waves-effect waves-light btn btn-xs btn-outline btn-primary-light mx-5"
                >
                  <i className="fa fa-line-chart"></i>
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActiveJobTable;
