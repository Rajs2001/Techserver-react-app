import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Main';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import GlowingBackground from './components/GlowingBackground';

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white min-h-screen">
        <GlowingBackground />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Portfolio />
                <Testimonials />
                <AboutUs />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={
            <>
            {/* <Header/> */}
            <Login />
            </>
            
            
          } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
