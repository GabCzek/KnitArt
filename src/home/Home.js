import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="main-container">
                <div className="home-content">
                    <div className="home-img"></div>
                    <nav className="home-links">
                        <div className="home-link">
                            <Link to="/template" className="link">
                                <h1>Create your template</h1>
                                <i className="fa-thin fa-grip-lines"></i>
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

export default Home;
