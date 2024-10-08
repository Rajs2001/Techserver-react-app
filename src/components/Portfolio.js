import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Mobile App for alpha pvt. Ltd.",
    img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    btn_lnk: "#Mobile Applcation",
  },

  {
    id: 2,
    title: "Website for ABC pvt. Ltd",
    img: "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    btn_lnk: "#web Applcation",
  },

  {
    id: 3,
    title: "Advertisement shooting for xyz pvt. Ltd.",
    img: "https://images.unsplash.com/photo-1551467965-0e95171282f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBzaG9vdGluZ3xlbnwwfHwwfHx8Mg%3D%3D",
    btn_lnk: "#advt_shooting",
  },

  {
    id: 4,
    title: "Banner desining for PQR pvt. Ltd.",
    img: "https://images.unsplash.com/photo-1665044063245-f7206a11b773?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    btn_lnk: "#Mobile Applcation",
  },

  // {
  //   id: 5,
  //   title: "Website for ABC pvt. Ltd",
  //   img: "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   btn_lnk: "#web Applcation",
  // },

  // {
  //   id: 6,
  //   title: "Advertisement shooting for xyz pvt. Ltd.",
  //   img: "https://images.unsplash.com/photo-1551467965-0e95171282f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBzaG9vdGluZ3xlbnwwfHwwfHx8Mg%3D%3D",
  //   btn_lnk: "#advt_shooting",
  // },
];

const products = () => {
  // window.location.href = "https://investtplus.com/"; //here will be the link
  alert('component of explore more for our all projects and there detail, basically a blog like page which has to design ')
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-amber-50"
      style={{ background: "linear-gradient(30deg, aliceblue,#c0d79a)" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
          style={{ color: "#304D4D" }}
        >
          Our Recent projects
        </motion.h2>
        <motion.h2
          className="mb-10 relative overflow-hidden rounded-lg shadow-lg group"
          style={{
            fontSize: "20px",
            padding: "15px",
            borderRadius: "13px",
            color: "rgb(7, 88, 106)",          
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          Explore a selection of our latest projects that have helped startups
          like yours succeed in the digital world. Each project is tailored to
          meet the specific needs of our clients, showcasing our versatility and
          expertise.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              style={{ background: "linear-gradient(45deg, #6c747d, #6b8079)" }}
            >
              <img
                src={`${item.img}`}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        onClick={products}
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
        Explore Our projects
      </motion.button>
    </section>
    
  );
}
