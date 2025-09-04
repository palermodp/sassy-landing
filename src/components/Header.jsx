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
        <h1 className="text-xl font-bold text-gray-900">SaaSify</h1>

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
          className="md:hidden text-gray-900 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      <ul
        className={`md:hidden flex flex-col bg-white/90 backdrop-blur-md text-gray-900 font-medium p-4 space-y-3
          transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            className={`animate-fadeIn animate-slideInRight delay-${(index + 1) * 200}`}
          >
            <a
              href={link.href}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
