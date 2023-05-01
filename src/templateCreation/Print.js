import React from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Print = ({ name, rows, columns, grid }) => {
    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
        const input = document.getElementById('divToPrint');
        html2canvas((input), { scale: 3 })
            .then((canvas) => {
                let imgWidth = 108;
                let imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
    };
    return (
        <div  style={{width: 100
}
}>
      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
    </div>
  );
};

export default Print;
