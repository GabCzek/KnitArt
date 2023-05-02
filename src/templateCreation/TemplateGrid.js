import React, { useEffect } from "react";


import TemplateIcons from "./TemplateIcons";

const TemplateGrid = ({
  columns,
  rows,
  activeColor,
  primaryColor,
  handleSubmitTemplate,
  windowWidth,
  createNewArray,
  template,
  setTemplate,
  handleShow,
  handleUpdateTemplate,
  handleClear
}) => {
  const elementSize = rows > 20 || columns > 20 ? "1.2em" : "1.4em";
  const elementSizeMobile = "0.9em";

  const handleElClick = (id) => {
    const tempTemplate = [...template];
    if (activeColor !== null) {
      tempTemplate[id].color = activeColor;
    }
    setTemplate(tempTemplate);
  };

  useEffect(() => {
    createNewArray();
  }, [columns, rows, primaryColor]);


  return (
    <>
      <div className="template-grid-container">

        <div
          className="template-grid"
          id="divToPrint"
          style={{
            gridTemplateColumns: `repeat(${columns}, ${
              windowWidth <= 820 ? elementSizeMobile : elementSize
            })`,
          }}
        >
          {template.length > 0 &&
            template.map((el, i) => {
              return (
                <div
                  key={el.id}
                  className="template-grid-item"
                  onClick={() => handleElClick(el.id)}
                  style={{
                    backgroundColor: el.color,
                    height: `${
                      windowWidth <= 820 ? elementSizeMobile : elementSize
                    }`,
                  }}
                />
              );
            })}
        </div>
      </div>
      {windowWidth <= 820 ? (
        <TemplateIcons
          handleSubmitTemplate={handleSubmitTemplate}
          createNewArray={createNewArray}
          windowWidth={windowWidth}
          handleUpdateTemplate={handleUpdateTemplate}
          handleShow={handleShow}
          handleClear={handleClear}
        />
      ) : null}
    </>
  );
};

export default TemplateGrid;
