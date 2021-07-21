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
import Chart from "react-apexcharts";

function Dashboard() {
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

  let activeJobs = [
    {
      title: "Project Manager",
      amount: 100,
    },
    {
      title: "Project Manager",
      amount: 100,
    },
    {
      title: "Project Manager",
      amount: 100,
    },
    {
      title: "Project Manager",
      amount: 100,
    },
  ];

  let options = {
    chart: {
      height: 150,
      width: 150,
      type: "radialBar",
    },
    series: [60],
    colors: ["#673ab7"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
        },
        track: {
          background: "#e7daff",
        },

        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            offsetY: 5,
            color: "#111",
            fontSize: "20px",
            show: true,
          },
        },
      },
    },

    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  // var options = {
  //   chart: {
  // 	height: 150,
  // 	width: 150,
  // 	type: "radialBar"
  //   },

  //   series: [50],
  // 	colors: ['#3da643'],
  //   plotOptions: {
  // 	radialBar: {
  // 	  hollow: {
  // 		margin: 0,
  // 		size: "60%"
  // 	  },
  // 	  track: {
  // 		background: '#e9f5ea',
  // 	  },

  // 	  dataLabels: {
  // 		showOn: "always",
  // 		name: {
  // 		  show: false,
  // 		},
  // 		value: {
  // 		  offsetY: 5,
  // 		  color: "#111",
  // 		  fontSize: "20px",
  // 		  show: true
  // 		}
  // 	  }
  // 	}
  //   },

  //   stroke: {
  // 	lineCap: "round",
  //   },
  //   labels: ["Progress"]
  // };

  // var chart = new ApexCharts(document.querySelector("#revenue2"), options);

  // chart.render();

  // var options = {
  //   chart: {
  // 	height: 150,
  // 	width: 150,
  // 	type: "radialBar"
  //   },

  //   series: [34],
  // 	colors: ['#fdac42'],
  //   plotOptions: {
  // 	radialBar: {
  // 	  hollow: {
  // 		margin: 0,
  // 		size: "60%"
  // 	  },
  // 	  track: {
  // 		background: '#fde5ba',
  // 	  },

  // 	  dataLabels: {
  // 		showOn: "always",
  // 		name: {
  // 		  show: false,
  // 		},
  // 		value: {
  // 		  offsetY: 5,
  // 		  color: "#111",
  // 		  fontSize: "20px",
  // 		  show: true
  // 		}
  // 	  }
  // 	}
  //   },

  //   stroke: {
  // 	lineCap: "round",
  //   },
  //   labels: ["Progress"]
  // };

  // var chart = new ApexCharts(document.querySelector("#revenue3"), options);

  // chart.render();

  var options2 = {
    series: [
      {
        name: "Applications",
        data: [15, 22, 35, 49, 50, 12, 28, 20, 33, 39, 85, 98],
      },
      {
        name: "Shortlisted",
        data: [5, 15, 25, 30, 25, 8, 18, 21, 32, 39, 62, 72],
      },
    ],
    chart: {
      height: 355,
      type: "bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#673ab7", "#3da643"],
    grid: {
      show: true,
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        endingShape: "rounded",
      },
    },

    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },

    yaxis: {
      labels: {
        show: true,
      },
    },
  };

  return (
    // Add sidebar-collapse on click
    <div className="row">
      <div className="col-xl-9 col-12">
        <div className="row">
          <div className="col-lg-4 col-12">
            <InfoCard
              amount={"100k"}
              text={"Applications"}
              icon={
                <Chart
                  options={options}
                  type="radialBar"
                  series={options.series}
                />
              }
            />
          </div>
          <div className="col-lg-4 col-12">
            <InfoCard
              amount={"100k"}
              text={"Rejected"}
              icon={
                <Chart
                  options={options}
                  type="radialBar"
                  series={options.series}
                />
              }
            />
          </div>
          <div className="col-lg-4 col-12">
            <InfoCard
              amount={"100k"}
              text={"Interviewed"}
              icon={
                <Chart
                  options={options}
                  type="radialBar"
                  series={options.series}
                />
              }
            />
          </div>
          <div className="col-xxxl-8 col-xl-7 col-12">
            <ActiveJobTable
              chart={
                <Chart series={options2.series} type="bar" options={options2} />
              }
              jobs={activeJobs}
            />
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
                <div id="calendar" className="dask evt-cal min-h-350"></div>
              </div>
            </div>

            <ScheduledMeetingCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
