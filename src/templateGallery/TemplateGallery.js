import React, { useEffect, useState } from "react";
import SingleGalleryTemplate from "./SingleGalleryTemplate";

const TemplateGallery = ({
  templates,
  windowWidth,
  show,
  handleClick,
  handleShow,
}) => {
  const color1 = "#F0E0D6";
  const color2 = "#1D7874";

  const [height, setHeight] = useState("94%");
  let gridColumns;

  if (windowWidth >= 1440) {
    gridColumns = 3;
  } else if (windowWidth < 1440 && windowWidth >= 900) {
    gridColumns = 2;
  } else {
    gridColumns = 1;
  }

  useEffect(() => {
    handleShow(windowWidth >= 820);
  }, [windowWidth]);

  useEffect(() => {
    show === true ? setHeight("94%") : setHeight("33%");
  }, [show]);

  return (
    <div
      className="container gallery-template-container-media"
      id="gallery-template"
      style={{ height: height }}
    >
      {windowWidth <= 820 && show === false && (
        <div className="gallery-template-title" onClick={handleClick}>
          <h2>Template gallery</h2>
        </div>
      )}
      {windowWidth <= 820 && show && (
        <div
          className="gallery-template-title"
          onClick={handleClick}
          style={{ backgroundColor: "#852e0f" }}
        >
          <h2 style={{ color: "#FFF" }}>Hide template gallery</h2>
        </div>
      )}
      {show && (
        <div
          className="main-container gallery-template-container"
          style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
        >
          {templates.map((template, i) => (
            <SingleGalleryTemplate
              key={i}
              className={`gallery-template-${i + 1} gallery-template`}
              colorId={i + 1}
              templates={templates}
              template={template}
              color1={color1}
              color2={color2}
              windowWidth={windowWidth}
              handleClick={ handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;
