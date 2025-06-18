
import { useState } from "react";

export default function CVForm({ onSubmit, initialData = {} }) {
  const [fullName, setFullName] = useState(initialData.fullName || "");
  const [jobTitle, setJobTitle] = useState(initialData.jobTitle || "");
  const [education, setEducation] = useState(initialData.education || "");
  const [skills, setSkills] = useState(initialData.skills || "");
  const [experience, setExperience] = useState(initialData.experience || "");
  const [profileImage, setProfileImage] = useState(initialData.profileImage || null);
  const [imagePreview, setImagePreview] = useState(initialData.profileImage || null);
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

  const Spinner = () => (
    <svg
      className="animate-spin h-4 w-4 mr-2 text-gray-500 inline"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      fullName,
      jobTitle,
      education,
      skills,
      experience,
      profileImage: imagePreview,
      email,
      city,
      phone,
      interests,
      aboutMe,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10 items-start">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">🧾 Créer mon CV</h2>
        <p className="text-gray-600 text-sm bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          Remplissez ce formulaire pour générer automatiquement un CV professionnel en PDF.
          Visualisation en direct à droite.
        </p>

        <div>
          <label className="block font-medium text-sm mb-1">Photo de profil</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Aperçu" className="mt-3 w-24 h-24 rounded-full object-cover shadow" />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nom complet" className="input input-bordered w-full" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input type="text" placeholder="Poste visé" className="input input-bordered w-full" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
          <input type="email" placeholder="Email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder="Ville" className="input input-bordered w-full" value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Téléphone" className="input input-bordered w-full col-span-2" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <textarea placeholder="À propos de moi" className="textarea textarea-bordered w-full" rows={4} value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} />
        <textarea placeholder="Centres d’intérêt (ex : sport, voyage...)" className="textarea textarea-bordered w-full" rows={2} value={interests} onChange={(e) => setInterests(e.target.value)} />
        <textarea placeholder="Formation actuelle" className="textarea textarea-bordered w-full" rows={2} value={education} onChange={(e) => setEducation(e.target.value)} />
        <textarea placeholder="Compétences (ex : JavaScript, React...)" className="textarea textarea-bordered w-full" rows={2} value={skills} onChange={(e) => setSkills(e.target.value)} />
        <textarea placeholder="Résumé de l’expérience" className="textarea textarea-bordered w-full" rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} />

        <button type="submit" className="btn btn-primary w-full mt-4">Générer mon CV</button>
      </form>

      <div className="bg-gray-50 rounded-lg p-6 shadow-md hidden md:block">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Aperçu en direct</h3>
        <div className="space-y-2">
          {imagePreview && <img src={imagePreview} alt="preview" className="w-20 h-20 object-cover rounded-full shadow" />}
          <p className="text-xl font-semibold">{fullName}</p>
          <p className="text-sm text-gray-600">{jobTitle}</p>
          <p className="text-sm">{email}</p>
          <p className="text-sm text-gray-600">{city}</p>
          <p className="text-sm mt-4 whitespace-pre-wrap">{aboutMe}</p>
          <div className="pt-4 text-sm text-gray-600">
            {education && <p><strong>Formation :</strong> {education}</p>}
            {skills && <p><strong>Compétences :</strong> {skills}</p>}
            {experience && <p><strong>Expérience :</strong> {experience}</p>}
            {interests && <p><strong>Intérêts :</strong> {interests}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
