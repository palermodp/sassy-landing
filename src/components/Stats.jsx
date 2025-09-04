import { useState, useEffect, useRef } from "react";

export default function Stats() {
  const stats = [
    { label: "Clientes Felices", value: 1200 },
    { label: "Proyectos Completados", value: 350 },
    { label: "Usuarios Activos", value: 5000 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 1500; // 1.5s
            const increment = end / (duration / 30);

            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(start);
                return newCounts;
              });
            }, 30);
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="animate-fadeIn delay-200">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-500">
              {counts[index]}
            </h3>
            <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
