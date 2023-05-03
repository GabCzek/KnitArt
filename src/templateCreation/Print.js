import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Print = ({ name, rows, columns, grid }) => {
  const handleDownloadPdf = async () => {
    document.getElementById("divToPrint").parentElement.style.overflow = "hidden";
    document.getElementById("divToPrint").style.maxHeight = "none";
    document.getElementById("divToPrint").style.maxWidth = "none";

    const input = document.getElementById("divToPrint");

    html2canvas(input, { scale: 3 }).then((canvas) => {
      document.getElementById("divToPrint").parentElement.style.overflow =
        "auto";
      document.getElementById("divToPrint").style.maxHeight = "100%";
      document.getElementById("divToPrint").style.maxWidth = "100%";
      let imgWidth = 170;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");

      pdf.addImage(imgData, "PNG", 20, 50, imgWidth, imgHeight);

      pdf.text(20, 20, `Template name: ${name}`);
      pdf.text(20, 30, `Number of rows: ${rows}`);
      pdf.text(20, 40, `Number of stitches: ${columns}`);
      pdf.save("download.pdf");
    });
  };
  return (
    <div>
      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
    </div>
  );
};

export default Print;
