import React, {useState} from "react";
import '../../scss/elements/createTemplate.scss';
import TemplateGrid from "./TemplateGrid";
import TemplateInfo from "./TemplateInfo";

const Template = () => {
    const [rows, setRows] = useState(20);
    const [columns, setColumns] = useState(20);

    const changeRows = rows => {
        setRows(rows);
    };

    const changeColumns = columns => {
        setColumns(columns);
    };

    return (
        <div className="container">
            <div className="main-container template-container">
                <div className="title">
                    <h1>Name: Template 1</h1>
                </div>
                <div className="template">
                    <TemplateGrid rows={rows} columns={columns} />
                    <TemplateInfo changeRows={changeRows} changeColumns={changeColumns} />
                </div>
            </div>
        </div>
    )
};

export default Template;