import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const TemplateIcons = ({
  handleSubmitTemplate,
  createNewArray,
  handleShow,
  windowWidth,
  handleUpdateTemplate,
}) => {
  const { id } = useParams();

  const handleSubmitOrUpdate = () => {
    id === undefined ? handleSubmitTemplate() : handleUpdateTemplate();
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
      {windowWidth >= 820 ? (
        <div className="template-icons-el" onClick={handleSubmitOrUpdate}>
          <Link to="/template-gallery" className="link template-icon-link">
            <i className="fa-solid fa-floppy-disk template-icon"></i>
            <span>Save</span>
          </Link>
        </div>
      ) : (
        <div className="template-icons-el">
          <div onClick={handleBtnClick} className="template-icon-link">
            <i className="fa-solid fa-floppy-disk template-icon"></i>
            <span>Save</span>
          </div>
        </div>
      )}
      <div className="template-icons-el">
        <i className="fa-solid fa-file-pdf template-icon"></i>
        <span>Export</span>
      </div>
    </div>
  );
};

export default TemplateIcons;
