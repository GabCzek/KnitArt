import React, {useState} from "react";
import Navigation from "./Navigation";
import {Outlet} from "react-router-dom"

const Dashboard = ({windowWidth}) => {
    const height = windowWidth >= 820 ? "100vh" : "auto";

    return (
        <div className="container-dashboard" style={{height: height}}>
            <div className="main-container-dashboard">
                <Navigation/>
                <Outlet/>
            </div>
        </div>

    )

}

export default Dashboard;