import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Navigation = ({ windowWidth }) => {
  const { id } = useParams();

  return (
    <nav className="main-nav">
      <Link to="/" className="link main-nav-logo">
        {windowWidth >= 820 ? (
          <div className="link main-nav-logo-container">
            <span className="main-nav-logo-container-start">knit</span>
            <span>rt</span>
          </div>
        ) : (
          <div
            className="link main-nav-logo-container"
            onClick={() => window.location.reload(false)}
          >
            <span className="main-nav-logo-container-start">knit</span>
            <span>rt</span>
          </div>
        )}
      </Link>
      <div className="main-nav-links">
        <Link to="/template" className="main-nav-link link">
          <h2>CREATE TEMPLATE</h2>
        </Link>
        {id === undefined ? (
          <Link to="/show-template" className="main-nav-link link">
            <h2>START KNITTING</h2>
          </Link>
        ) : (
          <Link to={`/show-template/${id}`} className="main-nav-link link">
            <h2>START KNITTING</h2>
          </Link>
        )}
        <Link to="/template-gallery" className="main-nav-link link">
          <h2>TEMPLATE GALLERY</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
