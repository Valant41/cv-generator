import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Titre */}
        <h1 className="text-2xl font-bold text-gray-800 text-center sm:text-left mb-2 sm:mb-0">
          Générateur de CV
        </h1>

        {/* Liens */}
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-blue-600 text-sm sm:text-base text-center">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>
          <Link to="/generateur-cv" className="hover:underline">
            Créer un CV
          </Link>
          <Link to="/lettre-de-motivation" className="hover:underline">
            Lettre de motivation
          </Link>
        </nav>
      </div>
    </header>
  );
}
