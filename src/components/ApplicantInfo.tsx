import React from "react";

function ApplicantInfo() {
  return (
    <div className="box">
      <div className="box-header with-border d-flex">
        <h4 className="box-title mr-auto">Applicant Information</h4>
        <div className="applicant-links d-flex">
          <p className="pr-4">Job Info</p>
          <p className="pr-4">Resume</p>
          <p className="pr-4">Cover Letter</p>
        </div>
      </div>
      <div className="row px-4 pt-3">
        <div className="col-md-4 border-right">
          <h4>Tahir Montgomery</h4>
          <h5>Full Stack Software Engineer</h5>
          <hr />
          <div className="pt-5">
            <h4>Email</h4>
            <p>tahirmontgomery@gmail.com</p>
            <hr />

            <h4>Phone Number</h4>
            <p>(850) 559-7651</p>
            <hr />

            <h4>Address</h4>
            <p>123 MLK Drive</p>
            <p>Tampa, FL 33613</p>
            <hr />
          </div>
        </div>
        <div className="col-md-8">
          <h4>Tahir Montgomery</h4>
        </div>
      </div>
    </div>
  );
}

export default ApplicantInfo;
