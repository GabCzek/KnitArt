import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <nav className="main-nav">
            <Link to="/" className="link main-nav-logo">
                <div className="link main-nav-logo-container">
                    <span className="main-nav-logo-container-start">knit</span>
                    <span>rt</span>
                </div>
            </Link>
            <div className="main-nav-links">
                <Link to="/template" className="main-nav-link link">
                    <h2>CREATE TEMPLATE</h2>
                </Link>
                <Link to="/show-template" className="main-nav-link link">
                    <h2>CURRENT TEMPLATE</h2>
                </Link>
                <Link to="/template-gallery" className="main-nav-link link">
                    <h2>TEMPLATE GALLERY</h2>
                </Link>
                {/*<div className="main-nav-burger">*/}
                {/*    <i className="fa-solid fa-bars"></i>*/}
                {/*</div>*/}
            </div>

        </nav>
    )
}

export default Navigation;