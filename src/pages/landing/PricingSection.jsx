// src/pages/landing/PricingSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import PriceCard from '../../components/prices/PricesCard'; // Adjust the import path as needed

const PricingSection = () => {
    const pricingPlans = [
        {
            title: 'Basic Package',
            price: '30€ / Stunde',
            features: ['Hausreinigung', 'Kleine Reparaturarbeiten', 'Winterdienst'],
            note: '* Pro benötigte Person',
            buttonText: 'Get Started',
        },
        {
            title: 'Standard Package',
            price: '50€ / Stunde',
            features: ['Fensterputzen', 'Montagearbeiten', 'Hausmeisterservice', 'Gartenarbeiten'],
            note: '* Bei größeren Aufträgen Pauschalpreise möglich',
            buttonText: 'Get Started',
        },
        {
            title: 'Premium Package',
            price: 'Pauschalpreis nach Absprache',
            features: ['Wohnungsauflösung', 'Entrümpelung', 'Abbrucharbeiten'],
            note: '',
            buttonText: 'Contact Us',
        },
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-12 text-[#44403d]">Our Pricing</h2>

                {/* Swiper for small and medium screens */}
                <div className="block md:hidden">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        spaceBetween={20}
                        slidesPerView={1}
                        className="w-full max-w-md mx-auto"
                    >
                        {pricingPlans.map((plan, index) => (
                            <SwiperSlide key={index}>
                                <PriceCard plan={plan} onClick={scrollToContact} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Grid layout for large screens */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <PriceCard key={index} plan={plan} onClick={scrollToContact} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
