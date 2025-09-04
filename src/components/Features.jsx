import FeatureCard from "./FeatureCard.jsx";
import { FaCloud, FaRocket, FaShieldAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaCloud />,
      title: "Nube Segura",
      description: "Accede a tus datos desde cualquier lugar con total seguridad.",
    },
    {
      icon: <FaRocket />,
      title: "Rendimiento",
      description: "Rápido, confiable y siempre disponible para tu negocio.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Protección",
      description: "Tus datos y los de tus clientes siempre protegidos.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
          Características de nuestro SaaS
        </h2>
        <p className="text-gray-700 mb-12 animate-fadeIn delay-200">
          Todo lo que necesitas para administrar tu negocio con seguridad y eficiencia.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
