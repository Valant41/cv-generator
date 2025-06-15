import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mt-10 rounded shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        🎯 Bienvenue sur notre générateur de CV et de lettres de motivation
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Générez facilement un CV professionnel et une lettre de motivation
        personnalisée grâce à l’intelligence artificielle. Tout est gratuit,
        rapide et sans inscription.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">✨ Fonctionnalités</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Création intuitive de CV avec l’IA</li>
          <li>Prévisualisation instantanée du rendu PDF</li>
          <li>Lettre de motivation générée automatiquement</li>
          <li>Export en PDF 100 % gratuit</li>
          <li>Aucune inscription nécessaire</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🛠️ Comment ça fonctionne ?</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Remplissez le formulaire avec vos infos</li>
          <li>Visualisez votre CV en direct</li>
          <li>Téléchargez ou modifiez le PDF si besoin</li>
        </ol>
      </div>

      <p className="text-sm text-gray-500 text-center mb-8">
        Ce site est <strong className="text-black">100 % gratuit</strong>. Aucune donnée n’est conservée.
        Tout est traité localement dans votre navigateur.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/generateur-cv"
          className="bg-blue-600 text-white text-center px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          🧾 Commencer mon CV
        </Link>
        <Link
          to="/lettre-de-motivation"
          className="bg-green-600 text-white text-center px-6 py-3 rounded hover:bg-green-700 transition"
        >
          📨 Générer ma lettre de motivation
        </Link>
      </div>
    </div>
  );
}
