// src/components/common/Card.jsx
import React from 'react';

const Card = ({ children }) => (
    <div className="bg-gray-light p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-red">
        {children}
    </div>
);

export default Card;
