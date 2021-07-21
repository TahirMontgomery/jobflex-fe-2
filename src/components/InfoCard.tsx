import React from "react";

interface InfoCardProps {
  icon: any;
  text: string;
  amount: string;
}

function InfoCard({ icon, text, amount }: InfoCardProps) {
  return (
    <div className="box">
      <div className="box-body py-0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="text-fade">{text}</h5>
            <h2 className="font-weight-500 mb-0">{amount}</h2>
          </div>
          <div>{icon}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
