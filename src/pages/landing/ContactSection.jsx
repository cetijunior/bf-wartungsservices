// src/pages/landing/ContactSection.jsx
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:info@bf-netzbau.de?subject=Kontaktanfrage von ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gray-50">
            <h2 className="text-4xl font-bold text-[#44403d] mb-12 text-center">Kontaktieren Sie uns</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold text-[#e92b26] mb-6 text-center">Senden Sie uns eine E-Mail!</h3>
                        <input
                            type="text"
                            placeholder="Ihr Name"
                            className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e92b26]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Ihre E-Mail"
                            className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e92b26]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Ihre Nachricht"
                            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#e92b26]"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <motion.button
                            type="submit"
                            className="w-full py-3 bg-[#e92b26] text-white font-semibold rounded-full hover:bg-[#44403d] transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Nachricht senden
                        </motion.button>
                    </form>
                </motion.div>

                {/* Contact Information and Map */}
                <motion.div
                    className="flex flex-col space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-[#e92b26] mb-6">Kontakt Informationen</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-[#e92b26] w-6 h-6" />
                                <p className="text-gray-700">Amalienstraße 75, 90763 Fürth</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaPhoneAlt className="text-[#e92b26] w-6 h-6" />
                                <p className="text-gray-700">+49 176 3275 3351</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-[#e92b26] w-6 h-6" />
                                <p className="text-gray-700">info@bf-netzbau.de</p>
                            </div>
                        </div>
                        {/* Social Media Icons */}
                        <div className="flex space-x-6 mt-6">
                            <a href="#" className="text-[#44403d] hover:text-[#e92b26] transition-colors duration-300">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-[#44403d] hover:text-[#e92b26] transition-colors duration-300">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-[#44403d] hover:text-[#e92b26] transition-colors duration-300">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        whileHover={{ scale: 1.01 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10423.055855783748!2d10.977461302953961!3d49.47204997935153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1f9c5b7c7b8a9%3A0x3e7e9b7c8b7c8b7c!2s90763%20F%C3%BCrth%2C%20Germany!5e1!3m2!1sen!2sus!4v1690123456789!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Our Location"
                        ></iframe>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
