// src/pages/landing/TestimonialsSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/autoplay'; // If using autoplay
import 'swiper/css/pagination'; // If using pagination
import { Autoplay, Pagination } from 'swiper/modules'; // Import Swiper modules


const testimonials = [
    {
        quote: "Best landscaping service ever! My garden has never looked this good.",
        name: "Jane Doe",
        image: "/assets/images/client1.jpg",
    },
    {
        quote: "Amazing service and very professional! Highly recommend.",
        name: "John Smith",
        image: "/public/assets/images/client2.jpg",
    },
    {
        quote: "Great attention to detail and excellent customer service.",
        name: "Emily Johnson",
        image: "/assets/images/client3.jpg",
    },
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-12 text-[#44403d]">What Our Clients Say</h2>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="w-full max-w-3xl mx-auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-[#e92b26]"
                                />
                                <p className="text-lg italic text-[#44403d] mb-4">"{testimonial.quote}"</p>
                                <h3 className="text-[#e92b26] font-bold">{testimonial.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSection;
