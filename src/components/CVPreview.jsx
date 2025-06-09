export default function CVPreview({ data }) {
  const { fullName, jobTitle, education, skills, experience, languages, formations, experiences } = data;
  const skillList = skills?.split(",").map((s) => s.trim()) || [];

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
      
      {/* 🧱 Colonne gauche : fond gris clair */}
      <div className="bg-gray-100 p-6 rounded-xl space-y-6 h-fit">
        
        {/* 🧑‍💼 Profil */}
        <div>
          <h2 className="text-lg font-bold">Profil</h2>
          <p>
            Candidat motivé, rigoureux et passionné par les nouvelles technologies.
          </p>
        </div>

        {/* 🧰 Compétences */}
        <div>
          <h2 className="text-lg font-bold">Compétences</h2>
          <ul className="list-disc list-inside">
            {skillList.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* 🌍 Langues avec barres de progression */}
        <div>
          <h2 className="text-lg font-bold">Langues</h2>
          <div className="space-y-3">
            {languages &&
              languages
                .sort((a, b) => b.level - a.level)
                .map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.lang}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-black h-2.5 rounded-full transition-all"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* 📄 Colonne droite */}
      <div className="md:col-span-2 space-y-6">
        
        {/* 🧑‍🎓 En-tête */}
        <header className="border-b pb-4">
          <h1 className="text-3xl font-bold">{fullName}</h1>
          <p className="text-xl text-gray-600">{jobTitle}</p>
        </header>

        {/* 💼 Expériences dynamiques */}
        <section>
          <h2 className="text-lg font-bold mb-2">Expérience professionnelle</h2>
          {experiences && experiences.length > 0 ? (
            experiences
              .sort((a, b) => parseInt(b.endYear) - parseInt(a.endYear))
              .map((exp, i) => (
                <div key={i} className="mb-4 grid grid-cols-4 gap-4">
                  <div className="col-span-1 text-sm text-gray-500">
                    {exp.startYear} – {exp.endYear}
                  </div>
                  <div className="col-span-3">
                    <p className="font-semibold uppercase">{exp.position}</p>
                    <p className="text-sm text-gray-700">{exp.company}</p>
                    {exp.description && (
                      <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))
          ) : (
            <p>{experience || "Pas d'expérience saisie pour l’instant."}</p>
          )}
        </section>

        {/* 🎓 Formations dynamiques */}
        <section>
          <h2 className="text-lg font-bold mb-2">Formations</h2>
          {formations &&
            formations
              .sort((a, b) => parseInt(b.endYear) - parseInt(a.endYear))
              .map((f, i) => (
                <div key={i} className="mb-4 grid grid-cols-4 gap-4">
                  <div className="col-span-1 text-sm text-gray-500">
                    {f.startYear} – {f.endYear}
                  </div>
                  <div className="col-span-3">
                    <p className="font-semibold uppercase">{f.degree}</p>
                    <p className="text-sm text-gray-700">{f.school}</p>
                    {f.description && (
                      <p className="text-sm text-gray-600 mt-1">{f.description}</p>
                    )}
                  </div>
                </div>
              ))}
        </section>
      </div>
    </div>
  );
}
