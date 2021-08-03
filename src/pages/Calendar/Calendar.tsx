import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./styles.css";
function Calendar() {
  return (
    <div className="row">
      <div className="col-md-12">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
    </div>
  );
}

export default Calendar;
