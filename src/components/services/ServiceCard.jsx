// src/components/services/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service, onClick }) => {

    return (
        <div
            className="bg-white w-full rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-red-400 shadow-lg overflow-hidden cursor-pointer flex flex-col justify-between h-full transform transition duration-300"
        // Adjust max-width to make the cards smaller
        >
            <img src={service.image} alt={service.title} className="w-auto sm:w-full h-auto sm:h-40 object-top" /> {/* Adjusted height */}
            <div className="p-4 flex flex-col flex-grow"> {/* Reduced padding */}
                <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-[#44403d]">{service.title}</h3> {/* Reduced font size */}
                    <p className="text-[#e92b26] text-sm">{service.description}</p> {/* Adjusted text size */}
                </div>
                <button
                    onClick={onClick}
                    className="mt-4 lg:w-3/5 self-center px-4 py-2 bg-[#44403d] text-white rounded hover:bg-[#e92b26] hover:w-full transition-all duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
