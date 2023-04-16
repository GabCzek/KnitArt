import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <Link to="/" className="link main-nav-logo">
                <span className="main-nav-logo-start">knit</span>
                <span>rt</span>
            </Link>
            <div className="main-nav-links">
                <Link to="/template" className="main-nav-link link">
                        <h2>CREATE TEMPLATE</h2>
                </Link>
                <Link to="/template-gallery" className="main-nav-link link">
                        <h2>TEMPLATE GALLERY</h2>
                </Link>
                <Link to="/project-gallery" className="main-nav-link link">
                        <h2>PROJECT GALLERY</h2>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation