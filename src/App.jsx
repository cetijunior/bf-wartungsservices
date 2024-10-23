import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HeroSection from './pages/landing/HeroSection';
import ServicesSection from './pages/landing/ServicesSection';
import TestimonialsSection from './pages/landing/TestimonialsSection';
import PricingSection from './pages/landing/PricingSection';
import ContactSection from './pages/landing/ContactSection';
import Footer from './components/layout/Footer';
import ServiceDetailPage from './components/services/ServiceDetail';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import './styles/index.css';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Router>
      <div className="bg-white text-gray-900">
        <Particles
          init={particlesInit}
          options={{
            background: {
              color: "#f0f4f8",
            },
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              color: {
                value: "#e92b26",
              },
              links: {
                enable: true,
                color: "#44403d",
                distance: 150,
                opacity: 0.5,
              },
              move: {
                enable: true,
                speed: 1,
              },
            },
          }}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <ServicesSection />
                    <PricingSection />
                    <TestimonialsSection />
                    <ContactSection />
                  </>
                }
              />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
