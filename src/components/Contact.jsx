export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">
          Contáctanos
        </h2>
        <p className="text-center text-gray-700 mb-12 animate-fadeIn delay-200">
          Completa el formulario y nos pondremos en contacto contigo lo antes posible.
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6 animate-fadeIn delay-400">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 input-animate"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 input-animate"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Escribe tu mensaje..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none input-animate"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 button-animate"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
