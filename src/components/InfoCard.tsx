import React from "react";

function InfoCard({ icon }) {
  return (
    <div className="box">
      <div className="box-body py-0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="text-fade">Applications</h5>
            <h2 className="font-weight-500 mb-0">132.0K</h2>
          </div>
          <div>
            <div id={icon}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
