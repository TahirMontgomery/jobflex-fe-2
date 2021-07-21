import React from "react";
import Chart from "react-apexcharts";

function JobDetails() {
  var options = {
    series: [
      {
        name: "Clicks",
        data: [3, 15, 12, 27, 40, 17, 8],
      },
    ],
    chart: {
      height: 200,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#ac5dd9"],
    grid: {
      show: true,
    },

    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Set", "Sun"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: true,
      },
    },
  };
  return (
    <>
      <div className="content-header">
        <div className="d-md-flex align-items-center justify-content-between">
          <div>
            <a
              href="jobs-details.html"
              className="waves-effect waves-light btn active btn-outline btn-primary"
            >
              Jobs
            </a>
            <a
              href="candidates.html"
              className="waves-effect waves-light btn btn-outline btn-primary mx-lg-10"
            >
              Candidates
            </a>
            <a
              href="mailbox.html"
              className="waves-effect waves-light btn btn-outline btn-primary"
            >
              Messages
            </a>
          </div>
          <a
            href="#"
            className="waves-effect waves-light btn btn-danger mt-10 mt-md-0"
          >
            Post A Jobs
          </a>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8 col-12">
          <div className="box">
            <div className="box-body">
              <a href="#" className="mb-15 d-block">
                <i className="fa fa-angle-left"></i> Back to all jobs
              </a>
              <div className="d-md-flex justify-content-between align-items-center">
                <div>
                  <h4 className="mb-0">Web Developer</h4>
                  <p className="text-fade">Globel Inc. - Miami, Florida</p>
                </div>
                <a
                  href="#"
                  className="waves-effect waves-light btn btn-outline btn-success mt-10 mt-md-0"
                >
                  Sponsor this job
                </a>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <h4>Clicks</h4>
                </div>
                <div className="col-xl-8 col-12">
                  <Chart
                    height={200}
                    options={options}
                    series={options.series}
                  />
                </div>
                <div className="col-xl-4 col-12">
                  <div>
                    <h5>
                      Click This Week{" "}
                      <i className="fa fa-info-circle text-primary"></i>
                    </h5>
                    <h1>122</h1>
                    <a
                      href="#"
                      className="mt-20 waves-effect waves-light btn btn-block btn-outline btn-primary"
                    >
                      Sponsor Job for More Clicks
                    </a>
                    <a
                      href="#"
                      className="mt-5 waves-effect waves-light btn btn-block btn-outline btn-warning"
                    >
                      Improve Job Description
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <h4>Candidates</h4>
                </div>
                <div className="col-md-6 col-12">
                  <div className="text-center b-1 p-30">
                    <h6 className="mt-0">Awaiting Review</h6>
                    <h1 className="mb-0">41</h1>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="text-center b-1 p-30">
                    <h6 className="mt-0">Total (Excluding Rejected)</h6>
                    <h1 className="mb-0">51</h1>
                  </div>
                </div>
                <div className="col-12 text-right">
                  <p className="text-fade mt-15">0 Rejected</p>
                </div>
                <div className="col-12">
                  <div className="bg-primary-light p-15">
                    <div className="d-md-flex justify-content-between align-items-center">
                      <div>
                        <i className="fa fa-info font-size-24 mb-10"></i>
                        <h4>
                          Discover your top applicants faster by sending a free
                          assessment
                        </h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.{" "}
                        </p>
                      </div>
                      <a
                        href="#"
                        className="mt-md-0 mt-10 waves-effect waves-light btn btn-primary nowrap d-table"
                      >
                        Choose Assessment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <h4>Job Description</h4>
                  <ul>
                    <li>Perform day to day tasks. </li>
                    <li>Office daily work. </li>
                    <li>Maintain records of the office.</li>
                    <li>Other office activity </li>
                    <li>Manage Client </li>
                  </ul>
                  <p>Expected Stan Date: 23/11/2020 </p>
                  <p>Job Types: Full-time, Fresher </p>
                  <p>Salary: From $8,000.00 per month</p>
                  <h5 className="font-weight-500">Speak with the employer</h5>
                  <p>+1 123 456 7890 </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <h4 className="mb-25">Application Questions </h4>

                  <h4>
                    You have requested that Indeed ask candidates the following
                    questions:
                  </h4>
                  <ul>
                    <li>
                      What is the highest level of education you have completed?{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="box">
            <div className="box-body">
              <a
                href="#"
                className="waves-effect waves-light btn btn-block btn-primary mb-15"
              >
                Edit Job
              </a>
              <div className="media-list media-list-hover media-list-divided">
                <a className="media media-single rounded-0" href="#">
                  <span className="title mx-0">Close Job </span>
                  <span className="badge badge-pill badge-secondary-light mx-0">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </a>
                <a className="media media-single rounded-0" href="#">
                  <span className="title mx-0">View Cost & Performance </span>
                  <span className="badge badge-pill badge-secondary-light mx-0">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </a>
                <a className="media media-single rounded-0" href="#">
                  <span className="title mx-0">
                    Find Candidates for this Job
                  </span>
                  <span className="badge badge-pill badge-secondary-light mx-0">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </a>
              </div>
              <a
                href="#"
                className="waves-effect waves-light btn btn-block btn-outline btn-success my-15"
              >
                Add Candidate
              </a>
              <div>
                <p>
                  <strong>Views:</strong> 251
                </p>
                <p className="text-primary">
                  <strong>Candidates:</strong> 251
                </p>
                <p>
                  <strong>Status:</strong> Open -{" "}
                  <span className="badge badge-primary-light">Pause</span>
                </p>
                <p>
                  <strong>Created:</strong> 18-Nov
                </p>
              </div>
              <a
                href="#"
                className="waves-effect waves-light btn btn-block btn-outline btn-danger my-15"
              >
                View Public job page
              </a>
              <p className="text-fade">Promote this job for more candidates:</p>
              <a
                href="#"
                className="p-5 bg-facebook text-white d-inline-block mb-10 rounded"
              >
                <i className="fa fa-facebook-f"></i> Share 0
              </a>
              <a
                href="#"
                className="p-5 bg-twitter text-white d-inline-block mb-10 rounded"
              >
                <i className="fa fa-twitter"></i> Tweet
              </a>
              <a
                href="#"
                className="p-5 bg-linkedin text-white d-inline-block mb-10 rounded"
              >
                <i className="fa fa-linkedin-square"></i> Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
