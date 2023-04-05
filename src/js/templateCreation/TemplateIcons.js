import React from "react";
import Eraser from "../../images/eraser-solid.svg";
import Save from "../../images/floppy-disk-solid.svg";
import PDF from "../../images/file-pdf-solid.svg";
const TemplateIcons = () => {
    return (
        <div className="template-icons_container">
            <div>
                <img src={Eraser} alt="Eraser" className="template-icons template-icon_clear"/>
                <span>Clear</span>
            </div>
            <div>
                <img src={Save} alt="Floppy disc logo" className="template-icons template-icon_save"/>
                <span>Save</span>
            </div>

            <div>
                <img src={PDF} alt="PDF" className="template-icons template-icon_export"/>
                <span>Export</span>
            </div>
        </div>
    )
};

export default TemplateIcons;
