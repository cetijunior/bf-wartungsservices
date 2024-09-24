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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesDropdownOpen(false);
    };

    const handleMenuItemClick = (sectionId) => {
        scrollToSection(sectionId);
        closeMenu();
    };

    const handleServiceClick = (id) => {
        navigate(`/services/${id}`);
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
        <nav className="bg-[#e92b26] text-white p-4 fixed w-full z-50">
            <div className="container mx-auto flex flex-row justify-between md:space-y-0 md:px-4 lg:px-4 space-y-2 items-center">
                <button
                    onClick={() => {
                        if (window.location.pathname === '/') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            window.location.href = '/';
                        }
                    }}
                    className="text-xl cursor-pointer font-bold bg-transparent border-none text-white"
                >
                    Landscaping Co.
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
                        } md:block p-4 md:p-0 mt-2 md:mt-0`}
                >
                    <li>
                        <button
                            onClick={() => handleMenuItemClick('home')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Home
                        </button>
                    </li>
                    <li className="relative md:static" ref={dropdownRef}>
                        <button
                            onClick={toggleServicesDropdown}
                            className="hover:underline block w-full text-left py-2 md:py-0 flex items-center justify-between md:justify-start"
                        >
                            Services
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
                            <ul className="absolute left-0 md:left-auto md:right-auto mt-2 md:mt-6 bg-[#e92b26] rounded-md shadow-lg z-10 w-48 md:w-auto md:min-w-[150px]">
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(1)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Einkaufen
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(2)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Fensterputzen
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(3)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Kleine Reparaturarbeiten
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(4)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Wohnungsauflösung
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(5)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Entrümpelung
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(6)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Hausreinigung
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(7)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Winterdienst
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(8)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Montagearbeiten
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleServiceClick(9)}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                    >
                                        Gartenarbeiten
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            onClick={() => handleMenuItemClick('testimonials')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Testimonials
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMenuItemClick('pricing')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Pricing
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleMenuItemClick('contact')}
                            className="hover:underline block w-full text-left py-2 md:py-0"
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
