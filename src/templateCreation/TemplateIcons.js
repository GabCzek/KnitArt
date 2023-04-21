import React from "react";
import {Link} from "react-router-dom";

const TemplateIcons = ({handleSubmitTemplate, createNewArray}) => {

    const handleClick = () => {
        handleSubmitTemplate()
    }
    const handleCreateNewArray = () => {
        createNewArray()
    }

    return (
        <div className="template-icons-container">
            <div className="template-icons-el" onClick={handleCreateNewArray}>
                <i className="fa-solid fa-eraser template-icon"></i>
                <span>Clear</span>
            </div>
            <div className="template-icons-el" onClick={handleClick}>
                <Link to="/template-gallery" className="link template-icon-link">
                    <i className="fa-solid fa-floppy-disk template-icon"></i>
                    <span>Save</span>
                </Link>
            </div>
            <div className="template-icons-el">
                <i className="fa-solid fa-file-pdf template-icon"></i>
                <span>Export</span>
            </div>
        </div>
    )
};


export default TemplateIcons;
