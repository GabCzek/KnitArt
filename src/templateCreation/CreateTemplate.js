import React, { useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
// import * as htmlToImage from 'html-to-image';

import TemplateGrid from "./TemplateGrid";
import TemplateInfo from "./TemplateInfo";
import { templatesColRef } from "../firebase";

const Template = ({ windowWidth, handleIsOpenTemplate }) => {
  const [name, setName] = useState("Template 1");
  const [rows, setRows] = useState(20);
  const [columns, setColumns] = useState(20);
  const [primaryColor, setPrimaryColor] = useState("#679289");
  const [secondaryColor, setSecondaryColor] = useState("#1d7874");
  const [tertiaryColor, setTertiaryColor] = useState("#852e0f");
  const [activeColor, setActiveColor] = useState("#1d7874");
  const [grid, setGrid] = useState([]);
  const [height, setHeight] = useState("94%");
  const [template, setTemplate] = useState([]);
  // const [img, setImg] = useState({});

  // const handleSetImg = (img) => {
  //   setImg(img);
  // };

  // const canvas = document.getElementById("canvas")

  // const handleClickBtn = () => {
  //   htmlToImage.toPng(canvas)
  //    .then(function (dataUrl) {
  //      const img = new Image()
  //      img.src = dataUrl
  //      handleSetImg(img)
  //    })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //  }

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
    setTemplate(newTemplate);
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
    <div
      className="container mediaContainerTemplate"
      style={{ height: height }}
    >
      <div className="main-container mediaContainerTemplate-title">
        {windowWidth < 820 &&  (
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
                  template={template}
                  createNewArray={createNewArray}
                  setTemplate={setTemplate}
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
                  template={template}
                  setTemplate={setTemplate}
                />
              </>
            )}
          </div>
      </div>
    </div>
  );
};

export default Template;
