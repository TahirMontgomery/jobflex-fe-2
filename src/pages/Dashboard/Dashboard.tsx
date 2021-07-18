import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import InfoCard from "../../components/InfoCard";
import ActiveJobTable from "../../components/ActiveJobTable";
import TotalApplicationsCard from "../../components/TotalApplicationsCard";
import NewApplicationCard from "../../components/NewApplicationCard";
import ScheduledMeetingCard from "../../components/ScheduledMeetingCard";
import Footer from "../../components/Footer";
import ControlSidebar from "../../components/ControlSidebar";

function Dashboard() {
  const [sidebarCollapse, setsidebarCollapse] = useState(false);

  return (
    // Add sidebar-collapse on click
    <div
      className={`light-skin sidebar-mini theme-primary ${
        sidebarCollapse && "sidebar-collapse"
      }`}
    >
      <div className="wrapper">
        {/* <div id="loader"></div> */}
        <Navbar collapsed={sidebarCollapse} setCollapse={setsidebarCollapse} />

        <Sidebar />

        {/* <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
          <div className="container-full">
            {/* <!-- Main content --> */}
            <section className="content">
              <div className="row">
                <div className="col-xl-9 col-12">
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <InfoCard icon="revenue1" />
                    </div>
                    <div className="col-lg-4 col-12">
                      <InfoCard icon="revenue2" />
                    </div>
                    <div className="col-lg-4 col-12">
                      <InfoCard icon="revenue3" />
                    </div>
                    <div className="col-xxxl-8 col-xl-7 col-12">
                      <ActiveJobTable />
                    </div>
                    <div className="col-xxxl-4 col-xl-5 col-12">
                      <TotalApplicationsCard />
                      <NewApplicationCard />
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-12">
                  <div className="box">
                    <div className="box-body">
                      <div className="box no-shadow">
                        <div className="box-body px-0 pt-0">
                          <div
                            id="calendar"
                            className="dask evt-cal min-h-350"
                          ></div>
                        </div>
                      </div>

                      <ScheduledMeetingCard />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
        <ControlSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
