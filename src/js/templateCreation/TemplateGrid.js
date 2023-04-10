import React, { useState, useEffect } from "react";

const primaryColor = "#679289";
const secondaryColor = "#1d7874";
const tertiaryColor = "#852e0f";

const TemplateGrid = ({ columns, rows }) => {
  const [activeColor, setActiveColor] = useState(tertiaryColor);
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
  }, [columns, rows]);

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
