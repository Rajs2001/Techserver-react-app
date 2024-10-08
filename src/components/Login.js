"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
// import Link from "next/link";

export default function EnhancedLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loginType, setLoginType] = useState("email"); // 'email' or 'phone'

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          error = "Phone number should be 10 digits";
        }
        break;
      case "password":
        if (value.length < 8) {
          error = "Password must be at least 8 characters long";
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
    const fieldsToValidate =
      loginType === "email" ? ["email", "password"] : ["phone", "password"];
    fieldsToValidate.forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log("Form submitted:", formData);
    }
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign In clicked. Implement OAuth logic here.");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const inputClasses = (name) =>
    `w-full pl-10 pr-10 py-2 bg-gray-700 text-white border rounded-lg
    transition-colors duration-300
    ${errors[name] ? "border-red-500" : "border-gray-600"}
    focus:outline-none focus:ring-2 focus:ring-blue-500
    hover:border-gray-400`;
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
      style={{
        marginTop: "40px",
      }}
    >
      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)",
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
        }}
        animate={{
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 30, mass: 0.5 }}
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
              Welcome Back
            </motion.h2>
            <motion.p
              className="text-gray-300 mt-4 text-center"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Log in to access your account and continue your journey with us.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Login to Your Account
          </h2>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-700 p-1 rounded-full">
              <button
                className={`px-4 py-2 rounded-full ${
                  loginType === "email"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setLoginType("email")}
              >
                Email
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  loginType === "phone"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setLoginType("phone")}
              >
                Phone
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              className="relative"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              {loginType === "email" ? (
                <>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute top-3 left-3 text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={inputClasses("email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute top-3 left-3 text-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={inputClasses("phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </>
              )}
            </motion.div>

            <motion.div
              className="relative"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-3 left-3 text-gray-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={inputClasses("password")}
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
            </motion.div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <motion.div
              className="flex items-center justify-between"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <Link
                to ="/forgot-password"
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-6"
              type="submit"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Log In
            </motion.button>
          </form>

          <motion.div
            className="mt-6"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center space-x-2 bg-white text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
              <span>Sign in with Google</span>
            </button>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-400">Don't have an account?</p>
            <Link
              to="/signup"
              className="text-blue-400 hover:underline font-semibold"
            >
              Sign up here
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
