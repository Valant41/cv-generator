import { useState } from "react";
import Header from "./components/Header";
import CVForm from "./components/CVForm";
import PDFPreview from "./components/PDFPreview";
import CVPDF from "./components/PDFCV";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import CoverLetterForm from "./components/CoverLetterForm";
import Confidentialite from "./components/Confidentialite";
import MentionsLegales from "./components/MentionsLegales";
import APropos from "./components/APropos";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
<ScrollToTop />


function Footer() {
  return (
    <footer className="mt-12 py-6 border-t text-center text-sm text-gray-500">
      <p>
        <Link to="/confidentialite" className="hover:underline mx-2">
          Politique de confidentialité
        </Link>
        |
        <Link to="/mentions-legales" className="hover:underline mx-2">
          Mentions légales
        </Link>
        |
        <Link to="/contact" className="hover:underline mx-2">
          Contact
        </Link>
      </p>
    </footer>
  );
}

export default function App() {
  const [cvData, setCvData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [editMode, setEditMode] = useState(true);

  const navigate = useNavigate();

  const handleCVSubmit = (data) => {
    setCvData(data);
    setEditMode(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="py-6 px-4 flex-grow">
        <ScrollToTop />
        <Routes>
          {/* ✅ Page d’accueil */}
          <Route path="/" element={<Home />} />

          {/* ✅ Générateur de CV (séparé) */}
          <Route
            path="/generateur-cv"
            element={
              editMode ? (
                <CVForm
                  onSubmit={handleCVSubmit}
                  setImageUrl={setImageUrl}
                  initialData={cvData || {}}
                />
              ) : (
                <>
                  <PDFPreview data={cvData} imageUrl={imageUrl} />
                  <div className="flex justify-center gap-4 mt-6 flex-wrap">
                    <button
                      onClick={() => setEditMode(true)}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                    >
                      ✏️ Modifier mon CV
                    </button>

                    <PDFDownloadLink
                      document={<CVPDF data={cvData} imageUrl={imageUrl} />}
                      fileName="mon-cv.pdf"
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      {({ loading }) =>
                        loading ? "Génération..." : "📄 Télécharger mon CV"
                      }
                    </PDFDownloadLink>

                    <button
                      onClick={() =>
                        navigate("/lettre-de-motivation", { state: { cvData } })
                      }
                      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                      📨 Générer automatiquement ma lettre de motivation
                    </button>
                  </div>
                </>
              )
            }
          />

          {/* Autres routes */}
          <Route path="/lettre-de-motivation" element={<CoverLetterForm />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />  
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
