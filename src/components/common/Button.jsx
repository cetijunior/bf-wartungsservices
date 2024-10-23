// src/components/common/Button.jsx
import React from 'react';

const Button = ({ children, ...props }) => (
    <button
        className="bg-red hover:bg-red-dark text-white px-6 py-2 rounded-full transition-colors duration-300"
        {...props}
    >
        {children}
    </button>
);

export default Button;
