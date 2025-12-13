import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">VIGICON</div>
            <div className="ml-2 text-sm text-gray-600 hidden sm:block">Enterprises</div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <Link to="/" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/services" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/gallery" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition">Gallery</Link>
            <Link to="/contact" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
