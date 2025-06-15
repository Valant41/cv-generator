import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Bienvenue sur notre générateur de CV et de lettres de motivation</h1>

      <p className="mb-4 text-gray-700">
        Ce site a été conçu pour aider les étudiants, les jeunes diplômés et les professionnels à créer des CV clairs, modernes et professionnels. 
        En quelques minutes, vous pouvez générer un CV complet et une lettre de motivation personnalisée à partir de vos informations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">✨ Fonctionnalités principales</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Création facile et intuitive de CV en ligne avec l'aide de l'IA</li>
        <li>Prévisualisation instantanée du rendu PDF</li>
        <li>Génération automatique de lettre de motivation avec l'aide de l'IA</li>
        <li>Export en PDF gratuit</li>
        <li>Aucune inscription requise</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">🛠️ Comment ça fonctionne ?</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Remplissez vos informations via le formulaire</li>
        <li>Visualisez votre CV en direct</li>
        <li>Téléchargez le fichier PDF ou modifiez-le si nécessaire</li>
      </ol>

      <p className="mt-6 text-gray-700">
        Ce site est <strong>100 % gratuit</strong>. Aucune donnée personnelle n’est conservée. Tous les traitements sont effectués localement ou temporairement pour générer vos documents.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          🎓 Commencer mon CV
        </Link>
        <Link
          to="/lettre-de-motivation"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          📨 Générer ma lettre de motivation
        </Link>
      </div>
    </div>
  );
}
