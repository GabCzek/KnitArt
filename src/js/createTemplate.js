import React, {useState} from "react";
import '../scss/elements/createTemplate.scss';
import TemplateGrid from "./templateGrid";

const Template = () => {
    const [rows, setRows] = useState(16);
    const [columns, setColumns] = useState(16);

    return (
        <div className="container">
            <div className="main-container template-container">
                <div className="title">
                    <h1>Name: Template 1</h1>
                </div>
                <div className="template">
                    <TemplateGrid rows={rows} columns={columns}/>
                    <section className="template-info">

                    </section>
                </div>
            </div>
        </div>
    )
};

export default Template;