import React from "react";
import '../scss/elements/main.scss';
import arrow1 from "../images/arrow1.png"
import {Link} from 'react-router-dom';
const Main = () => {
    return (
        <div className="container">
            <div className="main-container">
                <div className="main-img"></div>
                <nav className="main-links">
                    <div className="main-link">
                        <Link to="/template" className="link">
                            <h1>Create your template</h1>
                            <img src={arrow1} alt="arrow right" className="arrow-right-main"/>
                        </Link>
                    </div>
                    <div className="secondary-links">
                        <Link to="/template-gallery" className="link secondary-link secondary-link-right">
                        <div>
                            <img src={arrow1} alt="arrow right" className="arrow-right-second"/>
                            <h2>SEE TEMPLATE GALLERY</h2>
                        </div>
                        </Link>
                        <Link to="/project-gallery" className="link secondary-link">
                        <div>
                            <img src={arrow1} alt="arrow right" className="arrow-right-second"/>
                            <h2>SEE PROJECT GALLERY</h2>
                        </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Main