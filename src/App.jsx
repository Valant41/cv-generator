import { useState } from "react";
import Header from "./components/Header";
import CVForm from "./components/CVForm";
import PDFPreview from "./components/PDFPreview";
import CVPDF from "./components/PDFCV";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";



export default function App() {
  const [cvData, setCvData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // pour ajouter une photo plus tard
  const [editMode, setEditMode] = useState(true); // mode édition activé au départ

  const navigate = useNavigate();

  const handleCVSubmit = (data) => {
    setCvData(data);          // stocke les données
    setEditMode(false);       // désactive l'édition => on montre l'aperçu PDF
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="py-6 px-4">
        {editMode ? (
          <CVForm
            onSubmit={handleCVSubmit}
            setImageUrl={setImageUrl}
            initialData={cvData || {}}
          />
        ) : (
          <>
            {/* Aperçu PDF dans un <iframe> */}
            <PDFPreview data={cvData} imageUrl={imageUrl} />

            {/* Actions : modifier ou télécharger */}
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              {/* 🔁 Modifier les infos */}
              <button
                onClick={() => setEditMode(true)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                ✏️ Modifier mon CV
              </button>

              {/* 📄 Télécharger le PDF */}
              <PDFDownloadLink
                document={<CVPDF data={cvData} imageUrl={imageUrl} />}
                fileName="mon-cv.pdf"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                {({ loading }) =>
                  loading ? "Génération..." : "📄 Télécharger mon CV"
                }
              </PDFDownloadLink>

              {/* 📨 Générer une lettre de motivation */}
              <button
                onClick={() => navigate("/lettre-de-motivation", { state: { cvData } })}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                📨 Générer automatiquement ma lettre de motivation
              </button>

            </div>
          </>
        )}
      </main>
    </div>
  );
}
