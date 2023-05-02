import React from "react";
import { Link } from "react-router-dom";

import GalleryTemplateGrid from "./GalleryTemplateGrid";
import GalleryTemplateInfo from "./GalleryTemplateInfo";

const SingleGalleryTemplate = ({
  color1,
  colorId,
  color2,
  gridColor,
  className,
  template,
  windowWidth,
  templates,
  handleClick
}) => {
  const color = colorId % 2 === 0 ? color1 : color2;

  const handleClickShowTemplate = () => {
    handleClick();
    document.getElementById("show-template").scrollIntoView();
  };

  return (
    <section style={{ backgroundColor: color }} className={className}>
      <div className="gallery-template-el">
        {windowWidth >= 820 ? (
          <Link
            to={`/show-template/${template.id}`}
            className="link gallery-template-link"
          >
            <GalleryTemplateGrid
              gridColor={gridColor}
              template={template}
              templates={templates}
            />
          </Link>
        ) : (
                      <Link to={`/${template.id}`} className="link gallery-template-link" onClick={handleClickShowTemplate}>
            <GalleryTemplateGrid
              gridColor={gridColor}
              template={template}
              templates={templates}
            />
          </Link>
        )}
      </div>
      <GalleryTemplateInfo
        color={color}
        template={template}
        templates={templates}
        windowWidth={ windowWidth}
      />
    </section>
  );
};

export default SingleGalleryTemplate;
