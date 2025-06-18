import { Link } from "react-router-dom";

export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Politique de confidentialité
      </h1>

      <section className="mb-6">
        <p className="text-gray-800 text-lg leading-relaxed">
          Votre vie privée est une priorité. Ce site a été conçu pour respecter
          vos données personnelles et garantir une utilisation en toute
          confiance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Données collectées</h2>
        <p className="text-gray-700 leading-relaxed">
          Aucune donnée personnelle n’est stockée sur nos serveurs. Les
          informations saisies (CV, lettre de motivation, coordonnées) restent
          localement dans votre navigateur ou sont utilisées temporairement pour
          générer vos documents PDF.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🔐 Utilisation des données</h2>
        <p className="text-gray-700 leading-relaxed">
          Aucune information n’est vendue, partagée ou exploitée à des fins
          commerciales ou publicitaires. Nous ne collectons ni adresse IP, ni
          cookies, ni historique de navigation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📫 Contact</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour toute question relative à votre vie privée ou à l'utilisation de
          vos données, vous pouvez nous contacter à :
          <br />
          <a
            href="mailto:valant045@hotmail.com"
            className="text-blue-600 hover:underline"
          >
            valant045@hotmail.com
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-4">
        Cette politique de confidentialité est susceptible d’évoluer afin de
        respecter la législation en vigueur ou en cas d’évolution du service.
      </p>

      <div className="text-center mt-8">
        <Link to="/" className="text-blue-600 font-medium hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
