export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/sassify.png"
          alt="SaaS Mockup"
          className="w-full h-full object-cover opacity-90 animate-fadeIn"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fadeIn delay-200">
          Bienvenido a <span className="text-blue-500">SasSify</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white animate-fadeIn delay-400">
          La plataforma SaaS moderna que revoluciona tu negocio
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 animate-fadeIn delay-600">
          Comenzar
        </button>
      </div>
    </section>
  );
}
