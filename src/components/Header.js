import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white" onClick={closeMenu}>
          Techserver
        </Link>
        <div className="hidden md:flex space-x-6">
          {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              className="text-lg font-semibold text-white hover:text-indigo-300 transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link to="/login" className="text-lg font-semibold text-white hover:text-indigo-300 transition-colors">
            Login
          </Link>
          <Link to="/signup" className="text-lg font-semibold text-white hover:text-indigo-300 transition-colors">
            Sign Up
          </Link>
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-indigo-800 p-4"
        >
          {['Home', 'Services', 'Portfolio', 'About', 'Contact', 'Login', 'Sign Up'].map((item) => (
            <Link
              key={item}
              to={item === 'Login' ? '/login' : item === 'Sign Up' ? '/signup' : `/#${item.toLowerCase()}`}
              className="block py-2 text-lg font-semibold text-white hover:text-indigo-300 transition-colors"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
