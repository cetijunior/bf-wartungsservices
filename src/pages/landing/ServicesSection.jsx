// src/pages/landing/ServicesSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ServiceCard from '../../components/services/ServiceCard';

const ServicesSection = () => {
    const navigate = useNavigate();

    const services = [
        { id: 1, title: 'Einkaufen', description: 'Wir erledigen Ihre Einkäufe im Supermarkt, Bauhaus, etc.', image: '/assets/images/Einkaufen.png' },
        { id: 2, title: 'Fensterputzen', description: 'Professionelle Reinigung Ihrer Fenster, auch im Wintergarten.', image: '/public/assets/images/Fensterputzen.png' },
        { id: 3, title: 'Kleine Reparaturarbeiten', description: 'Kleine Reparaturen rund um Ihr Haus.', image: '/assets/images/Reparaturarbeiten.png' },
        { id: 4, title: 'Wohnungsauflösung', description: 'Unterstützung bei der Wohnungsauflösung und Entrümpelung.', image: '/assets/images/Wohnungsauflösung.png' },
        { id: 5, title: 'Entrümpelung', description: 'Entrümpelung von Häusern, Garagen, Kellern und mehr.', image: '/assets/images/Entrümpelung.png' },
        { id: 6, title: 'Hausreinigung', description: 'Komplette Hausreinigung für ein sauberes Zuhause.', image: '/assets/images/Hausreinigung.png' },
        { id: 7, title: 'Winterdienst', description: 'Winterdienst inklusive Schneeräumen und Streuen.', image: '/assets/images/Winterdienst.png' },
        { id: 8, title: 'Montagearbeiten', description: 'Montage von Möbeln und anderen Gegenständen.', image: '/assets/images/Montagearbeiten.png' },
        { id: 9, title: 'Gartenarbeiten', description: 'Pflege Ihres Gartens und Ihrer Grünflächen.', image: '/assets/images/Gartenarbeiten.png' },
    ];

    const handleServiceClick = (id) => {
        navigate(`/services/${id}`);
    };

    return (
        <section id="services" className="py-20 px-6 bg-gray-100">
            <div className="container lg:px-10 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10 text-[#44403d]">Unsere Dienstleistungen</h2>

                {/* Swiper for small screens, Grid for medium and larger screens */}
                <div className="block md:hidden">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 3000, // Auto-scroll delay in milliseconds
                            disableOnInteraction: false, // Continue autoplay after user interaction
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }} // Pagination dots
                        spaceBetween={16}
                        loop={true}
                        slidesPerView={1}
                        className="w-full"
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id}>
                                <ServiceCard service={service} onClick={() => handleServiceClick(service.id)} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Improved Grid layout for medium and larger screens */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onClick={() => handleServiceClick(service.id)}
                            className="transform transition duration-300 hover:scale-105 hover:shadow-lg" // Add hover effect
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
