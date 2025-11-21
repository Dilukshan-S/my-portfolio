import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="fixed top-0 left-0 w-full 
bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg 
border-b border-gray-200 dark:border-gray-800 
z-50">
      <div className="text-gray-900 dark:text-gray-100 flex items-center max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-xl font-bold">Dilukshan</div>
        <div className="flex space-x-4">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-gray-300 dark:bg-gray-700 text-black dark:text-white'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-900" />}
        </button>
      </div>
    </nav>
  );
}