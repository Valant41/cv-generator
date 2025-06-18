import { Link } from "react-router-dom";
import logo from "../assets/images/LogoEntreprise.png"; // adapte le chemin selon ton arborescence

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#2c2c72] to-[#4849a7] py-4 px-8 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Titre */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <img src={logo} alt="LogoEntreprise" className="w-8 h-8 object-contain" />
          <span>
            <span className="font-extrabold">Votre CV</span> <span className="font-light">en ligne</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm sm:text-base font-semibold">
          <Link to="/contact" className="hover:underline">Contacter</Link>
          <Link to="/a-propos" className="hover:underline">A propos</Link>
          <Link
            to="/generateur-cv"
            className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded-full transition"
          >
            CRÉER MON CV
          </Link>
        </nav>
      </div>
    </header>
  );
}
