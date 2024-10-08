'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
// import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name should only contain letters and spaces';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'phone':
        if (!/^\d{10}$/.test(value)) {
          error = 'Phone number should be 10 digits';
        }
        break;
      case 'password':
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
          error = 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
    }
  };

  const handleGoogleSignIn = () => {
    alert('Google Sign In clicked. Implement OAuth logic here.');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const inputClasses = (name) => 
    `w-full pl-10 pr-10 py-2 bg-gray-700 text-white border rounded-lg
    transition-colors duration-300
    ${errors[name] ? 'border-red-500' : 'border-gray-600'}
    focus:outline-none focus:ring-2 focus:ring-blue-500
    hover:border-gray-400`
  ;

  return (
    <div 
    className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
    style={{
      marginTop:'50px',
    }}
    >
      <motion.div
        className="absolute w-[100px] h-[100px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
        }}
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{ type: 'spring', damping: 3, stiffness: 50, mass: 0.1 }}
      />
      <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block w-1/2 bg-gray-700 p-8"
        >
          <div className="flex flex-col justify-center items-center h-full">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://rajs2001.github.io/images/login_banner.png"
                alt="Abstract design"
                width={300}
                height={300}
                className="object-cover rounded-full"
                loading="lazy"
              />
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-white mt-8 text-center"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Join Our Community
            </motion.h2>
            <motion.p
              className="text-gray-300 mt-4 text-center"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Discover a world of possibilities with our innovative platform.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div className="relative" {...fadeInUp} transition={{ delay: 0.1 }}>
              <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className={inputClasses('name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {!errors.name && formData.name && (
                <FontAwesomeIcon icon={faCheck} className="absolute top-3 right-3 text-green-500" />
              )}
            </motion.div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

            <motion.div className="relative" {...fadeInUp} transition={{ delay: 0.2 }}>
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={inputClasses('email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {!errors.email && formData.email && (
                <FontAwesomeIcon icon={faCheck} className="absolute top-3 right-3 text-green-500" />
              )}
            </motion.div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

            <motion.div className="relative" {...fadeInUp} transition={{ delay: 0.3 }}>
              <FontAwesomeIcon icon={faPhone} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={inputClasses('phone')}
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {!errors.phone && formData.phone && (
                <FontAwesomeIcon icon={faCheck} className="absolute top-3 right-3 text-green-500" />
              )}
            </motion.div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

            <motion.div className="relative" {...fadeInUp} transition={{ delay: 0.4 }}>
              <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={inputClasses('password')}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-3 right-3 text-gray-400 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
              {!errors.password && formData.password && (
                <FontAwesomeIcon icon={faCheck} className="absolute top-3 right-10 text-green-500" />
              )}
            </motion.div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

            <motion.div className="relative" {...fadeInUp} transition={{ delay: 0.5 }}>
              <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className={inputClasses('confirmPassword')}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-3 right-3 text-gray-400 focus:outline-none"
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
              {!errors.confirmPassword && formData.confirmPassword && (
                <FontAwesomeIcon icon={faCheck} className="absolute top-3 right-10 text-green-500" />
              )}
            </motion.div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-6"
              type="submit"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Sign Up
            </motion.button>
          </form>

          <motion.div
            className="mt-6"
            {...fadeInUp}
            transition={{ delay: 0.7 }}
          >
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center space-x-2 bg-white text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
              <span>Sign up with Google</span>
            </button>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            {...fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-400">Already have an account?</p>
            <Link to ="/login" className="text-blue-400 hover:underline font-semibold">
              Log in here
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}