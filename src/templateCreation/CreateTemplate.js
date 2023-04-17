import React, {useState} from "react";
import { addDoc} from "firebase/firestore";

import TemplateGrid from "./TemplateGrid";
import TemplateInfo from "./TemplateInfo";
import {templatesColRef} from "../firebase";

const Template = () => {
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

    const handleNameChange = ({target: {value}}) => {
        setName(value);
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
        <div className="container">
            <div className="main-container template-container">
                <div className="template-title">
                    <label className="template-title-label">
                        Name:
                        <input onChange={handleNameChange} value={name} type="text" className="title-label-name"/>
                    </label>
                </div>
                <div className="template">
                    <TemplateGrid
                        rows={rows}
                        columns={columns}
                        primaryColor={primaryColor}
                        activeColor={activeColor}
                        handleGridChange={handleGridChange}/>
                    <TemplateInfo
                        rows={rows}
                        columns={columns}
                        changeRows={changeRows}
                        changeColumns={changeColumns}
                        changePrimaryColor={changePrimaryColor}
                        changeSecondaryColor={changeSecondaryColor}
                        changeTertiaryColor={changeTertiaryColor}
                        changeActiveColor={changeActiveColor}
                        handleSubmitTemplate={handleSubmitTemplate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Template;
