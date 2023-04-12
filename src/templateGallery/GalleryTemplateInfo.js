import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config/firebase";

const GalleryTemplateInfo = ({color}) => {
    const [templates, setTemplates] = useState([]);

    const templatesColRef = collection(db, 'templates');
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

    const textColor = color === "#1D7874" || color === "#852E0F" ? "#FFF" : "#000";
    return (
        <section>
            <div className="gallery-template-info" style={{color: textColor}}>
                <span>Name: {templates > 0 && templates[0].name}</span>
                <span>Stitches: {templates > 0 && templates[0].stitches}</span>
                <span>Rows: {templates > 0 && templates[0].rows}</span>
            </div>
        </section>
    )
};

export default GalleryTemplateInfo;