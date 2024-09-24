// src/components/services/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col justify-between h-full"
            onClick={onClick}
        >
            <img src={service.image} alt={service.title} className="w-full h-50 object-center" />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-[#44403d]">{service.title}</h3>
                    <p className="text-[#e92b26]">{service.description}</p>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-[#44403d] text-white rounded hover:bg-gray-700 transition duration-300 self-end">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
