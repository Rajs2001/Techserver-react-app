import React from 'react'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-purple-800 to-indigo-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center text-white"
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-white">Our Story</h3>
            <p className="text-gray-300 mb-6">
              Founded in 2005, WoodMaster has been at the forefront of innovative woodworking for over 15 years. Our passion for craftsmanship and dedication to quality have made us a leader in the industry.
            </p>
            <p className="text-gray-300">
              We believe in the power of natural materials and the beauty of handcrafted pieces. Our team of skilled artisans combines traditional techniques with modern design to create unique, lasting works of art.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt="Woodworking workshop"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}