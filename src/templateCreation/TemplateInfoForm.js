import React, {useState} from "react";
import ColorPicker from "./ColorPicker";

const TemplateInfoForm = ({   rows,
                              columns,
                              changePrimaryColor,
                              changeSecondaryColor,
                              changeTertiaryColor,
                              changeActiveColor,
                              changeRows,
                              changeColumns
                          }) => {

    const [checked, setChecked] = useState([]);

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

    return (
        <form>
            <label className="template-label">
                Number of rows:
                <input onChange={handleRowsChange} value={rows} type="number" className="template-label-number"/>
            </label>
            <label className="template-label">
                Number of stitches:
                <input onChange={handleColumnsChange} value={columns} type="number" className="template-label-number"/>
            </label>
            <label className="template-label">
                Choose main color:
                <ColorPicker changeColor={changePrimaryColor} defaultColor={defaultPrimaryColor}/>
                <input type="checkbox" name="primaryColor" onChange={handleCheckboxChange}
                       className="template-label-checkbox"
                       checked={checked.includes("primaryColor")}
                       disabled={!checked.includes("primaryColor") && checked.length > 1}
                />
            </label>
            <label className="template-label">
                Choose second color:
                <ColorPicker changeColor={changeSecondaryColor} defaultColor={defaultSecondaryColor}/>
                <input type="checkbox" name="secondaryColor" onChange={handleCheckboxChange}
                       className="template-label-checkbox"
                       checked={checked.includes("secondaryColor")}
                       disabled={!checked.includes("secondaryColor") && checked.length > 1}/>
            </label>
            <label className="template-label">
                Choose third color:
                <ColorPicker changeColor={changeTertiaryColor} defaultColor={defaultTertiaryColor}/>
                <input type="checkbox" name="tertiaryColor" onChange={handleCheckboxChange}
                       className="template-label-checkbox"
                       checked={checked.includes("tertiaryColor")}
                       disabled={!checked.includes("tertiaryColor") && checked.length > 1}/>
            </label>
        </form>
    );
};

export default TemplateInfoForm;
