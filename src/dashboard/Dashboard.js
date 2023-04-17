import React from "react";
import Navigation from "./Navigation";
import {Outlet} from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <div className="main-container-dashboard">
                <Navigation/>
                <Outlet/>
            </div>
        </div>

    )

}

export default Dashboard;