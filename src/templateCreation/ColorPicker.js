import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ changeColor, defaultColor, windowWidth }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [right, setRight] = useState("250px")
  const [color, setColor] = useState({
    r: defaultColor.r,
    g: defaultColor.g,
    b: defaultColor.b,
    a: defaultColor.a,
  });

  const handleColorChange = (color) => {
    setColor(color.rgb);
    changeColor(color.rgb);
  };
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  useEffect(() => {
    setRight(windowWidth < 1440 ? 250 : ((windowWidth - 1440) / 2 + 250))
  }, [windowWidth])

  return (
    <div>
      <div className="template-color-picker" onClick={handleClick}>
        <div
          style={{background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}}
          className="template-color-picker-color"
        />
      </div>
      {displayColorPicker ? (
        <div
          className="template-color-picker-position"
          style={{ right: `${right}px`}}
        >
          <div className="template-color-picker-popover">
            <div
              onClick={handleClose}
              className="template-color-picker-cover"
            />
            <ChromePicker
              color={color}
              disableAlpha={true}
              onChange={handleColorChange}
              className="template-color-picker-chromePicker"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
