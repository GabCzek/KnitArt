import React from "react";
import Template from "../templateCreation/CreateTemplate";
import ShowTemplate from "../showTemplate/ShowTemplate";
import TemplateGallery from "../templateGallery/TemplateGallery";

const Mobile = ({templates, windowWidth}) => {
    return (
        <>
            <ShowTemplate templates={templates} windowWidth={windowWidth}/>
            <Template windowWidth={windowWidth}/>
            <TemplateGallery templates={templates} windowWidth={windowWidth}/>
        </>
    )
}

export default Mobile;