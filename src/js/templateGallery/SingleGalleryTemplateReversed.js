import React from "react";
import GalleryTemplateGrid from "./GalleryTemplateGrid";
import GalleryTemplateInfo from "./GalleryTemplateInfo";

const SingleGalleryTemplateReversed = ({color, gridColor, className}) => {
    return (
        <section style={{backgroundColor: color}} className={className}>
            <GalleryTemplateInfo color={color}/>
            <GalleryTemplateGrid gridColor={gridColor}/>
        </section>
    )
};

export default SingleGalleryTemplateReversed;