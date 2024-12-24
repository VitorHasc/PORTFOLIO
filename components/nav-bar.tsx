'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-4 sm:px-8 lg:px-20">
      <div className="flex justify-between items-center">
        <div className="text-sm">Vítor Hugo de Abreu Schell</div>
        <button
          className="sm:hidden text-[#ABB2BF]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <div className="hidden sm:flex items-center gap-8">
          <Link href="#projects" className="nav-link">
            #projetos
          </Link>
          <Link href="#about" className="nav-link">
            #sobre mim
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 sm:hidden">
          <Link href="#projects" className="nav-link">
            #projetos
          </Link>
          <Link href="#about" className="nav-link">
            #sobre mim
          </Link>
        </div>
      )}
    </nav>
  );
}
