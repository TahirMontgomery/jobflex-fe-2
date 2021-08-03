import React from "react";
import ApplicantInfo from "../../components/ApplicantInfo";
import ApplicantList from "../../components/ApplicantList";

function Applications() {
  return (
    <div className="row">
      <div className="col-md-4 col-12">
        <ApplicantList />
      </div>
      <div className="col-md-8 col-12">
        <ApplicantInfo />
      </div>
    </div>
  );
}

export default Applications;
