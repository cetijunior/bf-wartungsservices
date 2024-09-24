// src/pages/landing/PricingSection.jsx
import React from 'react';

const PricingSection = () => {
    const pricingPlans = [
        {
            title: 'Basic Package',
            price: '30€ / Stunde',
            features: ['Hausreinigung', 'Kleine Reparaturarbeiten', 'Winterdienst'],
            note: '* Pro benötigte Person',
            buttonText: 'Get Started',
        },
        {
            title: 'Standard Package',
            price: '50€ / Stunde',
            features: ['Fensterputzen', 'Montagearbeiten', 'Hausmeisterservice', 'Gartenarbeiten'],
            note: '* Bei größeren Aufträgen Pauschalpreise möglich',
            buttonText: 'Get Started',
        },
        {
            title: 'Premium Package',
            price: 'Pauschalpreis nach Absprache',
            features: ['Wohnungsauflösung', 'Entrümpelung', 'Abbrucharbeiten'],
            note: '',
            buttonText: 'Contact Us',
        },
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-12 text-[#44403d]">Our Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-between h-full"
                        >
                            <div className="flex flex-col items-center mb-6 lg:mb-8">
                                <h3 className="text-2xl font-bold mb-4 text-[#e92b26]">{plan.title}</h3>
                                <p className="text-4xl font-bold mb-4 text-[#44403d]">{plan.price}</p>
                                <ul className="text-gray-700 mb-6 space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <svg
                                                className="w-5 h-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {plan.note && <p className="text-sm text-gray-500 mb-4">{plan.note}</p>}
                            </div>
                            <button
                                onClick={scrollToContact}
                                className="mt-auto w-full px-6 py-2 bg-[#44403d] text-white rounded-full hover:bg-gray-700 transition duration-300 lg:mt-0"
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
