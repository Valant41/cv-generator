import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CoverLetterPDF from "./CoverLetterPDF";

const fieldLabels = {
  fullName: "Nom complet",
  jobTitle: "Poste visé",
  education: "Formation",
  skills: "Compétences",
  experiences: "Expériences",
  interests: "Centres d’intérêt",
  companyName: "Nom de l’entreprise",
  location: "Lieu du poste",
  recruiterName: "Nom du recruteur (facultatif)",
};

export default function CoverLetterForm() {
  const location = useLocation();
  const cvData = location.state?.cvData;

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    jobTitle: "",
    education: "",
    skills: "",
    experiences: "",
    interests: "",
    companyName: "",
    location: "",
    recruiterName: "",
  });

  const [generatedLetter, setGeneratedLetter] = useState("");

  useEffect(() => {
    if (cvData) {
      setForm((prev) => ({
        ...prev,
        fullName: cvData.fullName || "",
        jobTitle: cvData.jobTitle || "",
        education: cvData.formations?.map(f => f.degree + " à " + f.school).join(", ") || "",
        skills: cvData.skills || "",
        experiences: Array.isArray(cvData.experiences)
          ? cvData.experiences.map(e => `${e.position} chez ${e.company}`).join(", ")
          : typeof cvData.experiences === "string" ? cvData.experiences : "",
        interests: cvData.interests || "",
      }));
    }
  }, [cvData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateLetter = async () => {
    setLoading(true);
    setGeneratedLetter("");
    try {
      const response = await axios.post(
        "https://cv-generator-93on.onrender.com/generate-cover-letter",
        form
      );
      setGeneratedLetter(response.data.letter);
    } catch (err) {
      console.error("❌ Erreur :", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Générer ma lettre de motivation</h1>

      {Object.entries(form).map(([key, value]) => (
        <div key={key} className="mb-4">
          <label className="block font-semibold mb-1">
            {fieldLabels[key] || key}
          </label>
          {(key === "experiences" || key === "interests") ? (
            <textarea
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          )}
        </div>
      ))}

      <button
        onClick={generateLetter}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Générer
      </button>

      {loading && (
        <div className="mt-6 flex justify-center items-center gap-2 text-gray-600">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <span>Génération de la lettre en cours...</span>
        </div>
      )}

      {generatedLetter && (
        <>
          <div className="mt-6">
            <label className="block font-semibold mb-2">Lettre générée (modifiable) :</label>
            <textarea
              value={generatedLetter}
              onChange={(e) => setGeneratedLetter(e.target.value)}
              rows={10}
              className="w-full border border-gray-300 rounded px-3 py-2 whitespace-pre-wrap"
            />
          </div>

          <div className="text-center mt-4">
            <PDFDownloadLink
              document={<CoverLetterPDF letterText={generatedLetter} />}
              fileName="lettre-de-motivation.pdf"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              {({ loading }) =>
                loading ? "Génération PDF..." : "📄 Télécharger la lettre en PDF"
              }
            </PDFDownloadLink>
          </div>
        </>
      )}
    </div>
  );
}
