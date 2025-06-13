import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CoverLetterPDF from "./CoverLetterPDF";

export default function CoverLetterForm() {
  const location = useLocation();
  const cvData = location.state?.cvData;

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
        experiences: typeof cvData.experiences === "string"
  ? cvData.experiences
  : Array.isArray(cvData.experiences)
    ? cvData.experiences.map(e => `${e.position} chez ${e.company}`).join(", ")
    : "",

        interests: cvData.interests || "",
      }));
    }
  }, [cvData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateLetter = async () => {
  console.log("🟢 Bouton Générer cliqué !");
  console.log("📤 Données envoyées au backend :", form);

  try {
    const response = await axios.post(
      "https://cv-generator-93on.onrender.com/generate-cover-letter",
      form
    );

    console.log("✅ Réponse reçue du backend :", response.data);
    setGeneratedLetter(response.data.letter);
  } catch (err) {
    console.error("❌ Erreur lors de la génération :", err.response?.data || err.message);
  }
};


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Générer ma lettre de motivation</h1>

      {Object.entries(form).map(([key, value]) => (
        <div key={key} className="mb-4">
          <label className="block font-semibold mb-1 capitalize">
            {key.replace(/([A-Z])/g, ' $1')}
          </label>
          {key === "experiences" || key === "interests" ? (
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

      {generatedLetter && (
        <>
          <div className="mt-6 p-4 border border-gray-300 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Lettre générée :</h2>
            <p className="whitespace-pre-wrap">{generatedLetter}</p>
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
