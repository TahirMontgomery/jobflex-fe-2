import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

function JobCard() {
  let { path, url } = useRouteMatch();

  return (
    <div className="box">
      <div className="box-body">
        <div className="d-flex flex-wrap align-items-center">
          <div className="mr-25 bg-danger-light h-60 w-60 rounded text-center b-1">
            <img
              src="../images/logo/logo-1.jpg"
              className="align-self-center"
              alt=""
            />
          </div>

          <div className="d-flex flex-column flex-grow-1 my-lg-0 my-10 pr-15">
            <span className="text-fade font-weight-600 font-size-16">
              Globela Inc.
            </span>
            <a
              href="#"
              className="text-dark font-weight-600 hover-danger font-size-18"
            >
              Project Manager
            </a>
          </div>
        </div>
        <div className="mt-20">
          <h4 className="text-primary mb-20">$1,200 - $1,800</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>

          <div className="d-flex flex-column w-p100 mt-30">
            <span className="text-dark mr-10 font-size-16 font-weight-600 pb-15">
              Opening Jobs (15/20)
            </span>

            <div className="progress progress-xs w-p100">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="mt-10 d-flex justify-content-between align-items-center">
            <Link
              to={`${url}/rendering`}
              className="waves-effect waves-light btn btn-primary mb-5"
            >
              View Applications
            </Link>
            <p className="mb-0 text-fade">
              <i className="fa fa-map-marker"></i> Miami
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
