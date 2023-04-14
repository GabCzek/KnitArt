import React from "react";
import GalleryTemplateGrid from "./GalleryTemplateGrid";
import GalleryTemplateInfo from "./GalleryTemplateInfo";

const SingleGalleryTemplate = ({color1, colorId, color2, gridColor, className, template, templates, getTemplates}) => {

    const color = colorId % 2 === 0 ? color1 : color2;

    return (
        <section style={{backgroundColor: color}} className={className}>
            <GalleryTemplateGrid gridColor={gridColor} template={template} templates={templates}/>
            <GalleryTemplateInfo color={color} template={template} templates={templates} getTemplates={getTemplates}/>
        </section>
    )
};

export default SingleGalleryTemplate;