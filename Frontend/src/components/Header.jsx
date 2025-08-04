import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#FF6B6B] via-[#FFB347] to-[#FFD700] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link  to="/" ><h1 className="text-xl md:text-3xl font-bold tracking-wide drop-shadow">Basti Ki Pathshala</h1></Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <Link to="/" className="hover:text-black text-lg transition">Home</Link>
          <Link to="/register" className="hover:text-black text-lg transition">Register</Link>
          <Link to="/admin" className="hover:text-black  text-lg transition">Admin</Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-br from-[#FF6B6B] to-[#FFD700] border-t border-yellow-300 px-6 py-4 space-y-3 text-sm font-semibold">
          <Link to="/" className="block hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/register" className="block hover:text-black" onClick={() => setMenuOpen(false)}>Register</Link>
          <Link to="/admin" className="block hover:text-black" onClick={() => setMenuOpen(false)}>Admin</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
