export default function Hero() {
  const handleCTAClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
      aria-label="Sección principal de SaaSify"
    >
      <div className="absolute inset-0">
        <img
          src="/images/sassify.png"
          alt="Interfaz moderna de la plataforma SaaSify mostrando dashboard y características principales"
          className="w-full h-full object-cover opacity-90 animate-fadeIn"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fadeIn delay-200">
          Bienvenido a <span className="text-blue-400 drop-shadow-lg">SaaSify</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl lg:text-3xl text-white/95 animate-fadeIn delay-400 leading-relaxed">
          La plataforma SaaS moderna que revoluciona tu negocio
        </p>
        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-fadeIn delay-600">
          <button 
            onClick={handleCTAClick}
            className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Comenzar con SaaSify - Ir a la sección de contacto"
          >
            Comenzar Ahora
          </button>
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 transform hover:scale-105"
            aria-label="Ver características de SaaSify"
          >
            Ver Características
          </button>
        </div>
      </div>
    </section>
  );
}
