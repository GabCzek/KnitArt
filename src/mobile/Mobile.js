import React from "react";

import Template from "../templateCreation/CreateTemplate";
import StartKnitting from "../startKnitting/StartKnitting";
import TemplateGallery from "../templateGallery/TemplateGallery";

const Mobile = ({
  templates,
  windowWidth,
  show,
  handleClick,
  handleShow,
}) => {
  return (
    <div className="mobile">
      <div className="mobile-content">
        <Template windowWidth={windowWidth} handleShow={handleShow} />
        <StartKnitting
          templates={templates}
          windowWidth={windowWidth}
          handleClick={handleClick}
          handleShow={handleShow}
        />
        <TemplateGallery
          templates={templates}
          windowWidth={windowWidth}
          handleClick={handleClick}
          show={show}
          handleShow={handleShow}
        />
      </div>
    </div>
  );
};

export default Mobile;
