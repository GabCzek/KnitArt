import React, {useEffect, useState} from "react";
import SingleGalleryTemplate from "./SingleGalleryTemplate";
import {getDocs} from "firebase/firestore";
import {templatesColRef} from "../config/firebase";

const TemplateGallery = () => {
    const [templates, setTemplates] = useState([]);
    const color1 = "#F0E0D6";
    const color2 = "#1D7874";
    const getTemplates = async () => {
        try {
            const data = await getDocs(templatesColRef)
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setTemplates(filteredData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getTemplates();
    }, []);


    return (
        <div className="container">
            <div className="main-container gallery_template-container">
                {templates.map((template, i) =>
                    <SingleGalleryTemplate key={i}
                                           className={`gallery-template-${i + 1} gallery-template`}
                                           colorId={i + 1}
                                           templates={templates}
                                           template={template}
                                           color1={color1}
                                           color2={color2}
                                           getTemplates={getTemplates}
                    />)}
            </div>
        </div>
    )
};

export default TemplateGallery;