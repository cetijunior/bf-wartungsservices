// src/pages/landing/TestimonialsSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        quote: "BF Wartungsservice hat unseren Pool professionell gereinigt und gewartet. Die Arbeit war erstklassig und der Preis fair. Besonders beeindruckt hat mich ihre Fachkenntnis und Gründlichkeit.",
        name: "Maria Müller",
        location: "Fürth",
        service: "Poolpflege",
        image: "/assets/images/gallery4.jpg",
    },
    {
        quote: "Ich bin begeistert von der Pflege meines Gartens durch BF Wartungsservice. Sie haben meine Hecken und Sträucher perfekt in Form gebracht und alles sieht nun viel gepflegter aus.",
        name: "Andreas Weber",
        location: "Nürnberg",
        service: "Gartenpflege",
        image: "/assets/images/gallery11.jpg",
    },
    {
        quote: "Die Baumpflege von BF Wartungsservice war hervorragend. Sie haben unsere alten Bäume fachgerecht beschnitten und dabei die Gesundheit der Bäume sowie die Sicherheit unseres Grundstücks berücksichtigt.",
        name: "Sabine Hoffmann",
        location: "Erlangen",
        service: "Baumpflege",
        image: "/assets/images/gallery1.jpg",
    },
    {
        quote: "Regelmäßige Rasenpflege war für mich immer eine Herausforderung. Seit BF Wartungsservice sich darum kümmert, sieht unser Rasen das ganze Jahr über perfekt aus. Professionell und zuverlässig!",
        name: "Michael Becker",
        location: "Schwabach",
        service: "Rasenmähen",
        image: "/assets/images/gallery9.jpg",
    },
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-12 text-[#44403d]">Was unsere Kunden sagen</h2>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="w-full max-w-4xl mx-auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.service} für ${testimonial.name}`}
                                    className="w-full md:w-1/3 h-64 object-cover mb-4 md:mb-0 md:mr-6 rounded-lg shadow-md"
                                />
                                <div className="md:w-2/3 text-left relative">
                                    <FaQuoteLeft className="text-[#e92b26] text-4xl absolute -top-6 -left-6 opacity-25" />
                                    <p className="text-lg italic text-[#44403d] mb-6 pl-8">{testimonial.quote}</p>
                                    <div className="flex items-center">
                                        <div className="w-1 h-12 bg-[#e92b26] mr-4"></div>
                                        <div>
                                            <h3 className="text-[#e92b26] font-bold text-xl">~ {testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                                            <p className="text-sm font-semibold text-[#44403d] mt-1">Dienst: {testimonial.service}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSection;
