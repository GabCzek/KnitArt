import React, {useState, useRef} from "react";
import ReactToPrint from "react-to-print";

import TemplateGrid from "./TemplateGrid";
import TemplateInfo from "./TemplateInfo";

const Template = () => {
    const [name, setName] = useState("Template 1");
    const [rows, setRows] = useState(20);
    const [columns, setColumns] = useState(20);
    const [primaryColor, setPrimaryColor] = useState("#679289");
    const [secondaryColor, setSecondaryColor] = useState("#1d7874");
    const [tertiaryColor, setTertiaryColor] = useState("#852e0f");
    const [activeColor, setActiveColor] = useState("#679289");
    const handleNameChange = ({target: {value}}) => {
        setName(value);
    };
    const changeRows = (rows) => {
        setRows(rows);
    };
    const changeColumns = (columns) => {
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

    // let componentRef = useRef(null);

    return (
        <div className="container">
            {/*<ReactToPrint*/}
            {/*    trigger = {() => {*/}
            {/*        return <button> Print </button>*/}
            {/*    }}*/}
            {/*    content = {() => componentRef}*/}
            {/*    documentTitle="Template"*/}
            {/*    pageStyle="print"*/}
            {/*/>*/}

            {/*<div className="main-container template-container" ref={el => (componentRef = el)}>*/}
            <div className="main-container template-container">
                <div className="title">
                    <label className="title-label">
                        Name:
                        <input onChange={handleNameChange} value={name} type="text" className="title-label-name"/>
                    </label>
                </div>
                <div className="template">
                    <TemplateGrid
                        rows={rows}
                        columns={columns}
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                        tertiaryColor={tertiaryColor}
                        activeColor={activeColor}/>
                    <TemplateInfo
                        rows={rows}
                        columns={columns}
                        changeRows={changeRows}
                        changeColumns={changeColumns}
                        changePrimaryColor={changePrimaryColor}
                        changeSecondaryColor={changeSecondaryColor}
                        changeTertiaryColor={changeTertiaryColor}
                        changeActiveColor={changeActiveColor}
                    />
                </div>
            </div>
        </div>
    );
};

export default Template;
