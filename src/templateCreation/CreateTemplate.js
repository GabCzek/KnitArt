import React, {useState} from "react";
import {addDoc} from "firebase/firestore";

import TemplateGrid from "./TemplateGrid";
import TemplateInfo from "./TemplateInfo";
import {templatesColRef} from "../firebase";

const Template = ({windowWidth}) => {
    const [name, setName] = useState("Template 1");
    const [rows, setRows] = useState(20);
    const [columns, setColumns] = useState(20);
    const [primaryColor, setPrimaryColor] = useState("#679289");
    const [secondaryColor, setSecondaryColor] = useState("#1d7874");
    const [tertiaryColor, setTertiaryColor] = useState("#852e0f");
    const [activeColor, setActiveColor] = useState("#679289");
    const [grid, setGrid] = useState([])

    const handleSubmitTemplate = async () => {
        try {
            await addDoc(templatesColRef, {
                name,
                rows,
                stitches: columns,
                primaryColor,
                secondaryColor,
                tertiaryColor,
                grid
            });
        } catch (err) {
            console.error(err)
        }
    }

    const handleGridChange = (grid) => {
        setGrid(grid)
    }

    const changeName = (name) => {
        setName(name);
    };
    const changeRows = (rows) => {
        (rows >= 0 && rows <= 80) && setRows(rows);
    };
    const changeColumns = (columns) => {
        (columns >= 0 && columns <= 80) &&
        setColumns(columns);
    };

    const changeActiveColor = (activeColor) => {

        if (activeColor === "primaryColor") {
            setActiveColor(primaryColor)
        } else if (activeColor === "secondaryColor") {
            setActiveColor(secondaryColor);
        } else {
            setActiveColor(tertiaryColor);
        }
    }

    const changePrimaryColor = (primaryColor) => {
        setPrimaryColor(`rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${primaryColor.a})`);
    };

    const changeSecondaryColor = (secondaryColor) => {
        setSecondaryColor(`rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${secondaryColor.a})`);
    };

    const changeTertiaryColor = (tertiaryColor) => {
        setTertiaryColor(`rgba(${tertiaryColor.r}, ${tertiaryColor.g}, ${tertiaryColor.b}, ${tertiaryColor.a})`);
    };

    return (
        <div className="container mediaContainerTemplate">
            <div className="main-container">
                <div className="template">
                    {windowWidth >= 820 ? <>
                            <TemplateGrid
                                rows={rows}
                                columns={columns}
                                primaryColor={primaryColor}
                                activeColor={activeColor}
                                handleGridChange={handleGridChange}/>
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
                            />
                        </> :
                        <>
                            <h2 className="template-title">Create your template</h2>
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
                            />
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Template;
