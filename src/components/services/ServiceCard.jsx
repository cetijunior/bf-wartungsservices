// src/components/services/ServiceCard.jsx

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer flex flex-col justify-between h-full transform transition-all duration-300"
            onClick={onClick}
        >
            {/* Image Section */}
            <div className="relative overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover transition-transform duration-500"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#e92b26]">
                    {service.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {service.description}
                </p>
                <button
                    className="w-fit mx-auto px-12 py-3 mt-auto flex items-center justify-center gap-2 bg-[#44403d] text-white rounded-lg transition-all duration-300 hover:bg-[#e92b26] hover:shadow-xl hover:px-20 focus:outline-none focus:ring-2 focus:ring-[#e92b26] focus:ring-opacity-50"
                >
                    <span>Weiter</span>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M12 5l7 7-7 7"
                        />
                    </svg>
                </button>


            </div>
        </motion.div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ServiceCard;
