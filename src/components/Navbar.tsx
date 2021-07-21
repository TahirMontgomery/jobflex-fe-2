import React from "react";
import darkLogo from "../images/logo-dark-text.png";
import lightLogo from "../images/logo-light-text.png";

interface NavbarProps {
  collapsed: boolean;
  setCollapse: (collapseState: boolean) => void;
}

function Navbar({ collapsed, setCollapse }: NavbarProps) {
  return (
    <header className="main-header">
      <div className="d-flex align-items-center logo-box justify-content-start">
        <a
          href="#"
          className="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent"
          data-toggle="push-menu"
          role="button"
          onClick={() => setCollapse(!collapsed)}
        >
          <i data-feather="menu"></i>
        </a>
        {/* <!-- Logo --> */}
        <a href="/" className="logo">
          {/* <!-- logo--> */}
          <div className="logo-lg">
            <span className="light-logo">
              <img src={darkLogo} alt="logo" />
            </span>
            <span className="dark-logo">
              <img src={lightLogo} alt="logo" />
            </span>
          </div>
        </a>
      </div>
      <nav className="navbar navbar-static-top">
        {/* <!-- Sidebar toggle button--> */}
        <div className="app-menu">
          <ul className="header-megamenu nav">
            <li className="btn-group nav-item d-md-none">
              <button
                className="waves-effect waves-light nav-link push-btn"
                data-toggle="push-menu"
              >
                <i data-feather="menu"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="navbar-custom-menu r-side">
          <ul className="nav navbar-nav">
            <li className="btn-group nav-item d-lg-flex d-none align-items-center">
              <p className="mb-0 text-fade pr-10 pt-5">
                {new Date().toLocaleDateString()}
              </p>
            </li>
            <li className="btn-group nav-item d-lg-inline-flex d-none">
              <a
                href="#"
                data-provide="fullscreen"
                className="waves-effect waves-light nav-link full-screen"
                title="Full Screen"
              >
                <i data-feather="maximize"></i>
              </a>
            </li>
            {/* <!-- Control Sidebar Toggle Button -->	 */}
            <li className="btn-group nav-item d-inline-flex">
              <a
                href="#"
                data-toggle="control-sidebar"
                className="waves-effect waves-light nav-link full-screen"
                title="Setting"
              >
                <i data-feather="settings"></i>
              </a>
            </li>
            {/* <!-- Notifications --> */}
            <li className="dropdown notifications-menu">
              <a
                href="#"
                className="waves-effect waves-light dropdown-toggle"
                data-toggle="dropdown"
                title="Notifications"
              >
                <i data-feather="bell"></i>
              </a>
              <ul className="dropdown-menu animated bounceIn">
                <li className="header">
                  <div className="p-20">
                    <div className="flexbox">
                      <div>
                        <h4 className="mb-0 mt-0">Notifications</h4>
                      </div>
                      <div>
                        <a href="#" className="text-danger">
                          Clear All
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  {/* <!-- inner menu: contains the actual data --> */}
                  <ul className="menu sm-scrol">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-info"></i> Curabitur id
                        eros quis nunc suscipit blandit.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-warning text-warning"></i> Duis
                        malesuada justo eu sapien elementum, in semper diam
                        posuere.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-danger"></i> Donec at
                        nisi sit amet tortor commodo porttitor pretium a erat.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart text-success"></i> In
                        gravida mauris et nisi
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-danger"></i> Praesent eu
                        lacus in libero dictum fermentum.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-primary"></i> Nunc
                        fringilla lorem
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-success"></i> Nullam
                        euismod dolor ut quam interdum, at scelerisque ipsum
                        imperdiet.
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li>
            {/* <!-- User Account--> */}
            <li className="dropdown user user-menu">
              <a
                href="#"
                className="waves-effect waves-light dropdown-toggle"
                data-toggle="dropdown"
                title="User"
              >
                <i className="icon-User">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </a>
              <ul className="dropdown-menu animated flipInX">
                <li className="user-body">
                  <a className="dropdown-item" href="#">
                    <i className="ti-user text-muted mr-2"></i> Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="ti-wallet text-muted mr-2"></i> My Wallet
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="ti-settings text-muted mr-2"></i> Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="ti-lock text-muted mr-2"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
