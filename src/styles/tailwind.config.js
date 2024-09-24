// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                rotateImage: 'rotateImage 1s infinite',
            },
            keyframes: {
                rotateImage: {
                    '0%': { transform: 'rotate3d(0, 0, 0, 0deg) scale(1)' },
                    '50%': { transform: 'rotate3d(0, 0, 1, 180deg) scale(1.1)' },
                    '100%': { transform: 'rotate3d(0, 0, 1, 360deg) scale(1.1)' },
                },
            },
        },
    },
    plugins: [],
};
