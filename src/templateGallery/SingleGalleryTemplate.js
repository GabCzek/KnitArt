import React from "react";
import {Link} from "react-router-dom";

import GalleryTemplateGrid from "./GalleryTemplateGrid";
import GalleryTemplateInfo from "./GalleryTemplateInfo";

const SingleGalleryTemplate = ({color1, colorId, color2, gridColor, className, template, templates}) => {

    const color = colorId % 2 === 0 ? color1 : color2;

    return (
        <section style={{backgroundColor: color}} className={className}>
            <div className="gallery-template-el">
            <Link to={`/show-template/${template.id}`} className="link gallery-template-link">
                <GalleryTemplateGrid gridColor={gridColor} template={template} templates={templates}/>
            </Link>
            </div>
            <GalleryTemplateInfo color={color} template={template} templates={templates}/>
        </section>
    )
};

export default SingleGalleryTemplate;