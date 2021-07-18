import React from "react";

function TotalApplicationsCard() {
  return (
    <div className="box">
      <div className="box-header">
        <h4 className="box-title">Total Applications</h4>
      </div>
      <div className="box-body">
        <div className="d-flex w-p100 rounded100 overflow-hidden">
          <div className="bg-danger h-10" style={{ width: "8%" }}></div>
          <div className="bg-warning h-10" style={{ width: "12%" }}></div>
          <div className="bg-success h-10" style={{ width: "22%" }}></div>
          <div className="bg-info h-10" style={{ width: "58%" }}></div>
        </div>
      </div>
      <div className="box-body p-0">
        <div className="media-list media-list-hover media-list-divided">
          <a className="media media-single rounded-0" href="#">
            <span className="badge badge-xl badge-dot badge-info"></span>
            <span className="title">Applications </span>
            <span className="badge badge-pill badge-info-light">58%</span>
          </a>

          <a className="media media-single rounded-0" href="#">
            <span className="badge badge-xl badge-dot badge-success"></span>
            <span className="title">Shortlisted</span>
            <span className="badge badge-pill badge-success-light">22%</span>
          </a>

          <a className="media media-single rounded-0" href="#">
            <span className="badge badge-xl badge-dot badge-warning"></span>
            <span className="title">On-Hold</span>
            <span className="badge badge-pill badge-warning-light">12%</span>
          </a>

          <a className="media media-single rounded-0" href="#">
            <span className="badge badge-xl badge-dot badge-danger"></span>
            <span className="title">Rejected</span>
            <span className="badge badge-pill badge-danger-light">08%</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TotalApplicationsCard;
