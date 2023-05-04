import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { templatesColRef } from "../firebase";

import TemplateGrid from "./TemplateGrid";
import TemplateInfo from "./TemplateInfo";

const Template = ({ windowWidth, handleShow }) => {
  const [name, setName] = useState("Template 1");
  const [rows, setRows] = useState(20);
  const [columns, setColumns] = useState(20);
  const [primaryColor, setPrimaryColor] = useState("rgba(103, 146, 137)");
  const [secondaryColor, setSecondaryColor] = useState("rgba(29, 120, 116)");
  const [tertiaryColor, setTertiaryColor] = useState("rgba(134, 46, 15)");
  const [activeColor, setActiveColor] = useState("rgba(29, 120, 116)");
  const [grid, setGrid] = useState([]);

  const handleSubmitTemplate = async () => {
    try {
      await addDoc(templatesColRef, {
        name,
        rows,
        stitches: columns,
        primaryColor,
        secondaryColor,
        tertiaryColor,
        grid,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleGridChange = (grid) => {
    setGrid(grid);
  };

  const createNewArray = () => {
    const newTemplate = [...Array(rows * columns)].map((el, i) => ({
      id: i,
      color: primaryColor,
    }));
    setGrid(newTemplate);
    handleGridChange(newTemplate);
  };

  const changeName = (name) => {
    setName(name);
  };
  const changeRows = (rows) => {
    rows >= 0 && rows <= 80 && setRows(rows);
  };
  const changeColumns = (columns) => {
    columns >= 0 && columns <= 80 && setColumns(columns);
  };

  const changeActiveColor = (activeColor) => {
    if (activeColor === "primaryColor") {
      setActiveColor(primaryColor);
    } else if (activeColor === "secondaryColor") {
      setActiveColor(secondaryColor);
    } else if (activeColor === "tertiaryColor") {
      setActiveColor(tertiaryColor);
    } else {
      setActiveColor(null);
    }
  };

  const changePrimaryColor = (primaryColor) => {
    setPrimaryColor(
      `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${primaryColor.a})`
    );
  };

  const changeSecondaryColor = (secondaryColor) => {
    setSecondaryColor(
      `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${secondaryColor.a})`
    );
  };

  const changeTertiaryColor = (tertiaryColor) => {
    setTertiaryColor(
      `rgba(${tertiaryColor.r}, ${tertiaryColor.g}, ${tertiaryColor.b}, ${tertiaryColor.a})`
    );
  };

  return (
    <div className="container mediaContainerTemplate">
      <div className="main-container mediaContainerTemplate-title">
        {windowWidth < 820 && (
          <div className="template-title">
            <h2>Create your template</h2>
          </div>
        )}
        <div className="template">
          {windowWidth >= 820 ? (
            <>
              <TemplateGrid
                rows={rows}
                columns={columns}
                primaryColor={primaryColor}
                activeColor={activeColor}
                handleGridChange={handleGridChange}
                createNewArray={createNewArray}
                setGrid={setGrid}
                grid={grid}
                name={name}
              />
              <TemplateInfo
                rows={rows}
                columns={columns}
                name={name}
                changeName={changeName}
                changeRows={changeRows}
                changeColumns={changeColumns}
                changePrimaryColor={changePrimaryColor}
                changeSecondaryColor={changeSecondaryColor}
                changeTertiaryColor={changeTertiaryColor}
                changeActiveColor={changeActiveColor}
                handleSubmitTemplate={handleSubmitTemplate}
                windowWidth={windowWidth}
                createNewArray={createNewArray}
                handleShow={handleShow}
              />
            </>
          ) : (
            <>
              <TemplateInfo
                rows={rows}
                columns={columns}
                name={name}
                changeName={changeName}
                changeRows={changeRows}
                changeColumns={changeColumns}
                changePrimaryColor={changePrimaryColor}
                changeSecondaryColor={changeSecondaryColor}
                changeTertiaryColor={changeTertiaryColor}
                changeActiveColor={changeActiveColor}
                windowWidth={windowWidth}
              />
              <TemplateGrid
                rows={rows}
                columns={columns}
                primaryColor={primaryColor}
                activeColor={activeColor}
                handleGridChange={handleGridChange}
                windowWidth={windowWidth}
                handleSubmitTemplate={handleSubmitTemplate}
                createNewArray={createNewArray}
                setGrid={setGrid}
                handleShow={handleShow}
                grid={grid}
                name={name}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template;
