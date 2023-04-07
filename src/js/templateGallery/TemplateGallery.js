import React from "react";
import '../../scss/elements/TemplateGallery.scss';
import SingleGalleryTemplate from "./SingleGalleryTemplate";
import SingleGalleryTemplateReversed from "./SingleGalleryTemplateReversed";

const TemplateGallery = () => {
    const color1 = "#1D7874";
    const color2 = "#F0E0D6";
    const color3 = "#679289";
    const color4 = "#852E0F";

    return (
        <div className="container">
            <div className="main-container gallery_template-container">
                <SingleGalleryTemplate color={color1} gridColor={color2} className="gallery-template1 gallery-template"/>
                <SingleGalleryTemplate color={color2} gridColor={color1} className="gallery-template2 gallery-template"/>
                <SingleGalleryTemplateReversed color={color4} gridColor={color3} className="gallery-template3 gallery-template"/>
                <SingleGalleryTemplateReversed color={color3} gridColor={color4} className="gallery-template4 gallery-template"/>
                <SingleGalleryTemplate color={color2} gridColor={color4} className="gallery-template5 gallery-template"/>
                <SingleGalleryTemplate color={color4} gridColor={color2} className="gallery-template6 gallery-template"/>
            </div>
        </div>
    )
};

export default TemplateGallery;