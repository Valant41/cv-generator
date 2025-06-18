import { Link } from "react-router-dom";

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Mentions légales</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Éditeur du site</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Nom :</strong> Valentin (particulier) <br />
          <strong>Adresse :</strong> Non communiquée (résidence privée) <br />
          <strong>Email :</strong>{" "}
          <a href="mailto:valant045@hotmail.com" className="text-blue-600 hover:underline">
            valant045@hotmail.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">💻 Hébergement</h2>
        <p className="text-gray-700 leading-relaxed">
          Le site <strong>CV Generator IA</strong> est hébergé par :
          <br />
          <strong>Vercel Inc.</strong> – 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          <br />
          Site officiel :{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            vercel.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📄 Propriété intellectuelle</h2>
        <p className="text-gray-700 leading-relaxed">
          Le contenu de ce site (textes, visuels, code, fonctionnalités) est protégé par le droit d’auteur.  
          Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">⚠️ Responsabilité</h2>
        <p className="text-gray-700 leading-relaxed">
          L’éditeur ne peut être tenu responsable de l’utilisation des outils proposés ou des conséquences liées à leur usage.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-6">
        Ces mentions légales sont susceptibles d’évoluer en fonction du statut ou des conditions du site.
      </p>

      <div className="text-center mt-8">
        <Link to="/" className="text-blue-600 font-medium hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
