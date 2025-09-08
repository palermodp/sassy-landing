import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content: "SaaSify ha transformado completamente la manera en que gestionamos nuestro negocio. La plataforma es intuitiva y el soporte es excepcional.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de IT, InnovaCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content: "La seguridad y el rendimiento de SaaSify superaron nuestras expectativas. Definitivamente la mejor inversión que hemos hecho.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      position: "Fundadora, DigitalFlow",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content: "Desde que implementamos SaaSify, nuestra productividad aumentó un 40%. Es exactamente lo que necesitábamos para escalar nuestro negocio.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg animate-fadeIn delay-200">
            Más de 10,000 empresas confían en SaaSify para hacer crecer su negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-blue-500 text-2xl mr-3" aria-hidden="true" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={`Foto de perfil de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {renderStars(5)}
              </div>
              <span className="font-semibold">4.9/5</span>
            </div>
            <div className="text-sm">
              Basado en más de 2,500 reseñas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}