// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#44403d] text-white py-10">
            <div className="container mx-auto items-start grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* Company Info Section */}
                <div className="max-w-80 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-[#e92b26]">Landscaping Co.</h3>
                    <p className="mb-4">
                        Your trusted partner for professional landscaping, garden design, and maintenance services.
                    </p>
                    <p>&copy; 2024 Landscaping Co. All rights reserved.</p>
                </div>

                {/* Quick Links Section */}
                <div className="text-center">
                    <h4 className="text-xl font-bold mb-4 text-[#e92b26]">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#home" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:underline">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" className="hover:underline">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className="flex flex-col text-center h-full justify-between md:text-right">
                    <h4 className="text-xl font-bold mb-4 text-[#e92b26]">Contact Us</h4>
                    <p>Phone: <a href="tel:017632753351" className="hover:underline">0176 3275 3351</a></p>
                    <p>Phone: <a href="tel:017655579030" className="hover:underline">0176 5557 9030</a></p>
                    <p>Phone: <a href="tel:015773635631" className="hover:underline">0157 7363 5631</a></p>
                    <p>Email: <a href="mailto:info@landscapingco.com" className="hover:underline">info@bf-netzbau.de</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
