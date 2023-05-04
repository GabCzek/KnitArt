import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Dashboard = ({ windowWidth }) => {
  const height = windowWidth >= 820 ? "100vh" : "auto";

  return (
    <div className="container-dashboard" style={{ height: height }}>
      <div className="main-container-dashboard">
        <Navigation windowWidth={windowWidth} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
