// src/pages/landing/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
            style={{ backgroundImage: 'url(/assets/images/hero.jpg)' }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start justify-center h-full">
                <div className="flex md:flex-row flex-col items-start md:items-center ">
                    <p className="text-sm w-20 md:text-4xl font-bold text-[#f9f9f9] md:mt-2 md:mr-4">
                        WIR SIND
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold text-[#e92b26] tracking-tight">
                        IHRE HILFE
                    </h1>
                </div>
                <h1 className="text-4xl md:text-6xl md:self-center font-bold text-[#f9f9f9] mb-6 tracking-tight">
                    RUND UMS HAUS
                </h1>
                <button onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                    className="group relative w-auto md:w-1/2 md:self-center inline-flex items-center hover:scale-105 justify-center px-8 py-4 text-lg font-medium text-white bg-[#e92b26] rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-green-600">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#e92b26] to-[#44403d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                    <span className="relative">Get Started</span>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
