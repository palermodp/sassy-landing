import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">SaaSify</h2>
          <p className="text-gray-400">
            La solución moderna para administrar tu negocio de forma eficiente y segura.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Enlaces rápidos</h3>
          <ul className="space-y-1">
            <li><a href="#features" className="hover:text-blue-500 transition-colors duration-300">Características</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contacto</a></li>
            <li><a href="/" className="hover:text-blue-500 transition-colors duration-300">Inicio</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SaaSify. Todos los derechos reservados.
      </div>
    </footer>
  );
}
