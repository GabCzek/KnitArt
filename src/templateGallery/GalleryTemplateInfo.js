import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const GalleryTemplateInfo = ({ color, templates, template, windowWidth }) => {
  const textColor =
    color === "#1D7874" || color === "#852E0F" ? "#FFF" : "#000";

  const deleteTemplate = async (id) => {
    const templateDoc = doc(db, "templates", id);
    await deleteDoc(templateDoc);
    template.id === templates[0].id &&
    window.location.reload(false);
  };

  return (
    <section className="gallery-template-info">
      <div className="gallery-template-info-data" style={{ color: textColor }}>
        <span>{templates.length > 0 && template.name}</span>
        <span>Stitches: {templates.length > 0 && template.stitches}</span>
        <span>Rows: {templates.length > 0 && template.rows}</span>
      </div>
      <div className="gallery-template-info-icons" style={{ color: textColor }}>
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteTemplate(template.id)}
        ></i>
        {windowWidth>= 820 && <Link to={`/edit-template/${template.id}`} className="link">
          <i className="fa-solid fa-pencil" style={{ color: textColor }}></i>
        </Link>}
      </div>
    </section>
  );
};

export default GalleryTemplateInfo;
