// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HeroSection from './pages/landing/HeroSection';
import ServicesSection from './pages/landing/ServicesSection';
import TestimonialsSection from './pages/landing/TestimonialsSection';
import PricingSection from './pages/landing/PricingSection';
import ContactSection from './pages/landing/ContactSection';
import Footer from './components/layout/Footer';
import ServiceDetailPage from './components/services/ServiceDetail'; // Import the Service Detail Page
import './App.css';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900">
        <Navbar />
        <main>
          <Routes>
            {/* Main Landing Page Route */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServicesSection />
                  <TestimonialsSection />
                  <PricingSection />
                  <ContactSection />
                </>
              }
            />
            {/* Dynamic Service Detail Route */}
            <Route path="/services/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
