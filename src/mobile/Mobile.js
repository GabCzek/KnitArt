import React from "react";
import Template from "../templateCreation/CreateTemplate";
import ShowTemplate from "../showTemplate/ShowTemplate";
import TemplateGallery from "../templateGallery/TemplateGallery";

const Mobile = ({templates, windowWidth}) => {
    return (
        <div className="mobile">
            <div className="mobile-img"></div>
            <div className="mobile-content">
                <ShowTemplate templates={templates} windowWidth={windowWidth}/>
                <Template windowWidth={windowWidth}/>
                <TemplateGallery templates={templates} windowWidth={windowWidth}/>
            </div>
        </div>
    )
}

export default Mobile;