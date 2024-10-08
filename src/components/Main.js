import React from 'react'
import { motion } from 'framer-motion'

const mainWork = ()=>{
  alert('main work components wil be shawn here')
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          // backgroundImage: "url('https://images.unsplash.com/photo-1610505466122-b1fe0e911a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-75 z-10" />
      <div className="relative z-20 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4"
        >
          Innovative Tech Solutions for Growing Startups
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl mb-8"
        >
          From websites to mobile apps, we bring your vision to life. Let’s build your next big idea.        </motion.p>
        <motion.button
          onClick={mainWork}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
        >
          Explore Our Work
        </motion.button>
      </div>
    </section>
  )
}