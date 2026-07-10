import { useState, useEffect } from 'react';
import { Search, User, CalendarCheck, X, Menu, LogOut } from 'lucide-react';
import Logo from './Logo';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Medical Library', path: '/medical-library' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left: Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-white/20 shadow-sm backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-emerald-700 font-bold' : 'text-gray-500 hover:text-emerald-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-emerald-600 transition-colors">
            <Search size={20} />
          </button>
          <div className="h-4 w-px bg-gray-300"></div>
          
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-medium"
            >
              <span className="text-sm">Logout</span>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <LogOut size={16} />
              </div>
            </button>
          ) : (
            <Link to="/login" className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 font-medium">
              <span className="text-sm">Login</span>
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <User size={16} />
              </div>
            </Link>
          )}

          <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
            <CalendarCheck size={18} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-lg font-medium text-gray-700 py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {isLoggedIn ? (
            <button 
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-medium mt-2 text-center"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium mt-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Patient Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;