import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'blogger',
    content: 'The blog page website delivered a sleek, user-friendly design with seamless navigation and dynamic features. perfect for show casing content while enhancing user engagement',
  },
  {
    name: 'Jane Smith',
    role: 'businessman',
    content: 'i\'ve recently ordered the advertisement banner, The banner exceeds expectations with its eye-catching design and clean messaging, it perfectly represented my startup, capturing attention and driving engagement efficiently',
  },
  {
    name: 'Mike Johnson',
    role: 'Restaurant Owner',
    content: 'Recently i have ordered a mobile app for my restaurant through techserver, and i\'m extreamly impressed! the App isuser friendly, sleek and tailored perfectly to my business needs. there teams deliver a high quality product at efficient price. ',
  },
];

const reviewsMore = ()=>{
  alert('view more of testimonials')
}

export default function Testimonials() {
  return (
    <section 
    id="testimonials" 
    className="py-20 bg-amber-100"
    style={{backgroundColor: 'rgb(208, 186, 98)'}}    
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              style={{color: '#8945db'}}
            >
              <p className="text-lg mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-amber-600">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        onClick={reviewsMore}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          margin: "10px 20px 0 0",
          float: "right",
          background: "#304d4d",
        }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all mb-6 mt-6"
      >
        View testimonials
      </motion.button>
    </section>
  );
}
