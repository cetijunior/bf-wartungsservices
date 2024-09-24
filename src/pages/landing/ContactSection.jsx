// src/pages/landing/ContactSection.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-[#44403d] mb-6 text-center">Contact Us</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e92b26]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e92b26]"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e92b26]"
                            rows="4"
                        ></textarea>
                        <button className="w-full py-3 bg-[#44403d] text-white font-semibold rounded hover:bg-gray-700 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information and Map */}
                <div className="flex flex-col space-y-8 ">
                    <div className='flex flex-col space-y-8 px-4 items-sta'>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-[#e92b26] w-6 h-6" />
                            <p className="text-gray-700">Amalienstraße 75, • 90763 Fürth</p>
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10423.055855783748!2d10.977461302953961!3d49.47204997935153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1f9c5b7c7b8a9%3A0x3e7e9b7c8b7c8b7c!2s90763%20F%C3%BCrth%2C%20Germany!5e1!3m2!1sen!2sus!4v1690123456789!5m2!1sen!2sus"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" // Correct attribute
                        className="rounded-lg shadow-lg"
                        title="Our Location"
                    ></iframe>


                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start space-x-6">
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
            </div>
        </section>
    );
};

export default ContactSection;
