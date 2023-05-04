import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TemplateIcons = ({
  handleSubmitTemplate,
  createNewArray,
  windowWidth,
  handleShow,
  handleUpdateTemplate,
  handleClear,
  columns,
  rows,
  name,
}) => {
  const { id } = useParams();

  const handleSubmitOrUpdate = () => {
    id === undefined ? handleSubmitTemplate() : handleUpdateTemplate();
  };

  const handleCreateNewArray = () => {
    id === undefined ? createNewArray() : handleClear();
  };

  const handleBtnClick = () => {
    handleSubmitTemplate();
    handleShow(true);
    document.getElementById("gallery-template").scrollIntoView();
  };

  const handleDownloadPdf = async () => {
    document.getElementById("divToPrint").parentElement.style.overflow =
      "hidden";
    document.getElementById("divToPrint").style.maxHeight = "none";
    document.getElementById("divToPrint").style.maxWidth = "none";

    const input = document.getElementById("divToPrint");

    html2canvas(input, { scale: 3 }).then((canvas) => {
      document.getElementById("divToPrint").parentElement.style.overflow =
        "auto";
      document.getElementById("divToPrint").style.maxHeight = "100%";
      document.getElementById("divToPrint").style.maxWidth = "100%";

      const imgData = canvas.toDataURL("img/png");

      let imgWidth;
      if (columns < 25 && rows < 25) {
        imgWidth = 170 / (30 / columns);
      } else if (rows / columns > 1) {
        imgWidth = 170 / ((rows / columns) * 0.7);
      } else {
        imgWidth = 170;
      }
      const pageHeight = 295;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF("p", "mm");
      let position = 47;

      doc.addImage(imgData, "PNG", 20, position, imgWidth, imgHeight);
      doc.text(20, 20, `Template name: ${name}`);
      doc.text(20, 30, `Number of rows: ${rows}`);
      doc.text(20, 40, `Number of stitches: ${columns}`);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position += heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 20, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save("download.pdf");
    });
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
      <div className="template-icons-el" onClick={handleDownloadPdf}>
        <i className="fa-solid fa-file-pdf template-icon"></i>
        <span>Download</span>
      </div>
    </div>
  );
};

export default TemplateIcons;
