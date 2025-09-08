export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out animate-fadeIn border border-gray-100 hover:border-blue-200 overflow-hidden">
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 transition-all duration-700 rounded-2xl"></div>
      
      {/* Animated background circles */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500 blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-15 transform scale-0 group-hover:scale-100 transition-all duration-700 blur-2xl"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-blue-600 group-hover:text-purple-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
}