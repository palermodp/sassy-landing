import { useState, useEffect } from "react";

export default function Header({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-slideDown
        ${scrolled ? "bg-white/90 shadow-lg" : "bg-white/80 shadow-md"}
      `}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-500">
            SaaSify
          </h1>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-900 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transform transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gradient-to-r from-pink-500 to-blue-600 rounded-full transform transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </nav>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-xl transform transition-all duration-500 ease-out ${
          menuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-4 opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
        <ul className="relative z-10 flex flex-col p-6 space-y-1">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className={`transform transition-all duration-500 ease-out ${
                menuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 100}ms` : '0ms' }}
            >
              <a
                href={link.href}
                className="block py-3 px-4 rounded-xl text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 group"
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>{link.name}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
      </div>
    </header>
  );
}
