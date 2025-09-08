import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaRocket, FaShieldAlt, FaCloud, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SaaSify
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                La solución moderna para administrar tu negocio de forma eficiente y segura. 
                Únete a más de 10,000 empresas que confían en nosotros.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <FaEnvelope className="text-blue-400" />
                  <span>hola@saasify.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <FaPhone className="text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Navegación</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group">
                  <FaCloud className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Características</span>
                </a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center space-x-2 group">
                  <FaShieldAlt className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>Testimonios</span>
                </a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-pink-400 transition-all duration-300 flex items-center space-x-2 group">
                  <FaRocket className="text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>Precios</span>
                </a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 group">
                  <FaEnvelope className="text-green-400 group-hover:scale-110 transition-transform" />
                  <span>Contacto</span>
                </a></li>
              </ul>
            </div>

            {/* Social media */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Síguenos</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
                  <FaFacebookF className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 group">
                  <FaTwitter className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-700/25 transition-all duration-300 group">
                  <FaLinkedinIn className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group">
                  <FaInstagram className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="mb-2">📍 San Francisco, CA</p>
                <p>🌍 Disponible mundialmente</p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} SaaSify. Todos los derechos reservados.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Términos de Servicio</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
    </footer>
  );
}
