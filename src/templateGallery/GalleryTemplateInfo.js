import React from "react";

const GalleryTemplateInfo = ({color}) => {
    const textColor = color === "#1D7874" || color === "#852E0F" ? "#FFF" : "#000";
    return (
        <section>
            <div className="gallery-template-info" style={{color: textColor}}>
                <span>Name:</span>
                <span>Stitches:</span>
                <span>Rows:</span>
            </div>
        </section>
    )
};

export default GalleryTemplateInfo;