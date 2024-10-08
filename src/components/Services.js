import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Bespoke Web and Mobile App Solutions',
    description: 'We design and develop scalable, high-performance websites and mobile apps that drive engagement and business growth. Whether you need an e-commerce platform or a dynamic corporate website, we’ve got you covered.',
    icon: '🪑',
    img:"https://images.unsplash.com/photo-1518085250887-2f903c200fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZyUyMHNjcmVlbnxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    title: 'Grow Your Online Presence',
    description: 'Maximize your reach with targeted advertising campaigns, promotional videos, and social media strategies. Let us craft a custom plan to boost your brand’s visibility.',
    icon: '🏠',
    img:"https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: 'Bringing Your Brand to Life',
    description: 'From logos to complete visual identity kits, we provide creative solutions to ensure your brand stands out. Our team specializes in creating compelling, professional visuals to represent your business.',
    icon: '🔨',
    img:"https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const servicesMore = ()=>{
  alert('component for all services that we offer')
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
          style={{color: 'cadetblue'}}
        >
          Services We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* <img className="text-4xl mb-4"/>{service.icon} */}
              <img className="text-4xl mb-4" src={`${service.img}`} alt=''/>
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'cadetblue', fontWeight:600, fontSize:'19px'}}>{service.title}</h3>
              <p className="text-amber-800">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        onClick={servicesMore}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          margin: "10px 20px 0 0",
          float: "right",
          background: "rgb(95, 158, 160)",
        }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all mb-6 mt-6"
      >
        View Our All Services
      </motion.button>
    </section>
  );
}
