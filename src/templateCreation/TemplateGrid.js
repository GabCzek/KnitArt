import React, { useState, useEffect } from "react";

const TemplateGrid = ({ columns, rows, activeColor, primaryColor, handleGridChange}) => {
  const elementSize = rows >= 20 || columns >= 20 ? "1.5em" : "2em";
  const [template, setTemplate] = useState([]);

  const handleClick = (id) => {
    const tempTemplate = [...template];
    tempTemplate[id].color = activeColor;
    setTemplate(tempTemplate);
  };

  useEffect(() => {
    const newTemplate = [...Array(rows * columns)].map((el, i) => ({
      id: i,
      color: primaryColor,
    }));
    setTemplate(newTemplate);
    handleGridChange(newTemplate);
  }, [columns, rows, primaryColor]);

  return (
    <div
      className="template-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, ${elementSize})`,
      }}
    >
      {template.length > 0 &&
        template.map((el, i) => {
          return (
            <div
              key={el.id}
              className="template-grid-item"
              onClick={() => handleClick(el.id)}
              style={{
                backgroundColor: el.color,
                height: elementSize,
              }}
            />
          );
        })}
    </div>
  );
};

export default TemplateGrid;
