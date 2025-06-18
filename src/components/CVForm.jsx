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

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10 items-start">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">🧾 Créer mon CV</h2>
        <p className="text-gray-600 text-sm bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          Remplissez ce formulaire pour générer automatiquement un CV professionnel en PDF. Visualisation en direct à droite.
        </p>

        {/* Photo */}
        <div>
          <label className="block font-medium text-sm mb-1">Photo de profil</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Aperçu" className="mt-3 w-24 h-24 rounded-full object-cover shadow" />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Nom complet</label>
            <input type="text" className="input input-bordered w-full" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Poste visé</label>
            <input type="text" className="input input-bordered w-full" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Ville</label>
            <input type="text" className="input input-bordered w-full" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">À propos de moi</label>
          <textarea
            rows={4}
            className="textarea textarea-bordered w-full"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            placeholder="Parlez brièvement de vous ici..."
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">Générer mon CV</button>
      </form>

      {/* Aperçu à droite */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-md hidden md:block">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Aperçu en direct</h3>
        <div className="space-y-2">
          {imagePreview && <img src={imagePreview} alt="preview" className="w-20 h-20 object-cover rounded-full shadow" />}
          <p className="text-xl font-semibold">{fullName}</p>
          <p className="text-sm text-gray-600">{jobTitle}</p>
          <p className="text-sm">{email}</p>
          <p className="text-sm text-gray-600">{city}</p>
          <p className="text-sm mt-4 whitespace-pre-wrap">{aboutMe}</p>
        </div>
      </div>
    </div>
  );
}
