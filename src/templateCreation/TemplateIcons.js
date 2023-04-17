import React from "react";
const TemplateIcons = ({handleSubmitTemplate}) => {

    const handleClick = () => {
        handleSubmitTemplate()
    }

    return (
        <div className="template-icons-container">
            <div className="template-icons-el">
                <i className="fa-solid fa-eraser template-icon"></i>
                <span>Clear</span>
            </div>
            <div className="template-icons-el" onClick={handleClick}>
                <i className="fa-solid fa-floppy-disk template-icon"></i>
                <span>Save</span>
            </div>
            <div className="template-icons-el">
                <i className="fa-solid fa-file-pdf template-icon"></i>
                <span>Export</span>
            </div>
        </div>
    )
};


export default TemplateIcons;
