import React from "react";
import SingleGalleryTemplate from "./SingleGalleryTemplate";


const TemplateGallery = ({templates}) => {
    const color1 = "#F0E0D6";
    const color2 = "#1D7874";

    return (
        <div className="container">
            <div className="main-container gallery-template-container">
                {templates.map((template, i) =>
                    <SingleGalleryTemplate key={i}
                                           className={`gallery-template-${i + 1} gallery-template`}
                                           colorId={i + 1}
                                           templates={templates}
                                           template={template}
                                           color1={color1}
                                           color2={color2}
                    />)}
            </div>
        </div>
    )
};

export default TemplateGallery;