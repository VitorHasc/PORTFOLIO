"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  return (
    <nav className="py-4 px-4 sm:px-8 lg:px-20">
      <div className="flex justify-between items-center">
        <div className="text-sm">Vítor Hugo de Abreu Schell</div>
        <div className="flex items-center gap-4">
          <button
            className="sm:hidden text-[#ABB2BF]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          <button
            className="text-[#ABB2BF] border px-2 py-1 rounded"
            onClick={toggleLanguage}
          >
            {language === "en" ? "English →" : "← Português"}
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col gap-4 mt-4 sm:flex sm:flex-row sm:gap-8 sm:items-center`}
      >
        <Link href="#projects" className="nav-link">
          {language === "en" ? "#projects" : "#projetos"}
        </Link>
        <Link href="#about" className="nav-link">
          {language === "en" ? "#about me" : "#sobre mim"}
        </Link>
      </div>
    </nav>
  );
}
