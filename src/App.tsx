import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Jobs from "./pages/Jobs/Jobs";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Applications from "./pages/Applications/Applications";

function App() {
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
    {
      name: "Analytics",
      href: "/analytics",
      icon: "icon-Chart-pie",
      paths: 2,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: "icon-Layout-grid",
      paths: 2,
    },
  ];
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/jobs">
          <Container>
            <Jobs />
          </Container>
        </Route>
        <Route path="/apps">
          <Container>
            <Applications />
          </Container>
        </Route>
        <Route path="/">
          <Container>
            <Dashboard />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
