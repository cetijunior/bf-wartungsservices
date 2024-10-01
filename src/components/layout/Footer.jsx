// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
    const smoothScroll = (e, target) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-[#44403d] text-white py-10">
            <div className="container mx-auto items-start grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* Company Info Section */}
                <div className="max-w-80 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-[#e92b26]">BF Wartungsservice</h3>
                    <p className="mb-4">
                        Ihr zuverlässiger Partner für professionelle Hausmeister- und Wartungsdienstleistungen.
                    </p>
                    <p>&copy; 2024 BF Wartungsservice. Alle Rechte vorbehalten.</p>
                </div>

                {/* Quick Links Section */}
                <div className="text-center">
                    <h4 className="text-xl font-bold mb-4 text-[#e92b26]">Schnellzugriff</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className="hover:underline">
                                Startseite
                            </a>
                        </li>
                        <li>
                            <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="hover:underline">
                                Dienstleistungen
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')} className="hover:underline">
                                Kundenstimmen
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" onClick={(e) => smoothScroll(e, '#pricing')} className="hover:underline">
                                Preise
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="hover:underline">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className="flex flex-col text-center h-full justify-between md:text-right">
                    <h4 className="text-xl font-bold mb-4 text-[#e92b26]">Kontaktieren Sie uns</h4>
                    <p>Telefon: <a href="tel:017632753351" className="hover:underline">0176 3275 3351</a></p>
                    <p>Telefon: <a href="tel:017655579030" className="hover:underline">0176 5557 9030</a></p>
                    <p>Telefon: <a href="tel:015773635631" className="hover:underline">0157 7363 5631</a></p>
                    <p>E-Mail: <a href="mailto:info@bf-netzbau.de" className="hover:underline">info@bf-netzbau.de</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
