import React from "react";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className="container">
            <div className="main-container">
                <div className="main-content">
                    <div className="main-img"></div>
                    <nav className="main-links">
                        <div className="main-link">
                            <Link to="/template" className="link">
                                <h1>Create your template</h1>
                            </Link>
                        </div>
                        <div className="secondary-links">
                            <Link
                                to="/template-gallery"
                                className="link secondary-link secondary-link-right"
                            >
                                <div>
                                    <h2>See template gallery</h2>
                                </div>
                            </Link>
                            <Link to="/project-gallery" className="link secondary-link">
                                <div>
                                    <h2>See project gallery</h2>
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Main;
