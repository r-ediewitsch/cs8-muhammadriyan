import { useState } from 'react';
import Logo from './Logo';
import detiklogo from '../assets/toppng.com-detik-logo-1249x355.png';

export default function Header({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (category, e) => {
    e.preventDefault();
    setActiveTab(category);
    setIsMenuOpen(false);

    const element = document.getElementById(category);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={detiklogo} alt="Detik Logo" className="h-8" />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['news', 'finance', 'sport', 'lifestyle', 'celebrity'].map((category) => (
              <li key={category}>
                <a
                  href={`#${category}`}
                  className={`font-medium hover:text-customBlue ${
                    activeTab === category ? 'text-customBlue' : 'text-gray-700'
                  }`}
                  onClick={(e) => handleNavClick(category, e)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden flex items-center p-1 bg-customBlue" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        <div className="hidden md:block">
          <button className="bg-customBlue hover:bg-blue-900 text-white px-4 py-2 rounded-md">
            Sign In
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden">
          <nav className="container mx-auto px-4 py-2">
            <ul className="space-y-3">
              {['news', 'finance', 'sport', 'lifestyle', 'celebrity'].map((category) => (
                <li key={category} className="border-b border-gray-100 pb-2">
                  <a
                    href={`#${category}`}
                    className={`block py-2 font-medium hover:text-customBlue ${
                      activeTab === category ? 'text-customBlue' : 'text-gray-700'
                    }`}
                    onClick={(e) => handleNavClick(category, e)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button className="w-full bg-customBlue hover:bg-blue-900 text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}