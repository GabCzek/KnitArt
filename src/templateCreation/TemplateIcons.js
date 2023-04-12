import React from "react";
const TemplateIcons = ({handleSubmitTemplate}) => {

    const handleClick = () => {
        handleSubmitTemplate()
    }

    return (
        <div className="template-icons_container">
            <div className="template-icons_el">
                <i className="fa-solid fa-eraser"></i>
                <span>Clear</span>
            </div>
            <div className="template-icons_el" onClick={handleClick}>
                <i className="fa-solid fa-floppy-disk"></i>
                <span>Save</span>
            </div>
            <div className="template-icons_el">
                <i className="fa-solid fa-file-pdf"></i>
                <span>Export</span>
            </div>
        </div>
    )
};


export default TemplateIcons;
