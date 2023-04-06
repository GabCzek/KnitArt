import React, {useState} from "react";
import ColorPicker from "./ColorPicker";
const TemplateInfoForm = ({changeRows, changeColumns}) => {
    const [rowsValue, setRowsValue] = useState(20);
    const [columnsValue, setColumnsValue] = useState(20);
    const handleRowsChange = ({target: {value}}) => {
        setRowsValue(value)
        changeRows(rowsValue)
    };

    const handleColumnsChange = ({target: {value}}) => {
        setColumnsValue(value)
        changeColumns(columnsValue)
    };

    return (
        <form>
            <label className="template-label">
                Number of rows:
                <input onChange={handleRowsChange}  value={rowsValue} type="number"/>
            </label>
            <label className="template-label">
                Number of stitches:
                <input onChange={handleColumnsChange}  value={columnsValue} type="number"/>
            </label>
            <label className="template-label">
                Choose main color:
                <ColorPicker />
            </label>
            <label className="template-label">
                Choose second color:
                <ColorPicker />
            </label>
            <label className="template-label">
                Choose third color:
                <ColorPicker />
            </label>
        </form>
    )
};

export default TemplateInfoForm;

