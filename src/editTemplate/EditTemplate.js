import React, { useState, useEffect } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import TemplateGrid from "../templateCreation/TemplateGrid";
import TemplateInfo from "../templateCreation/TemplateInfo";
import { db } from "../firebase";

const EditTemplate = ({ windowWidth, templates }) => {
  const { id } = useParams();

  const [firstTemplate, setFirstTemplate] = useState(
    templates.length > 0 &&
      templates.find((obj) => {
        return obj.id === id;
      })

  );

  useEffect(() => {
    setFirstTemplate(
      templates.length > 0 &&
        templates.find((obj) => {
          return obj.id === id;
        })
    );
  }, [templates]);


  const [name, setName] = useState(firstTemplate.name);

  const [rows, setRows] = useState(firstTemplate.rows);
  const [columns, setColumns] = useState(firstTemplate.stitches);
  const [primaryColor, setPrimaryColor] = useState(templates.length > 0 && firstTemplate.primaryColor
  );
  const [secondaryColor, setSecondaryColor] = useState(
    templates.length > 0 && firstTemplate.secondaryColor
  );
  const [tertiaryColor, setTertiaryColor] = useState(
    templates.length > 0 && firstTemplate.tertiaryColor
  );
  const [activeColor, setActiveColor] = useState(
    templates.length > 0 && firstTemplate.secondaryColor
  );
  const [grid, setGrid] = useState(templates.length > 0 && firstTemplate.grid);

  useEffect(() => {
  setName(firstTemplate.name);
  setRows(firstTemplate.rows);
  setColumns(firstTemplate.stitches);
  setPrimaryColor(templates.length > 0 && firstTemplate.primaryColor
  );
  setSecondaryColor(templates.length > 0 && firstTemplate.secondaryColor
  );
  setTertiaryColor(templates.length > 0 && firstTemplate.tertiaryColor
  );
  setActiveColor(templates.length > 0 && firstTemplate.secondaryColor
  );
  setGrid(templates.length > 0 && firstTemplate.grid);
  }, [firstTemplate]);


  const docRef = doc(db, "templates", id);

  const handleUpdateTemplate = async () => {
    try {
      await updateDoc(docRef, {
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
    const newGrid  = [...Array(rows * columns)].map((el, i) => ({
      id: i,
      color: primaryColor,
    }));
    setGrid(newGrid);
    handleGridChange(newGrid);
  };


  const handleClear = () => {
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
      {grid === false ? null : (
        <div className="main-container mediaContainerTemplate-title">
          {windowWidth < 820 && (
            <div className="template-title">
              <h2>Edit your template</h2>
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
                />
                <TemplateInfo
                  rows={rows}
                  columns={columns}
                  name={name}
                  changeName={changeName}
                  changeRows={changeRows}
                  changeColumns={changeColumns}
                  changePrimaryColor={changePrimaryColor}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  tertiaryColor={tertiaryColor}
                  changeSecondaryColor={changeSecondaryColor}
                  changeTertiaryColor={changeTertiaryColor}
                  changeActiveColor={changeActiveColor}
                  windowWidth={windowWidth}
                  createNewArray={createNewArray}
                  handleUpdateTemplate={handleUpdateTemplate}
                  handleClear={handleClear}
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
                  primaryColor={primaryColor}
                  changePrimaryColor={changePrimaryColor}
                  secondaryColor={secondaryColor}
                  changeSecondaryColor={changeSecondaryColor}
                  tertiaryColor={tertiaryColor}
                  changeTertiaryColor={changeTertiaryColor}
                  changeActiveColor={changeActiveColor}
                  windowWidth={windowWidth}
                  createNewArray={createNewArray}
                />
                <TemplateGrid
                  rows={rows}
                  columns={columns}
                  primaryColor={primaryColor}
                  activeColor={activeColor}
                  handleGridChange={handleGridChange}
                  windowWidth={windowWidth}
                  createNewArray={createNewArray}
                  handleUpdateTemplate={handleUpdateTemplate}
                  setGrid={setGrid}
                  handleClear={handleClear}
                  grid={grid}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTemplate;
