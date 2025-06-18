import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/LogoEntreprise.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#4c5acb] to-[#7e88f5] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Titre */}
        <Link to="/" className="text-xl sm:text-2xl font-bold flex items-center gap-2">
          <img
            src={logo}
            alt="LogoEntreprise"
            className="w-8 h-8 object-contain drop-shadow-md"
          />
          <span>
            <span className="font-extrabold">Votre CV</span>{" "}
            <span className="font-light">en ligne</span>
            <span className="text-xs text-white/70 ml-2 italic">by VR</span>
          </span>
        </Link>

        {/* Menu mobile burger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm sm:text-base font-semibold">
          <Link to="/contact" className="hover:underline">Contacter</Link>
          <Link to="/a-propos" className="hover:underline">À propos</Link>
          <Link
            to="/generateur-cv"
            className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded-full transition"
          >
            CRÉER MON CV
          </Link>
        </nav>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-semibold">
          <Link to="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>
            Contacter
          </Link>
          <Link to="/a-propos" className="hover:underline" onClick={() => setMenuOpen(false)}>
            À propos
          </Link>
          <Link
            to="/generateur-cv"
            className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full text-center transition"
            onClick={() => setMenuOpen(false)}
          >
            CRÉER MON CV
          </Link>
        </nav>
      )}
    </header>
  );
}
