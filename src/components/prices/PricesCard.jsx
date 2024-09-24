// src/components/pricing/PriceCard.jsx
import React from 'react';

const PriceCard = ({ plan, onClick }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-full transition-transform duration-300 hover:scale-105">
            {/* Title Section */}
            <h3 className="text-2xl font-bold mb-4 text-[#e92b26]">{plan.title}</h3>

            {/* Price Section with hover effect */}
            <p className="text-4xl font-bold mb-4 text-[#44403d] transition-all duration-300 hover:text-[#e92b26]">
                {plan.price}
            </p>

            {/* Features List */}
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

            {/* Note Section */}
            {plan.note && <p className="text-sm text-gray-500 mb-4">{plan.note}</p>}

            {/* Button Section */}
            <button
                onClick={onClick}
                className="group relative mt-auto w-3/5 self-center px-4 py-2  text-white rounded-full bg-[#e92b26] hover:w-full transition-all duration-300"
            >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br rounded-full from-[#e92b26] to-[#44403d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <span className="relative">{plan.buttonText}</span>
            </button>
        </div>
    );
};

export default PriceCard;
