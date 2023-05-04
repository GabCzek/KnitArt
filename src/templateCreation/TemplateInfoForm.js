import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import ColorPicker from "./ColorPicker";

const TemplateInfoForm = ({
  rows,
  columns,
  name,
  changeName,
  changePrimaryColor,
  changeSecondaryColor,
  changeTertiaryColor,
  changeActiveColor,
  changeRows,
  changeColumns,
  windowWidth,
  primaryColor,
  secondaryColor,
  tertiaryColor,
}) => {
  const [checked, setChecked] = useState(["secondaryColor"]);

  const primaryColorEdit =
    primaryColor !== false &&
    primaryColor !== undefined &&
    primaryColor.substr(5, 20).replace(")", "").split(", ");
  const primaryColorEditDiv = primaryColor !== false && {
    r: primaryColorEdit[0],
    g: primaryColorEdit[1],
    b: primaryColorEdit[2],
    a: 1,
  };

  const secondaryColorEdit =
    secondaryColor !== false &&
    secondaryColor !== undefined &&
    secondaryColor.substr(5, 20).replace(")", "").split(", ");
  const secondaryColorEditDiv = secondaryColor !== false && {
    r: secondaryColorEdit[0],
    g: secondaryColorEdit[1],
    b: secondaryColorEdit[2],
    a: 1,
  };

  const tertiaryColorEdit =
    tertiaryColor !== false &&
    tertiaryColor !== undefined &&
    tertiaryColor.substr(5, 20).replace(")", "").split(", ");
  const tertiaryColorEditDiv = tertiaryColor !== false && {
    r: tertiaryColorEdit[0],
    g: tertiaryColorEdit[1],
    b: tertiaryColorEdit[2],
    a: 1,
  };

  const defaultPrimaryColor = {
    r: "103",
    g: "146",
    b: "137",
    a: "1",
  };

  const defaultSecondaryColor = {
    r: "29",
    g: "120",
    b: "116",
    a: "1",
  };

  const defaultTertiaryColor = {
    r: "134",
    g: "46",
    b: "15",
    a: "1",
  };
  const handleRowsChange = ({ target: { value } }) => {
    changeRows(value);
  };

  const handleColumnsChange = ({ target: { value } }) => {
    changeColumns(value);
  };

  const handleCheckboxChange = ({ target: { name } }) => {
    setChecked((prev) => [[...prev], name]);
    changeActiveColor(name);
  };

  const handleNameChange = ({ target: { value } }) => {
    changeName(value);
  };

  return (
    <form className="template-info-form">
      <div className="template-info-form-labels">
        <label className="template-info-form-label">
          <span>Name:</span>
          <input
            onChange={handleNameChange}
            value={name}
            type="text"
            className="template-info-form-label-name"
          />
        </label>
        <label className="template-info-form-label">
          {windowWidth >= 820 ? (
            <span>Number of rows (1-80):</span>
          ) : (
            <span>Rows (1-80):</span>
          )}
          <input
            data-tooltip-id="numberOfRows"
            data-tooltip-content="Change will delete your current design"
            onChange={handleRowsChange}
            value={rows}
            type="number"
            min="1"
            max="80"
            className="template-info-form-label-number"
          />
          <Tooltip id="numberOfRows" />
        </label>
        <label className="template-info-form-label">
          {windowWidth >= 820 ? (
            <span>Number of stitches (1-80):</span>
          ) : (
            <span>Stitches (1-80):</span>
          )}
          <input
            data-tooltip-id="numberOfStitches"
            data-tooltip-content="Change will delete your current design"
            onChange={handleColumnsChange}
            value={columns}
            type="number"
            min="1"
            max="80"
            className="template-info-form-label-number"
          />
          <Tooltip id="numberOfStitches" />
        </label>
      </div>
      <div className="template-info-form-colors">
        <label style={{ display: "none" }} />
        <label className="template-info-form-label">
          {windowWidth >= 820 ? (
            <span>Choose main color:</span>
          ) : (
            <span>Main color:</span>
          )}
          <div
            className="template-info-form-color"
            data-tooltip-id="primaryColorChange"
            data-tooltip-content="Change will delete your current design"
          >
            <ColorPicker
              changeColor={changePrimaryColor}
              windowWidth={windowWidth}
              defaultColor={
                primaryColor !== undefined && primaryColor !== false
                  ? primaryColorEditDiv
                  : defaultPrimaryColor
              }
            />
            <Tooltip id="primaryColorChange" />
            <input
              type="checkbox"
              name="primaryColor"
              onChange={handleCheckboxChange}
              className="template-info-form-label-checkbox"
              checked={checked.includes("primaryColor")}
            />
          </div>
        </label>
        <label className="template-info-form-label">
          {windowWidth >= 820 ? (
            <span>Choose second color:</span>
          ) : (
            <span>2nd color:</span>
          )}
          <div className="template-info-form-color">
            <ColorPicker
              changeColor={changeSecondaryColor}
              windowWidth={windowWidth}
              defaultColor={
                secondaryColor !== undefined && secondaryColor !== false
                  ? secondaryColorEditDiv
                  : defaultSecondaryColor
              }
            />
            <input
              type="checkbox"
              name="secondaryColor"
              onChange={handleCheckboxChange}
              className="template-info-form-label-checkbox"
              checked={checked.includes("secondaryColor")}
            />
          </div>
        </label>
        <label className="template-info-form-label">
          {windowWidth >= 820 ? (
            <span>Choose third color:</span>
          ) : (
            <span>3rd color:</span>
          )}
          <div className="template-info-form-color">
            <ColorPicker
              changeColor={changeTertiaryColor}
              windowWidth={windowWidth}
              defaultColor={
                tertiaryColor !== undefined && tertiaryColor !== false
                  ? tertiaryColorEditDiv
                  : defaultTertiaryColor
              }
            />
            <input
              type="checkbox"
              name="tertiaryColor"
              onChange={handleCheckboxChange}
              className="template-info-form-label-checkbox"
              checked={checked.includes("tertiaryColor")}
            />
          </div>
        </label>
      </div>
    </form>
  );
};

export default TemplateInfoForm;
