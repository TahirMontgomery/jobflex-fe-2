import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Jobs from "./pages/Jobs/Jobs";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Applications from "./pages/Applications/Applications";
import CalendarComp from "./pages/Calendar/Calendar";
import Settings from "./pages/Settings/Settings";
import Inbox from "./pages/Inbox/Inbox";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [sidebarCollapse, setsidebarCollapse] = useState(false);

  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route path="/login">
        <Login />
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
      <Route path="/inbox">
        <Container>
          <Inbox />
        </Container>
      </Route>
      <Route path="/calendar">
        <Container>
          <CalendarComp />
        </Container>
      </Route>
      <Route path="/settings">
        <Container>
          <Settings />
        </Container>
      </Route>
      <Route path="/confirm">
        <ConfirmEmail />
      </Route>
      <Route path="/">
        {/* <PrivateRoute> */}
        <Container>
          <Dashboard />
        </Container>
        {/* </PrivateRoute> */}
      </Route>
    </Switch>
  );
}

export default App;
