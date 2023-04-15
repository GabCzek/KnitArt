import React from "react";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../firebase";

const GalleryTemplateInfo = ({ color, templates, template }) => {
    const textColor = color === "#1D7874" || color === "#852E0F" ? "#FFF" : "#000";

    const deleteTemplate = async (id) => {
        const templateDoc = doc(db, "templates", id);
        await deleteDoc(templateDoc);
    }

    return (
        <section className="gallery-template-info">
            <div className="gallery-template-info-data" style={{color: textColor}}>
                <span>{templates.length > 0 && template.name}</span>
                <span>Stitches: {templates.length > 0 && template.stitches}</span>
                <span>Rows: {templates.length > 0 && template.rows}</span>
            </div>
            <div className="gallery-template-info-icons" style={{color: textColor}}>
                <i className="fa-solid fa-trash" onClick={() => deleteTemplate(template.id)}></i>
                <i className="fa-solid fa-pencil"></i>
            </div>
        </section>
    )
};

export default GalleryTemplateInfo;