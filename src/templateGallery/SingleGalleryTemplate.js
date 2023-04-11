import React from "react";
import GalleryTemplateGrid from "./GalleryTemplateGrid";
import GalleryTemplateInfo from "./GalleryTemplateInfo";

const SingleGalleryTemplate = ({color, gridColor, className}) => {
    return (
        <section style={{backgroundColor: color}} className={className}>
            <GalleryTemplateGrid gridColor={gridColor}/>
            <GalleryTemplateInfo color={color}/>
        </section>
    )
};

export default SingleGalleryTemplate;