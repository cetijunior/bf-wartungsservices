// src/components/layout/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-r from-[#44403d] to-[#e92b26] text-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Logo and Description */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">BF Wartungsservices</h2>
                        <p className="text-sm">
                            Ihr zuverlässiger Partner für alle Wartungs- und
                            Reparaturarbeiten.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <a onClick={() => scrollToSection('services')} className="hover:text-gray-200 transition-colors duration-300">
                            Services
                        </a>
                        <a onClick={() => scrollToSection('pricing')} className="hover:text-gray-200 transition-colors duration-300">
                            Preise
                        </a>
                        <a onClick={() => scrollToSection('contact')} className="hover:text-gray-200 transition-colors duration-300">
                            Kontakt
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-200">
                    &copy; {new Date().getFullYear()} BF Wartungsservices. Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
