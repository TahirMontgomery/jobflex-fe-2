import React from "react";
import avatar13 from "../images/avatar/avatar-13.png";
import { useLocation, useRouteMatch, Link } from "react-router-dom";
import { Search, MessageSquare, Bell, LogOut } from "react-feather";
import { Auth } from "aws-amplify";
interface SidebarLinks {
  name: string;
  href: string;
  icon: string;
  paths: Number;
}
interface SidebarProps {
  avatarImg: HTMLImageElement | string;
  username: string;
  links: Array<SidebarLinks>;
}

function Sidebar(props: SidebarProps) {
  let path = useRouteMatch();

  function getLinks() {
    let navLinks = props.links.map((link, index) => {
      return (
        <li className={`${path.path == link.href && "active"}`} key={index}>
          <Link to={link.href}>
            <i className={link.icon}>
              {Array(link.paths)
                .fill(0)
                .map((path, index) => {
                  return (
                    <span key={index} className={`path${index + 1}`}></span>
                  );
                })}
            </i>
            <span>{link.name}</span>
          </Link>
        </li>
      );
    });
    return navLinks;
  }

  return (
    <aside
      style={{
        minHeight: "100vh",
        height: "100%",
      }}
      className="main-sidebar"
    >
      {/* <!-- sidebar--> */}
      <section className="sidebar">
        <div className="user-profile px-20 pt-15 pb-10">
          <div className="d-flex align-items-center">
            <div className="image">
              <img
                src={props.avatarImg}
                className="avatar avatar-lg bg-primary-light rounded100"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a
                className="dropdown-toggle px-20"
                data-toggle="dropdown"
                href="#"
              >
                {props.username}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  <i className="ti-user"></i> Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti-email"></i> Inbox
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti-link"></i> Connections
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="ti-settings"></i> Settings
                </a>
              </div>
            </div>
          </div>
          <ul className="list-inline profile-setting mt-20 mb-0 d-flex justify-content-between">
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Search"
              >
                <Search />
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Notification"
              >
                <Bell />
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Chat"
              >
                <MessageSquare />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => Auth.signOut()}
                data-toggle="tooltip"
                data-placement="top"
                title="Logout"
              >
                <LogOut />
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- sidebar menu--> */}
        <ul className="sidebar-menu" data-widget="tree">
          {getLinks()}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
