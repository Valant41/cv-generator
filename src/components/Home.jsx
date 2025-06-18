import { Link } from "react-router-dom";
import cvImage from "../assets/images/cv-example.png";
import contentImage from "../assets/images/content-optimization.png";
import lettreImage from "../assets/images/motivation-letter.png";

export default function Home() {
  return (
    <div className="bg-base-100 text-gray-800">

      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Votre CV est ignoré ? 📄</h1>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Adaptez-le aux recruteurs et aux logiciels de tri automatique (ATS) grâce à notre générateur intelligent.
          </p>
          <img
            src={cvImage}
            alt="Exemple de CV"
            className="mx-auto max-w-full sm:max-w-sm rounded shadow-md mb-6"
          />
          <Link to="/generateur-cv" className="btn btn-primary text-white px-8">
            Optimiser mon CV maintenant
          </Link>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">Obtenez votre CV professionnel en 3 étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl text-green-500 mb-2">1️⃣</div>
              <h3 className="font-semibold mb-2">Choisissez un modèle optimisé</h3>
              <p className="text-gray-600">Créé pour passer les filtres ATS des recruteurs.</p>
            </div>
            <div>
              <div className="text-4xl text-green-500 mb-2">2️⃣</div>
              <h3 className="font-semibold mb-2">Ajoutez vos infos ou utilisez l’IA</h3>
              <p className="text-gray-600">Notre assistant IA complète ou reformule vos expériences.</p>
            </div>
            <div>
              <div className="text-4xl text-green-500 mb-2">3️⃣</div>
              <h3 className="font-semibold mb-2">Prévisualisez et téléchargez</h3>
              <p className="text-gray-600">Générez le PDF en 1 clic, sans inscription.</p>
            </div>
          </div>
          <Link to="/generateur-cv" className="btn btn-success mt-10">
            Créer mon CV
          </Link>
        </div>
      </section>

      {/* Optimisation IA */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">🎯 Optimisez votre contenu avec l’IA</h2>
            <p className="text-gray-700 mb-6">
              Générez automatiquement des phrases d'accroche, reformulez vos expériences
              ou laissez l'assistant s’occuper de tout. C’est rapide, clair, professionnel.
            </p>
            <Link to="/generateur-cv" className="btn btn-primary">
              Créer mon CV avec IA
            </Link>
          </div>
          <img
            src={contentImage}
            alt="Optimisation IA"
            className="rounded shadow-md max-w-full h-auto"
          />
        </div>
      </section>

      {/* Lettre de motivation */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <img
            src={lettreImage}
            alt="Lettre de motivation"
            className="rounded shadow-md max-w-full h-auto"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">💌 Lettre de motivation sur-mesure</h2>
            <p className="text-gray-700 mb-6">
              Notre outil IA rédige automatiquement une lettre adaptée à votre profil, au poste visé
              et cohérente avec votre CV.
            </p>
            <Link to="/lettre-de-motivation" className="btn btn-accent text-white">
              Générer ma lettre
            </Link>
          </div>
        </div>
      </section>

      {/* Appel final */}
      <section className="py-16 text-center px-4 bg-gradient-to-r from-green-50 to-white">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Prêt à vous démarquer ?</h2>
        <p className="mb-6 text-gray-600">Commencez gratuitement, sans inscription.</p>
        <Link to="/generateur-cv" className="btn btn-success px-10 text-white">
          🧾 Commencer mon CV
        </Link>
      </section>
    </div>
  );
}
