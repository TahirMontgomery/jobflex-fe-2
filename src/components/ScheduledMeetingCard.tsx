import React from "react";

function ScheduledMeetingCard() {
  return (
    <div>
      <h4 className="box-title mb-30">Scheduled Meeting</h4>
      <div>
        <div className="d-flex align-items-center mb-30 justify-content-between">
          <div className="mr-15 text-center rounded15 box-shadowed h-50 w-50 d-table">
            <p className="mt-5 mb-0 text-warning">Thu</p>
            <p className="mb-0">8</p>
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500 min-w-p60">
            <a
              href="#"
              className="text-dark hover-primary mb-1 font-size-16 overflow-hidden text-nowrap text-overflow"
            >
              Interview
            </a>
            <span className="font-size-10 text-fade">
              <i className="fa fa-clock-o"></i> 9:00am - 11:30am{" "}
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Delete
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-30 justify-content-between">
          <div className="mr-15 text-center rounded15 box-shadowed h-50 w-50 d-table">
            <p className="mt-5 mb-0 text-warning">Fri</p>
            <p className="mb-0">10</p>
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500 min-w-p60">
            <a
              href="#"
              className="text-dark hover-primary mb-1 font-size-16 overflow-hidden text-nowrap text-overflow"
            >
              Organizational meeting
            </a>
            <span className="font-size-10 text-fade">
              <i className="fa fa-clock-o"></i> 10:00am - 10:30am{" "}
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Delete
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-30 justify-content-between">
          <div className="mr-15 text-center rounded15 box-shadowed h-50 w-50 d-table">
            <p className="mt-5 mb-0 text-warning">Mon</p>
            <p className="mb-0">17</p>
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500 min-w-p60">
            <a
              href="#"
              className="text-dark hover-primary mb-1 font-size-16 overflow-hidden text-nowrap text-overflow"
            >
              Meeting with the manager
            </a>
            <span className="font-size-10 text-fade">
              <i className="fa fa-clock-o"></i> 9:00am - 11:30am{" "}
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Delete
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-30 justify-content-between">
          <div className="mr-15 text-center rounded15 box-shadowed h-50 w-50 d-table">
            <p className="mt-5 mb-0 text-warning">Set</p>
            <p className="mb-0">18</p>
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500 min-w-p60">
            <a
              href="#"
              className="text-dark hover-primary mb-1 font-size-16 overflow-hidden text-nowrap text-overflow"
            >
              Interview
            </a>
            <span className="font-size-10 text-fade">
              <i className="fa fa-clock-o"></i> 9:00am - 11:30am{" "}
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Delete
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-20 justify-content-between">
          <div className="mr-15 text-center rounded15 box-shadowed h-50 w-50 d-table">
            <p className="mt-5 mb-0 text-warning">Fri</p>
            <p className="mb-0">22</p>
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500 min-w-p60">
            <a
              href="#"
              className="text-dark hover-primary mb-1 font-size-16 overflow-hidden text-nowrap text-overflow"
            >
              Organizational meeting
            </a>
            <span className="font-size-10 text-fade">
              <i className="fa fa-clock-o"></i> 10:00am - 10:30am{" "}
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledMeetingCard;
