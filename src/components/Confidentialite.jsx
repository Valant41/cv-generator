import { Link } from "react-router-dom";

export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Politique de confidentialité</h1>

      <p className="mb-2">
        Nous respectons votre vie privée. Les données collectées via notre générateur de CV et de lettres de motivation ne sont ni vendues, ni partagées avec des tiers.
      </p>
      <p className="mb-2">
        Les informations que vous saisissez restent localement sur votre navigateur ou sont utilisées temporairement pour générer vos documents. Aucun traitement commercial ou marketing n’est effectué avec ces données.
      </p>
      <p className="mb-4">
        Pour toute question, vous pouvez nous contacter à l'adresse suivante :{" "}
        <a href="mailto:valant045@hotmail.com" className="text-blue-600 underline">
          valant045@hotmail.com
        </a>
      </p>

      <div className="text-center mt-6">
        <Link to="/" className="text-blue-600 underline hover:text-blue-800">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
