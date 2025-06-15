import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Générateur de CV</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Accueil</Link>
        <Link to="/generateur-cv" className="text-blue-600 hover:underline">Créer un CV</Link>
        <Link to="/lettre-de-motivation" className="text-blue-600 hover:underline">Lettre de motivation</Link>
      </nav>
    </header>
  );
}
