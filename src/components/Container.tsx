import React, { useState } from "react";
import ControlSidebar from "./ControlSidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Container({ children }) {
  const [sidebarCollapse, setsidebarCollapse] = useState(false);
  const links = [
    {
      name: "Dashboard",
      href: "/",
      icon: "icon-Layout-4-blocks",
      paths: 2,
    },
    {
      name: "Jobs",
      href: "/jobs",
      icon: "icon-Briefcase",
      paths: 2,
    },
    {
      name: "Applications",
      href: "/apps",
      icon: "icon-File",
      paths: 3,
    },
    {
      name: "Inbox",
      href: "/inbox",
      icon: "icon-Chat",
      paths: 2,
    },
    {
      name: "Calendar",
      href: "/calendar",
      icon: "icon-Layout-top-panel-1",
      paths: 2,
    },
    // {
    //   name: "Analytics",
    //   href: "/analytics",
    //   icon: "icon-Chart-pie",
    //   paths: 2,
    // },
    {
      name: "Settings",
      href: "/settings",
      icon: "icon-Layout-grid",
      paths: 2,
    },
  ];
  return (
    <div
      className={`light-skin sidebar-mini theme-primary ${
        sidebarCollapse && "sidebar-collapse"
      }`}
    >
      <div className="wrapper">
        <Navbar collapsed={sidebarCollapse} setCollapse={setsidebarCollapse} />
        <Sidebar
          avatarImg="https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg"
          username="Elon Musk"
          links={links}
        />
        <div className="content-wrapper">
          <div className="container-full">
            <section className="content">{children}</section>
          </div>
        </div>
        <Footer />
        <ControlSidebar />
      </div>
    </div>
  );
}

export default Container;
