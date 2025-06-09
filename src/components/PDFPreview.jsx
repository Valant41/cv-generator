import { useState, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import PDFCV from "./PDFCV";

export default function PDFPreview({ data, imageUrl }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<PDFCV data={data} imageUrl={imageUrl} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };

    if (data) generatePdf();
  }, [data, imageUrl]);

  if (!pdfUrl) return <p>Chargement de l’aperçu PDF...</p>;

  return (
    <div className="w-full h-[800px] max-w-4xl mx-auto">
      <iframe
  src={pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
  title="Aperçu PDF"
  className="w-full h-full border shadow rounded"
/>

    </div>
  );
}
