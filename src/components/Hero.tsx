import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Smart. Secure. Sustainable.
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-4">
          Vigicon Enterprises, Pune
        </p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Your trusted partner for cutting-edge security systems, solar energy solutions, and smart automation technology.
        </p>
        <button
          onClick={goToContact}
          className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105"
        >
          Get a Free Consultation
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
}
