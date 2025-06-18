import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="text-primary">🧾 Votre CV</span> en ligne
        </Link>
      </div>
      <div className="hidden md:flex gap-6 text-sm">
        <Link to="/" className="hover:text-primary">Accueil</Link>
        <Link to="/generateur-cv" className="hover:text-primary">Créer un CV</Link>
        <Link to="/lettre-de-motivation" className="hover:text-primary">Lettre de motivation</Link>
        <Link to="/a-propos" className="hover:text-primary">À propos</Link>
      </div>
      <div className="ml-4">
        <Link to="/generateur-cv" className="btn btn-primary text-white btn-sm">
          Commencer
        </Link>
      </div>
    </div>
  );
}
