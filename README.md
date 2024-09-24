│
├── /public
│   ├── /assets
│   │   ├── /images             // Store all images used in the project
│   │   ├── /videos             // Store all video files (if needed)
│   │   └── /icons              // Store all icons
│   └── favicon.ico             // Website favicon
│
├── /src
│   ├── /components             // Reusable components directory
│   │   ├── /common             // Common reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Toast.jsx
│   │   │
│   │   ├── /layout             // Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── /media              // Media components
│   │   │   └── ImageCarousel.jsx
│   │   │
│   │   └── /services           // Components specific to service pages
│   │       ├── ServiceCard.jsx
│   │       └── ServiceDetail.jsx
│   │
│   ├── /pages                  // All main pages
│   │   ├── /landing            // Landing Page sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── PricingSection.jsx
│   │   │   └── ContactSection.jsx
│   │   │
│   │   └── /service            // Service detail pages
│   │       ├── ServiceDetailPage.jsx
│   │
│   ├── /content                // Content files for text, images, etc.
│   │   └── landingPageContent.js
│   │
│   ├── /hooks                  // Custom React hooks
│   │   └── useFetch.js
│   │
│   ├── /styles                 // TailwindCSS and global styles
│   │   ├── index.css           // Main CSS file with Tailwind imports
│   │   └── tailwind.config.js  // Tailwind configuration
│   │
│   ├── App.jsx                 // Main app component
│   ├── index.jsx               // Main entry point for React
│   └── main.jsx                // Vite's entry point
│
├── package.json                // Project metadata and dependencies
├── vite.config.js              // Vite configuration file
├── tailwind.config.js          // TailwindCSS setup
└── README.md                   // Documentation for the project