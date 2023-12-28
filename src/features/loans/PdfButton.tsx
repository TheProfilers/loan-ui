import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { RefObject } from 'react';

interface PDFButtonProps {
  componentRef: RefObject<HTMLDivElement>;
  fileName: string;
}

export default function PdfButton({ componentRef, fileName }: PDFButtonProps) {
  const handlePrint = () => {
    if (!componentRef.current) {
      return;
    }

    html2canvas(componentRef.current,{scale:2}).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${fileName}.pdf`);
    });
  };
  return (
    <button onClick={handlePrint}>
      Print as PDF
    </button>
  );
}




