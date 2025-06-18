import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mt-10 rounded shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        🎯 Bienvenue sur notre générateur de CV et de lettres de motivation
      </h1>
      <p className="text-gray-600 text-justify mb-6">
        Ce site a été conçu pour aider les étudiants, jeunes diplômés et professionnels à créer rapidement des CV modernes et des lettres de motivation convaincantes. Grâce à l’intelligence artificielle, vous pouvez générer vos documents gratuitement, sans inscription, directement dans votre navigateur.
      </p>

      <h2 className="text-2xl font-semibold mb-3">📚 À qui s’adresse ce service ?</h2>
      <p className="text-gray-700 mb-6 text-justify">
        Ce générateur s’adresse à toute personne cherchant à postuler à un emploi ou un stage : étudiants, jeunes actifs, freelances, ou même salariés en reconversion. Nous avons voulu rendre la création de documents professionnels simple, rapide et gratuite.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">✨ Fonctionnalités clés</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Création intuitive de CV avec l’IA</li>
          <li>Prévisualisation instantanée du rendu PDF</li>
          <li>Génération automatique de lettres de motivation</li>
          <li>Export en PDF 100 % gratuit</li>
          <li>Aucune donnée stockée, aucune inscription nécessaire</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🛠️ Comment ça fonctionne ?</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Remplissez le formulaire avec vos informations</li>
          <li>Visualisez instantanément le rendu de votre CV</li>
          <li>Modifiez si nécessaire, puis téléchargez gratuitement</li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🔐 Respect de la vie privée</h2>
        <p className="text-gray-700 text-justify">
          Aucune information personnelle n’est enregistrée sur nos serveurs. Toutes les données que vous saisissez restent localement sur votre appareil. Nous ne collectons aucune statistique ni donnée comportementale.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">📣 Pourquoi ce site existe ?</h2>
        <p className="text-gray-700 text-justify">
          Ce projet a été développé dans un but éducatif et d’entraide. L’objectif est d’aider un maximum de personnes à décrocher un emploi en leur fournissant gratuitement des outils simples, efficaces et professionnels.
        </p>
      </div>

      <p className="text-sm text-gray-500 text-center mb-8">
        Ce site est <strong className="text-black">100 % gratuit</strong>. Aucune donnée n’est conservée. Tout est traité localement dans votre navigateur.
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
