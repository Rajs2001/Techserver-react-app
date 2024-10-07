// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Link } from 'react-router-dom'

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const menuItems = ['Home', 'Services', 'Portfolio', 'About', 'Contact', 'Login', 'Sign Up']

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-3xl font-bold text-white">WoodMaster</Link>
//         <div className="hidden md:flex space-x-6">
//           {menuItems.map((item) => (
//             <Link
//               key={item}
//               to={item === 'Login' ? '/login' : item === 'Sign Up' ? '/signup' : `/#${item.toLowerCase()}`}
//               className="text-lg font-semibold text-white hover:text-indigo-300 transition-colors"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//         <button
//           className="md:hidden text-white text-2xl focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? '✕' : '☰'}
//         </button>
//       </nav>
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-gradient-to-r from-purple-800 to-indigo-800"
//           >
//             {menuItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item === 'Login' ? '/login' : item === 'Sign Up' ? '/signup' : `/#${item.toLowerCase()}`}
//                 className="block py-2 px-4 text-lg font-semibold text-white hover:bg-indigo-700 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   )
// }


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
          Header
        </Link>
        <div className="hidden md:flex space-x-6">
          {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase()}`}
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
