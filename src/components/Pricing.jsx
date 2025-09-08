import { FaCheck, FaTimes, FaCrown } from 'react-icons/fa';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/mes",
      description: "Perfecto para pequeñas empresas que están comenzando",
      features: [
        { text: "Hasta 5 usuarios", included: true },
        { text: "10GB de almacenamiento", included: true },
        { text: "Soporte por email", included: true },
        { text: "Integraciones básicas", included: true },
        { text: "Dashboard básico", included: true },
        { text: "API avanzada", included: false },
        { text: "Soporte prioritario", included: false },
        { text: "Análisis avanzados", included: false }
      ],
      popular: false,
      buttonText: "Comenzar Gratis",
      buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/mes",
      description: "Ideal para empresas en crecimiento que necesitan más funciones",
      features: [
        { text: "Hasta 25 usuarios", included: true },
        { text: "100GB de almacenamiento", included: true },
        { text: "Soporte prioritario", included: true },
        { text: "Todas las integraciones", included: true },
        { text: "Dashboard avanzado", included: true },
        { text: "API completa", included: true },
        { text: "Análisis avanzados", included: true },
        { text: "Backup automático", included: false }
      ],
      popular: true,
      buttonText: "Prueba Gratuita",
      buttonStyle: "bg-blue-500 hover:bg-blue-600 text-white"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/mes",
      description: "Para grandes empresas que requieren máximo rendimiento",
      features: [
        { text: "Usuarios ilimitados", included: true },
        { text: "Almacenamiento ilimitado", included: true },
        { text: "Soporte 24/7", included: true },
        { text: "Integraciones personalizadas", included: true },
        { text: "Dashboard personalizado", included: true },
        { text: "API completa + webhooks", included: true },
        { text: "Análisis empresariales", included: true },
        { text: "Backup y recuperación", included: true }
      ],
      popular: false,
      buttonText: "Contactar Ventas",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white"
    }
  ];

  const handlePlanClick = (planName) => {
    if (planName === 'Enterprise') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Simulate redirect to signup
      console.log(`Redirecting to signup for ${planName} plan`);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
            Planes que se adaptan a tu negocio
          </h2>
          <p className="text-gray-600 text-lg animate-fadeIn delay-200">
            Comienza gratis y escala según tus necesidades. Sin compromisos a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <FaCrown className="text-yellow-300" />
                    <span>Más Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <FaTimes className="text-gray-300 mr-3 flex-shrink-0" aria-hidden="true" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${plan.buttonStyle}`}
                  aria-label={`Seleccionar plan ${plan.name}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            ¿Necesitas algo diferente? 
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-500 hover:text-blue-600 font-semibold ml-1 focus:outline-none focus:underline"
            >
              Contáctanos para un plan personalizado
            </button>
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-500">
            <span>✓ Prueba gratuita de 14 días</span>
            <span>✓ Sin tarjeta de crédito requerida</span>
            <span>✓ Cancela en cualquier momento</span>
          </div>
        </div>
      </div>
    </section>
  );
}