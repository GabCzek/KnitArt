import React, {useState} from "react";
import {Tooltip} from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

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
                              windowWidth
                          }) => {

    const [checked, setChecked] = useState(["secondaryColor"]);

    const defaultPrimaryColor = {
        r: '103',
        g: '146',
        b: '137',
        a: '1',
    }

    const defaultSecondaryColor = {
        r: '29',
        g: '120',
        b: '116',
        a: '1',
    }

    const defaultTertiaryColor = {
        r: '133',
        g: '16',
        b: '15',
        a: '1',
    }
    const handleRowsChange = ({target: {value}}) => {
        changeRows(value);
    };
    const handleColumnsChange = ({target: {value}}) => {
        changeColumns(value);
    };
    const handleCheckboxChange = ({target: {name}}) => {
        if (checked.includes(name)) {
            setChecked(checked.filter((checkBox) => checkBox !== name));
            changeActiveColor(null)
        } else {
            setChecked(prev => [[...prev], name])
            changeActiveColor(name)
        }
    }

    const handleNameChange = ({target: {value}}) => {
        changeName(value);
    };

    return (
        <form className="template-info-form">
            <div className="template-info-form-labels">
                <label className="template-info-form-label">
                    <span>Name:</span>
                    <input onChange={handleNameChange} value={name} type="text"
                           className="template-info-form-label-name"/>
                </label>
                <label className="template-info-form-label">
                    {windowWidth >= 820 ? <span>Number of rows:</span> : <span>Rows:</span>}
                    <input data-tooltip-id="numberOfRows"
                           data-tooltip-content="Please choose a number between 1 and 80"
                           onChange={handleRowsChange}
                           value={rows}
                           type="number"
                           min="1"
                           max="80"
                           className="template-info-form-label-number"/>
                    <Tooltip id="numberOfRows"/>
                </label>
                <label className="template-info-form-label">
                    {windowWidth >= 820 ? <span>Number of stitches:</span> : <span>Stitches:</span>}
                    <input data-tooltip-id="numberOfStitches"
                           data-tooltip-content="Please choose a number between 1 and 80"
                           onChange={handleColumnsChange}
                           value={columns}
                           type="number"
                           min="1"
                           max="80"
                           className="template-info-form-label-number"/>
                    <Tooltip id="numberOfStitches"/>
                </label>
            </div>
            <div className="template-info-form-colors">
                <label style={{display: "none"}}/>
                <label className="template-info-form-label">
                    {windowWidth >= 820 ? <span>Choose main color:</span> : <span>Main color:</span>}
                    <div className="template-info-form-color">
                        <ColorPicker changeColor={changePrimaryColor} defaultColor={defaultPrimaryColor}/>
                        <input type="checkbox" name="primaryColor" onChange={handleCheckboxChange}
                               className="template-info-form-label-checkbox"
                               checked={checked.includes("primaryColor")}
                               disabled={!checked.includes("primaryColor") && checked.length > 1}
                        />
                    </div>
                </label>
                <label className="template-info-form-label">
                    {windowWidth >= 820 ? <span>Choose second color:</span> : <span>2nd color:</span>}
                    <div className="template-info-form-color">
                        <ColorPicker changeColor={changeSecondaryColor} defaultColor={defaultSecondaryColor}/>
                        <input type="checkbox" name="secondaryColor" onChange={handleCheckboxChange}
                               className="template-info-form-label-checkbox"
                               checked={checked.includes("secondaryColor")}
                               disabled={!checked.includes("secondaryColor") && checked.length > 1}/>
                    </div>
                </label>
                <label className="template-info-form-label">
                    {windowWidth >= 820 ? <span>Choose third color:</span> : <span>3rd color:</span>}
                    <div className="template-info-form-color">
                        <ColorPicker changeColor={changeTertiaryColor} defaultColor={defaultTertiaryColor}/>
                        <input type="checkbox" name="tertiaryColor" onChange={handleCheckboxChange}
                               className="template-info-form-label-checkbox"
                               checked={checked.includes("tertiaryColor")}
                               disabled={!checked.includes("tertiaryColor") && checked.length > 1}/>
                    </div>
                </label>
            </div>
        </form>
    );
};

export default TemplateInfoForm;
