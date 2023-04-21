import React, {useState, useEffect} from "react";
import Template from "../templateCreation/CreateTemplate";
import ShowTemplate from "../showTemplate/ShowTemplate";
import TemplateGallery from "../templateGallery/TemplateGallery";

const Mobile = ({templates, windowWidth}) => {
    const [isOpenTemplate, setIsOpenTemplate] = useState(false)
    const [isOpenShowTemplate, setIsOpenShowTemplate] = useState(false)
    const [isOpenTemplateGallery, setIsOpenTemplateGallery] = useState(false)
    const [height, setHeight] = useState("calc(100vh - 48px)")

    useEffect(() => {
        if (isOpenTemplate === false && isOpenShowTemplate === false && isOpenTemplateGallery === false) {
            setHeight("calc(100vh - 48px)")
        } else {
            setHeight("100%")
        }

    }, [isOpenTemplate, isOpenShowTemplate, isOpenTemplateGallery])

    const handleIsOpenShowTemplate = (isOpenTemplate) => {
        setIsOpenTemplate(isOpenTemplate)
    }

    const handleIsOpenTemplate = (isOpenShowTemplate) => {
        setIsOpenShowTemplate(isOpenShowTemplate)
    }

    const handleIsOpenTemplateGallery = (isOpenTemplateGallery) => {
        setIsOpenTemplateGallery(isOpenTemplateGallery)
    }


    return (
        <div className="mobile" style={{height: height}}>
            <div className="mobile-img"></div>
            <div className="mobile-content">
                <ShowTemplate templates={templates} windowWidth={windowWidth}
                              handleIsOpenShowTemplate={handleIsOpenShowTemplate}/>
                <Template windowWidth={windowWidth} handleIsOpenTemplate={handleIsOpenTemplate}/>
                <TemplateGallery templates={templates} windowWidth={windowWidth}
                                 handleIsOpenTemplateGallery={handleIsOpenTemplateGallery}/>
            </div>
        </div>
    )
}

export default Mobile;