"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can replace these icons if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-950 bg-opacity-80 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-cyan-400">My Portfolio</div>

  
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#WorkExperience" className="hover:text-cyan-400 transition">Work Experience</a></li>
          <li><a href="#education" className="hover:text-cyan-400 transition">Education</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-blue-950 space-y-4 py-4 text-sm font-medium">
          <li><a href="#hero" className="hover:text-cyan-400 transition" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#WorkExperience" className="hover:text-cyan-400 transition" onClick={toggleMenu}>Work Experience</a></li>
          <li><a href="#education" className="hover:text-cyan-400 transition" onClick={toggleMenu}>Education</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
