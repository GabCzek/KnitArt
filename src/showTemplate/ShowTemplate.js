import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ShowTemplateDisplay from "./ShowTemplateDisplay";
import ShowTemplateInfo from "./ShowTemplateInfo";

function ShowTemplate({ templates, windowWidth, handleShow }) {
  const { id } = useParams();
  const [height, setHeight] = useState("94%");

  const template =
    id === undefined
      ? templates[2]
      : templates.find((obj) => {
          return obj.id === id;
        });


  const filterArray =
    templates.length > 0 &&
    template.grid.filter((el) => {
      let numberOfStitches = templates.length > 0 && template.stitches;
      let highestIdNumber =
        templates.length > 0 && template.stitches * template.rows;
      return (
        el.id < highestIdNumber && el.id >= highestIdNumber - numberOfStitches
      );
    });

  const [currentRow, setCurrentRow] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    templates.length > 0 && setCurrentRow(filterArray);
  }, [templates, id]);

  const handleArrowUp = () => {
    setCounter((prev) => prev + 1);
  };
  const handleArrowDown = () => {
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    if (windowWidth < 820) {
        setHeight("30em");
    }
  }, [windowWidth]);

  return (
    <div className="container mediaContainer" style={{ height: height }} id={"show-template"}>
      {windowWidth < 820 && (
        <div className="showTemplate-info-title">
          <h2>Current template</h2>
        </div>
      )}
      {templates.length > 0 && (
        <div className={`main-container showTemplate-main-container`}>
          <ShowTemplateInfo
            name={template.name}
            counter={counter + 1}
            currentRow={currentRow}
            rows={template.rows}
            templatesLength={templates.length}
            stitches={template.stitches}
            windowWidth={windowWidth}
            grid={template.grid}
            className="showTemplate-info-container"
            handleShow={handleShow}
          />
          <ShowTemplateDisplay
            stitches={template.stitches}
            currentRow={currentRow}
            rows={template.rows}
            templatesLength={templates.length}
            handleArrowUp={handleArrowUp}
            handleArrowDown={handleArrowDown}
            counter={counter}
            grid={template.grid}
            windowWidth={windowWidth}
            className="showTemplate-display"
            id={ id}
          />
        </div>
      )}
    </div>
  );
}

export default ShowTemplate;
