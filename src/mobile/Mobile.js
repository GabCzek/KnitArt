import React, { useState, useEffect } from "react";
import Template from "../templateCreation/CreateTemplate";
import ShowTemplate from "../showTemplate/ShowTemplate";
import TemplateGallery from "../templateGallery/TemplateGallery";

const Mobile = ({
  templates,
  windowWidth,
  height,
  handleIsOpenShowTemplate,
  handleIsOpenTemplate,
  handleIsOpenTemplateGallery,
  handleShowTemplateGallery,
  showTemplateGallery,
}) => {
  return (
    <div className="mobile" style={{ height: height }}>
      <div className="mobile-content">
        <Template
          windowWidth={windowWidth}
          handleIsOpenTemplate={handleIsOpenTemplate}
        />
        <ShowTemplate
          templates={templates}
          windowWidth={windowWidth}
          handleIsOpenShowTemplate={handleIsOpenShowTemplate}
        />

        <TemplateGallery
          templates={templates}
          windowWidth={windowWidth}
          handleIsOpenTemplateGallery={handleIsOpenTemplateGallery}
          handleShowTemplateGallery={handleShowTemplateGallery}
          showTemplateGallery={showTemplateGallery}
        />
      </div>
    </div>
  );
};

export default Mobile;
