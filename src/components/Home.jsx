import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-base-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-xl">
        {/* HERO */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-4">
            🎯 Créez un CV professionnel et une lettre de motivation en quelques minutes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grâce à notre IA, créez des documents de candidature modernes, personnalisés
            et gratuits. Sans inscription, sans publicité, tout est traité localement.
          </p>
        </div>

        {/* Sections Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Pourquoi un bon CV ? */}
          <div>
            <h2 className="text-xl font-semibold mb-2">📌 Pourquoi un bon CV est-il crucial ?</h2>
            <p className="text-gray-700">
              Les recruteurs passent moins de 10 secondes par CV. Notre outil vous aide
              à créer un CV clair, percutant et visuellement professionnel, même sans compétence en design.
            </p>
          </div>

          {/* À qui s'adresse le service ? */}
          <div>
            <h2 className="text-xl font-semibold mb-2">📚 À qui s’adresse ce service ?</h2>
            <p className="text-gray-700">
              Étudiants, jeunes diplômés, salariés en reconversion, freelances... Ce service
              s’adresse à toute personne souhaitant postuler efficacement.
            </p>
          </div>

          {/* Fonctionnalités */}
          <div>
            <h2 className="text-xl font-semibold mb-2">✨ Fonctionnalités principales</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Génération de CV assistée par IA</li>
              <li>Prévisualisation PDF instantanée</li>
              <li>Lettre de motivation générée automatiquement</li>
              <li>Export en PDF 100 % gratuit</li>
              <li>Aucune inscription</li>
            </ul>
          </div>

          {/* Vie privée */}
          <div>
            <h2 className="text-xl font-semibold mb-2">🔐 Respect de la vie privée</h2>
            <p className="text-gray-700">
              Aucune donnée n’est stockée ni envoyée sur nos serveurs. Vos documents sont générés
              localement dans votre navigateur, pour une confidentialité maximale.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">❓ Questions fréquentes</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>📌 Le service est-il gratuit ?</strong><br />Oui, à 100 %.</p>
            <p><strong>🛡️ Où sont stockées mes données ?</strong><br />Uniquement dans votre navigateur.</p>
            <p><strong>✏️ Puis-je modifier le contenu ?</strong><br />Oui, autant de fois que nécessaire.</p>
            <p><strong>📩 Contact ?</strong><br />Par e-mail à <a className="link" href="mailto:valant045@hotmail.com">valant045@hotmail.com</a></p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/generateur-cv" className="btn btn-primary text-white">
            🧾 Commencer mon CV
          </Link>
          <Link to="/lettre-de-motivation" className="btn btn-success text-white">
            📨 Générer ma lettre de motivation
          </Link>
        </div>
      </div>
    </div>
  );
}
