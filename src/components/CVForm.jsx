import { useState } from "react";

export default function CVForm({ onSubmit, initialData = {} }) {
  const [fullName, setFullName] = useState(initialData.fullName || "");
  const [jobTitle, setJobTitle] = useState(initialData.jobTitle || "");
  const [education, setEducation] = useState(initialData.education || "");
  const [skills, setSkills] = useState(initialData.skills || "");
  const [experience, setExperience] = useState(initialData.experience || "");

  const [profileImage, setProfileImage] = useState(initialData.profileImage || null);
  const [imagePreview, setImagePreview] = useState(initialData.profileImage || null);

  const [languages, setLanguages] = useState(initialData.languages || []);
  const [selectedLang, setSelectedLang] = useState("");
  const [customLang, setCustomLang] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formations, setFormations] = useState(initialData.formations || []);
  const [newFormation, setNewFormation] = useState({
    degree: "",
    school: "",
    description: "",
    startYear: "",
    endYear: "",
  });

  const [experiences, setExperiences] = useState(initialData.experiences || []);
  const [newExperience, setNewExperience] = useState({
    position: "",
    company: "",
    description: "",
    startYear: "",
    endYear: "",
  });
  const [email, setEmail] = useState(initialData.email || "");
  const [city, setCity] = useState(initialData.city || "");
  const [aboutMe, setAboutMe] = useState(initialData.aboutMe || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [interests, setInterests] = useState(initialData.interests || "");
  const [loadingAbout, setLoadingAbout] = useState(false);





  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addLanguage = () => {
    const langToAdd = selectedLang === "Autre" ? customLang.trim() : selectedLang;
    if (!langToAdd || !selectedLevel) return;

    const isDuplicate = languages.some(
      (l) => l.lang.toLowerCase() === langToAdd.toLowerCase()
    );

    if (isDuplicate) {
      setErrorMsg("Cette langue a déjà été saisie.");
      return;
    }

    setLanguages([...languages, { lang: langToAdd, level: selectedLevel }]);
    setSelectedLang("");
    setCustomLang("");
    setSelectedLevel("");
    setErrorMsg("");
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
    setErrorMsg("");
  };

  const addFormation = () => {
    const { degree, school, description, startYear, endYear } = newFormation;
    if (degree && school && startYear && endYear) {
      setFormations([...formations, newFormation]);
      setNewFormation({
        degree: "",
        school: "",
        description: "",
        startYear: "",
        endYear: "",
      });
    }
  };

  const removeFormation = (index) => {
    setFormations(formations.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    const { position, company, description, startYear, endYear } = newExperience;
    if (position && company && startYear && endYear) {
      setExperiences([...experiences, newExperience]);
      setNewExperience({
        position: "",
        company: "",
        description: "",
        startYear: "",
        endYear: "",
      });
    }
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cvData = {
      fullName,
      jobTitle,
      education,
      skills,
      experience,
      languages,
      formations,
      experiences,
      profileImage: imagePreview,
      email,
      city,
      phone,
      interests,
      aboutMe,
    };
    onSubmit(cvData);
  };

  const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 mr-2 text-gray-500 inline"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
);


  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white text-black shadow-md rounded-xl space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Créer / Modifier mon CV</h2>

    <p className="mb-6 text-sm text-gray-600 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
      Remplissez le formulaire ci-dessous pour générer automatiquement un CV professionnel en PDF.
      Vous pouvez le modifier, le visualiser et le télécharger librement. Ce service est 100% gratuit.
    </p>


      {/* Image de profil */}
      <div>
        <label className="block text-sm font-medium">Photo de profil</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1" />
        {imagePreview && (
          <div className="mt-3">
            <img src={imagePreview} alt="Aperçu" className="w-32 h-32 object-cover rounded-full shadow-md" />
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-blue-700 mt-6">📌 Coordonnées</h3>

      <div>
        <label className="block text-sm font-medium">Nom complet</label>
        <input type="text" className="w-full mt-1 p-2 border rounded-md" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full mt-1 p-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Ville</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded-md"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Téléphone</label>
        <input
          type="tel"
          className="w-full mt-1 p-2 border rounded-md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+33 6 12 34 56 78"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Centres d’intérêt</label>
        <textarea
          rows="2"
          className="w-full mt-1 p-2 border rounded-md"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Ex : Musique, sport, voyage..."
        />
      </div>



      {/* Champs principaux */}
      <h3 className="text-lg font-semibold text-blue-700 mt-6">🎓 Formation actuelle & Compétences</h3>

      <div>
        <label className="block text-sm font-medium">Poste visé</label>
        <input type="text" className="w-full mt-1 p-2 border rounded-md" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
      </div>

      <div>
        <label className="block text-sm font-medium">Formation actuelle (résumé)</label>
        <input type="text" className="w-full mt-1 p-2 border rounded-md" value={education} onChange={(e) => setEducation(e.target.value)} />
      </div>

      <div>
        <label className="block text-sm font-medium">Compétences (séparées par des virgules)</label>
        <input type="text" className="w-full mt-1 p-2 border rounded-md" value={skills} onChange={(e) => setSkills(e.target.value)} />
      </div>

      <div>
        <label className="block text-sm font-medium">Résumé d'expérience (facultatif)</label>
        <textarea className="w-full mt-1 p-2 border rounded-md" rows="3" value={experience} onChange={(e) => setExperience(e.target.value)}></textarea>
      </div>

      <div>
  <label className="block text-sm font-medium">À propos de moi</label>
  <textarea
    rows={4}
    className="w-full mt-1 p-2 border rounded-md"
    value={aboutMe}
    onChange={(e) => setAboutMe(e.target.value)}
    placeholder="Ex : Passionné par le développement web, je suis rigoureux, autonome et motivé..."
  />
  <button
  type="button"
  onClick={async () => {
    setLoadingAbout(true);
    try {
      const response = await fetch("https://cv-generator-93on.onrender.com/generate-about-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, jobTitle, education, skills, interests, languages }),
      });

      const data = await response.json();
      if (response.ok) {
        setAboutMe(data.aboutMe);
      } else {
        console.error("Erreur IA:", data.error);
      }
    } catch (err) {
      console.error("Erreur requête:", err);
    } finally {
      setLoadingAbout(false);
    }
  }}
  disabled={loadingAbout}
  className={`mt-2 px-3 py-1 rounded-md text-sm flex items-center ${
    loadingAbout
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
  }`}
>
  {loadingAbout ? (
    <>
      <Spinner />
      Génération...
    </>
  ) : (
    "✨ Générer automatiquement"
  )}
</button>

</div>


      {/* Langues */}
      <h3 className="text-lg font-semibold text-blue-700 mt-6">🌍 Langues parlées</h3>
      <div>
        <label className="block text-sm font-medium mb-1">Langues parlées</label>
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)} className="w-full md:w-1/3 p-2 border rounded-md">
            <option value="">Choisir une langue</option>
            {["Français", "Anglais", "Espagnol", "Allemand", "Italien", "Autre"]
              .filter(lang => lang === "Autre" || !languages.some(l => l.lang.toLowerCase() === lang.toLowerCase()))
              .map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
          </select>

          {selectedLang === "Autre" && (
            <input type="text" placeholder="Langue" className="w-full md:w-1/3 p-2 border rounded-md" value={customLang} onChange={(e) => setCustomLang(e.target.value)} />
          )}

          <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="w-full md:w-1/3 p-2 border rounded-md">
            <option value="">Niveau</option>
            <option value="100">Langue maternelle</option>
            <option value="80">Professionnel</option>
            <option value="60">Intermédiaire</option>
            <option value="40">Débutant</option>
          </select>

          <button type="button" onClick={addLanguage} className="bg-blue-500 text-white px-3 py-1 rounded-md">+</button>
        </div>

        {errorMsg && <p className="text-red-500 text-sm mb-2">{errorMsg}</p>}

        <ul className="text-sm text-gray-700 space-y-1">
          {languages.sort((a, b) => b.level - a.level).map((item, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-100 px-3 py-1 rounded">
              <span>{item.lang} — {item.level === "100" ? "Langue maternelle" : item.level === "80" ? "Professionnel" : item.level === "60" ? "Intermédiaire" : "Débutant"}</span>
              <button type="button" onClick={() => removeLanguage(i)} className="text-red-500 font-bold ml-2">×</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Formations */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-blue-700 mt-6">🎓 Parcours scolaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input type="text" placeholder="Diplôme" className="p-2 border rounded-md" value={newFormation.degree} onChange={(e) => setNewFormation({ ...newFormation, degree: e.target.value })} />
          <input type="text" placeholder="Établissement" className="p-2 border rounded-md" value={newFormation.school} onChange={(e) => setNewFormation({ ...newFormation, school: e.target.value })} />
          <input type="text" placeholder="Année de début" className="p-2 border rounded-md" value={newFormation.startYear} onChange={(e) => setNewFormation({ ...newFormation, startYear: e.target.value })} />
          <input type="text" placeholder="Année de fin" className="p-2 border rounded-md" value={newFormation.endYear} onChange={(e) => setNewFormation({ ...newFormation, endYear: e.target.value })} />
          <textarea placeholder="Description" className="md:col-span-2 p-2 border rounded-md" value={newFormation.description} onChange={(e) => setNewFormation({ ...newFormation, description: e.target.value })}></textarea>
        </div>
        <button type="button" onClick={addFormation} className="bg-blue-500 text-white px-4 py-1 rounded-md mt-1">Ajouter</button>
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          {formations.map((f, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded">
              <span>{f.startYear} - {f.endYear} • <strong>{f.degree}</strong>, {f.school}</span>
              <button type="button" onClick={() => removeFormation(i)} className="text-red-500 font-bold ml-2">×</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Expériences */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-blue-700 mt-6">💼 Expériences professionnelles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input type="text" placeholder="Poste" className="p-2 border rounded-md" value={newExperience.position} onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })} />
          <input type="text" placeholder="Entreprise" className="p-2 border rounded-md" value={newExperience.company} onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })} />
          <input type="text" placeholder="Année de début" className="p-2 border rounded-md" value={newExperience.startYear} onChange={(e) => setNewExperience({ ...newExperience, startYear: e.target.value })} />
          <input type="text" placeholder="Année de fin" className="p-2 border rounded-md" value={newExperience.endYear} onChange={(e) => setNewExperience({ ...newExperience, endYear: e.target.value })} />
          <textarea placeholder="Description" className="md:col-span-2 p-2 border rounded-md" value={newExperience.description} onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}></textarea>
        </div>
        <button type="button" onClick={addExperience} className="bg-blue-500 text-white px-4 py-1 rounded-md mt-1">Ajouter</button>
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          {experiences.map((exp, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded">
              <span>{exp.startYear} - {exp.endYear} • <strong>{exp.position}</strong>, {exp.company}</span>
              <button type="button" onClick={() => removeExperience(i)} className="text-red-500 font-bold ml-2">×</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bouton final */}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        Générer mon CV
      </button>
    </form>
  );
}
