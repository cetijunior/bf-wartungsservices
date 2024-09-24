// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#44403d] text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* Company Info Section */}
                <div className="text-center md:text-left">
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
                <div className="text-center md:text-right">
                    <h4 className="text-xl font-bold mb-4 text-[#e92b26]">Contact Us</h4>
                    <p>Phone: <a href="tel:017632753351" className="hover:underline">0176 3275 3351</a></p>
                    <p>Phone: <a href="tel:017655579030" className="hover:underline">0176 5557 9030</a></p>
                    <p>Phone: <a href="tel:015773635631" className="hover:underline">0157 7363 5631</a></p>
                    <p>Email: <a href="mailto:info@landscapingco.com" className="hover:underline">info@bf-netzbau.de</a></p>
                </div>
            </div>

            {/* Social Media Icons Section */}
            <div className="mt-8 border-t border-gray-700 pt-4">
                <div className="flex justify-center space-x-6">
                    <a href="#" className="hover:text-[#e92b26] transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.624h3.125v-2.671c0-3.1 1.894-4.788 4.657-4.788 1.324 0 2.461.099 2.791.143v3.235l-1.918.001c-1.504 0-1.795.714-1.795 1.762v2.318h3.588l-.467 3.624h-3.121v9.294h6.116c.73 0 1.324-.593 1.324-1.324v-21.352c0-.731-.594-1.325-1.325-1.325z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-[#e92b26] transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .385.045.761.127 1.124-4.09-.205-7.713-2.165-10.141-5.144-.422.725-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.025-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.622-.031-.921-.087.623 1.943 2.432 3.358 4.573 3.397-1.675 1.309-3.787 2.089-6.078 2.089-.394 0-.779-.023-1.161-.067 2.166 1.389 4.734 2.199 7.498 2.199 8.992 0 13.907-7.457 13.907-13.906 0-.211-.005-.423-.014-.633.952-.689 1.78-1.548 2.437-2.532z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-[#e92b26] transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M12.004 0c-6.627 0-12 5.373-12 12.004 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12.004 0-6.627-5.373-12-12-12zm0 22.005c-5.516 0-9.999-4.483-9.999-9.999s4.483-9.999 9.999-9.999c5.516 0 9.999 4.483 9.999 9.999s-4.483 9.999-9.999 9.999zm3.888-13.342h-1.355c-.47 0-.87.399-.87.87v1.354h2.12l-.276 2.126h-1.844v6.869h-2.305v-6.869h-1.828v-2.126h1.828v-1.526c0-1.387 1.124-2.512 2.512-2.512h1.355v2.126z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
