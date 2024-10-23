// src/components/pricing/PriceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PriceCard = ({ plan, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-between h-full"
        >
            {/* Title Section */}
            <h3 className="text-2xl font-bold mb-4 text-[#e92b26]">{plan.title}</h3>

            {/* Price Section */}
            <p className="text-4xl font-bold mb-6 text-[#44403d]">
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
            {plan.note && <p className="text-sm text-gray-500 mb-6 text-center">{plan.note}</p>}

            {/* Button Section */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClick}
                className="mt-auto w-full py-3 bg-[#e92b26] text-white font-semibold rounded-full hover:bg-[#44403d] transition-colors duration-300"
            >
                {plan.buttonText}
            </motion.button>
        </motion.div>
    );
};

export default PriceCard;
