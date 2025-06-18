import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mt-10 rounded shadow-md">
      
      <button className="btn btn-primary">Test DaisyUI</button>

      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        🎯 Bienvenue sur CV Generator IA, votre outil gratuit pour créer un CV et une lettre de motivation
      </h1>

      <p className="text-gray-600 mb-6 text-center">
        CV Generator IA a été conçu pour vous aider à créer un CV professionnel et une lettre de motivation personnalisée facilement, gratuitement et sans inscription. Grâce à l’intelligence artificielle, vous obtenez un résultat rapide, propre et efficace, directement depuis votre navigateur.
      </p>

      {/* Pourquoi un bon CV est important */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">📌 Pourquoi un bon CV est-il crucial ?</h2>
        <p className="text-gray-700">
          Un recruteur passe en moyenne moins de 10 secondes sur un CV. Il est donc essentiel d’avoir un document clair, structuré et pertinent pour se démarquer. Ce générateur vous permet d’atteindre cet objectif en quelques minutes, même sans compétences en design.
        </p>
      </div>

      {/* À qui s'adresse ce service */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">📚 À qui s'adresse ce service ?</h2>
        <p className="text-gray-700">
          Aux étudiants, jeunes diplômés, professionnels en reconversion ou freelance. Bref, toute personne souhaitant postuler efficacement avec un CV moderne et une lettre de motivation convaincante.
        </p>
      </div>

      {/* Fonctionnalités */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">✨ Fonctionnalités principales</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Création intuitive de CV avec l’IA</li>
          <li>Prévisualisation instantanée du rendu PDF</li>
          <li>Génération automatique de lettre de motivation</li>
          <li>Export en PDF 100 % gratuit</li>
          <li>Aucune inscription requise</li>
        </ul>
      </div>

      {/* Comment ça fonctionne */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">⚙️ Comment ça fonctionne ?</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Remplissez le formulaire avec vos informations</li>
          <li>Visualisez instantanément le rendu PDF</li>
          <li>Téléchargez ou modifiez gratuitement</li>
        </ol>
      </div>

      {/* Respect de la vie privée */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🔐 Respect de la vie privée</h2>
        <p className="text-gray-700">
          Aucune donnée personnelle n’est stockée ou envoyée sur un serveur. Tout est traité localement dans votre navigateur. Ce site ne collecte aucune information ni statistique sur votre utilisation.
        </p>
      </div>

      {/* À propos du projet */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🧑‍💻 À propos du projet</h2>
        <p className="text-gray-700">
          Ce projet a été développé dans un but éducatif et d'entraide. L'objectif est de fournir gratuitement un outil utile et accessible pour aider chacun à créer des documents professionnels de qualité sans frais ni inscription.
        </p>
      </div>

      {/* FAQ */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">❓ Questions fréquentes</h2>
        <ul className="text-gray-700 space-y-2">
          <li><strong>📌 Le service est-il vraiment gratuit ?</strong><br />Oui, totalement. Aucun paiement ou compte requis.</li>
          <li><strong>🛡️ Où sont stockées mes données ?</strong><br />Nulle part. Tout reste dans votre navigateur.</li>
          <li><strong>✏️ Puis-je modifier mon CV après l’avoir généré ?</strong><br />Oui, vous pouvez revenir en arrière et ajuster vos données à tout moment.</li>
          <li><strong>📩 Comment vous contacter ?</strong><br />Via la page “Contact” ou à l’adresse valant045@hotmail.com</li>
        </ul>
      </div>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
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
