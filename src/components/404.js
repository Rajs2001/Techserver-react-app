'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import Link from 'next/link';

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(239,68,68,0) 70%)',
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
        }}
        animate={{
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
        }}
        transition={{ type: 'spring', damping: 10, stiffness: 30, mass: 0.5 }}
      />
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8"
        >
          <motion.div
            className="text-center mb-8"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-6xl mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
            <p className="text-gray-400">
              Oops! The page you are looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-4"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link to="/" className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              <FontAwesomeIcon icon={faHome} />
              <span>Go to Homepage</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center space-x-2 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}