import React, { useState, useEffect } from "react";
import Template from "../templateCreation/CreateTemplate";
import ShowTemplate from "../showTemplate/ShowTemplate";
import TemplateGallery from "../templateGallery/TemplateGallery";

const Mobile = ({
  templates,
  windowWidth,
  height,
  show,
  handleClick,
  handleShow
}) => {


  return (
    <div className="mobile" style={{ height: height }}>
      <div className="mobile-content">
        <Template
          windowWidth={windowWidth}
          handleShow={ handleShow}
        />
    
        <ShowTemplate
          templates={templates}
          windowWidth={windowWidth}
          handleClick={handleClick}
          handleShow={ handleShow}
        />
        <TemplateGallery
          templates={templates}
          windowWidth={windowWidth}
          handleClick={handleClick}
          show={show}
          handleShow={ handleShow}
        />
      </div>
    </div>
  );
};

export default Mobile;
