import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="home-content">
          <div className="home-img"></div>
          <div className="home-links">
            <div className="home-link">
                <h1>Create your own knitting template, store your templates in the gallery and start knitting</h1>
            </div>
            <div className="secondary-links">
              <Link
                to="/template"
                className="link secondary-link secondary-link-right"
              >
                <h2>Create your template</h2>
                <button>
                <div className="secondary-link-arrow-img"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
