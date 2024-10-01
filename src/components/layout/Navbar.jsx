// src/components/layout/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleNavigation = (sectionId) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => scrollToSection(sectionId), 300); // Delay scroll to ensure page has loaded
        } else {
            scrollToSection(sectionId);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesDropdownOpen(false);
    };

    const handleServiceClick = (id) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => navigate(`/services/${id}`), 300);
        } else {
            navigate(`/services/${id}`);
        }
        closeMenu();
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#e92b26] text-white p-4 fixed w-full z-50 shadow-md transition duration-300">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <button
                    onClick={() => {
                        if (window.location.pathname === '/') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            window.location.href = '/';
                        }
                    }}
                    className="flex items-center cursor-pointer bg-transparent border-none"
                >
                    <img
                        src="/assets/images/Logo.PNG"
                        alt="BF Wartungsservice Logo"
                        className="h-10 rounded-full mr-2 transition-all duration-300 hover:animate-rotateImage"
                    />
                </button>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul
                    className={`md:flex md:space-x-4 absolute md:relative top-full left-0 right-0 bg-[#44403d] md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'
                        } md:block p-4 md:p-0 mt-0 lg:mt-0 rounded-b-lg md:rounded-none`}
                >
                    <li>
                        <button
                            onClick={() => handleNavigation('home')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Startseite
                        </button>
                    </li>
                    <li className="relative md:static" ref={dropdownRef}>
                        <button
                            onClick={toggleServicesDropdown}
                            className="hover:underline border-0 block w-full text-left py-2 md:py-0 flex items-center justify-between md:justify-start"
                        >
                            Dienstleistungen
                            <svg
                                className={`w-4 h-4 ml-1 transform ${isServicesDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {isServicesDropdownOpen && (
                            <ul className="absolute items-start p-2 left-0 mt-0 sm:mt-6 bg-[#e92b26] lg:w-auto w-auto md:w-[400px] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto md:max-h-none md:grid md:grid-cols-2 gap-3">
                                {[
                                    { id: 1, title: 'Einkaufen' },
                                    { id: 2, title: 'Fensterputzen' },
                                    { id: 3, title: 'Reparaturarbeiten' },
                                    { id: 4, title: 'Wohnungsauflösung' },
                                    { id: 5, title: 'Entrümpelung' },
                                    { id: 6, title: 'Hausreinigung' },
                                    { id: 7, title: 'Winterdienst' },
                                    { id: 8, title: 'Montagearbeiten' },
                                    { id: 9, title: 'Gartenarbeiten' },
                                ].map((service) => (
                                    <li key={service.id} className="py-1">
                                        <button
                                            onClick={() => handleServiceClick(service.id)}
                                            className="block w-full text-left px-2 py-3 bg-[#e92b26] text-white rounded-xl hover:bg-[#d11d23] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-1"
                                        >
                                            <svg
                                                className="w-4 h-4 text-white hidden md:block" // Hides SVGs on md and smaller screens
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                            {service.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            onClick={() => handleNavigation('testimonials')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Kundenstimmen
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigation('pricing')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Preise
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigation('contact')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Kontakt
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
