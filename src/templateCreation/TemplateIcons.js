import React from "react";
import { Link } from "react-router-dom";

const TemplateIcons = ({
  handleSubmitTemplate,
  createNewArray,
  handleShow,
  windowWidth,
}) => {
  const handleSubmit = () => {
    handleSubmitTemplate();
  };

  const handleCreateNewArray = () => {
    createNewArray();
  };

  const handleBtnClick = () => {
    handleSubmitTemplate();
    handleShow(true);
    document.getElementById("gallery-template").scrollIntoView();
  };

  return (
    <div className="template-icons-container">
      <div className="template-icons-el" onClick={handleCreateNewArray}>
        <i className="fa-solid fa-eraser template-icon"></i>
        <span>Clear</span>
      </div>
      <div className="template-icons-el" onClick={handleSubmit}>
        {windowWidth >= 820 ? (
          <Link to="/template-gallery" className="link template-icon-link">
            <i className="fa-solid fa-floppy-disk template-icon"></i>
            <span>Save</span>
          </Link>
        ) : (
          <div onClick={handleBtnClick} className="template-icon-link">
            <i className="fa-solid fa-floppy-disk template-icon"></i>
            <span>Save</span>
          </div>
        )}
      </div>

      <div className="template-icons-el">
        <i className="fa-solid fa-file-pdf template-icon"></i>
        <span>Export</span>
      </div>
    </div>
  );
};

export default TemplateIcons;
