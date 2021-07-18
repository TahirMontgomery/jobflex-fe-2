import React from "react";

function NewApplicationCard() {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h4 className="box-title">New Applications</h4>
      </div>
      <div className="box-body">
        <div className="d-flex align-items-center mb-30">
          <div className="mr-15">
            <img
              src="../images/avatar/avatar-1.png"
              className="avatar avatar-lg rounded100 bg-primary-light"
              alt=""
            />
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500">
            <a href="#" className="text-dark hover-primary mb-1 font-size-16">
              Sophia Doe
            </a>
            <span className="font-size-12">
              <span className="text-fade">Applied htmlFor</span> Advertising
              Intern
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item flexbox" href="#">
                <span>Inbox</span>
                <span className="badge badge-pill badge-info">5</span>
              </a>
              <a className="dropdown-item" href="#">
                Sent
              </a>
              <a className="dropdown-item" href="#">
                Spam
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item flexbox" href="#">
                <span>Draft</span>
                <span className="badge badge-pill badge-default">1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-30">
          <div className="mr-15">
            <img
              src="../images/avatar/avatar-10.png"
              className="avatar avatar-lg rounded100 bg-primary-light"
              alt=""
            />
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500">
            <a href="#" className="text-dark hover-danger mb-1 font-size-16">
              Mason Clark
            </a>
            <span className="font-size-12">
              <span className="text-fade">Applied htmlFor</span> Project
              Coordinator
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item flexbox" href="#">
                <span>Inbox</span>
                <span className="badge badge-pill badge-info">5</span>
              </a>
              <a className="dropdown-item" href="#">
                Sent
              </a>
              <a className="dropdown-item" href="#">
                Spam
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item flexbox" href="#">
                <span>Draft</span>
                <span className="badge badge-pill badge-default">1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-30">
          <div className="mr-15">
            <img
              src="../images/avatar/avatar-11.png"
              className="avatar avatar-lg rounded100 bg-primary-light"
              alt=""
            />
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500">
            <a href="#" className="text-dark hover-success mb-1 font-size-16">
              Emily Paton
            </a>
            <span className="font-size-12">
              <span className="text-fade">Applied htmlFor</span> Layout Expert
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item flexbox" href="#">
                <span>Inbox</span>
                <span className="badge badge-pill badge-info">5</span>
              </a>
              <a className="dropdown-item" href="#">
                Sent
              </a>
              <a className="dropdown-item" href="#">
                Spam
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item flexbox" href="#">
                <span>Draft</span>
                <span className="badge badge-pill badge-default">1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="mr-15">
            <img
              src="../images/avatar/avatar-12.png"
              className="avatar avatar-lg rounded100 bg-primary-light"
              alt=""
            />
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-500">
            <a href="#" className="text-dark hover-info mb-1 font-size-16">
              Daniel Breth
            </a>
            <span className="font-size-12">
              <span className="text-fade">Applied htmlFor</span> Interior
              Architect
            </span>
          </div>
          <div className="dropdown">
            <a className="px-10 pt-5" href="#" data-toggle="dropdown">
              <i className="ti-more-alt"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item flexbox" href="#">
                <span>Inbox</span>
                <span className="badge badge-pill badge-info">5</span>
              </a>
              <a className="dropdown-item" href="#">
                Sent
              </a>
              <a className="dropdown-item" href="#">
                Spam
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item flexbox" href="#">
                <span>Draft</span>
                <span className="badge badge-pill badge-default">1</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewApplicationCard;
