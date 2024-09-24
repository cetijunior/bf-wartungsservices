import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const serviceData = [
    { id: 1, title: 'Einkaufen', description: 'Detailed description about Einkaufen...', images: ['/assets/images/Einkaufen.png', '/assets/images/Einkaufen2.png'] },
    { id: 2, title: 'Fensterputzen', description: 'Detailed description about Fensterputzen...', images: ['/assets/images/Fensterputzen.png', '/assets/images/Fensterputzen2.png'] },
    { id: 3, title: 'Kleine Reparaturarbeiten', description: 'Detailed description about Kleine Reparaturarbeiten...', images: ['/assets/images/Reparaturarbeiten.png', '/assets/images/Reparaturarbeiten2.png'] },
    { id: 4, title: 'Wohnungsauflösung', description: 'Detailed description about Wohnungsauflösung...', images: ['/assets/images/Wohnungsauflösung.png', '/assets/images/Wohnungsauflösung2.png'] },
    { id: 5, title: 'Entrümpelung', description: 'Detailed description about Entrümpelung...', images: ['/assets/images/Entrümpelung.png', '/assets/images/Entrümpelung2.png'] },
    { id: 6, title: 'Hausreinigung', description: 'Detailed description about Hausreinigung...', images: ['/assets/images/Hausreinigung.png', '/assets/images/Hausreinigung2.png'] },
    { id: 7, title: 'Winterdienst', description: 'Detailed description about Winterdienst...', images: ['/assets/images/Winterdienst.png', '/assets/images/Winterdienst2.png'] },
    { id: 8, title: 'Montagearbeiten', description: 'Detailed description about Montagearbeiten...', images: ['/assets/images/Montagearbeiten.png', '/assets/images/Montagearbeiten2.png'] },
    { id: 9, title: 'Gartenarbeiten', description: 'Detailed description about Gartenarbeiten...', images: ['/assets/images/Gartenarbeiten.png', '/assets/images/Gartenarbeiten2.png'] },
];

const ServiceDetailPage = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const selectedService = serviceData.find((service) => service.id === parseInt(id));
        setService(selectedService);
    }, [id]);

    if (!service) return <p>Loading...</p>;

    const handleServiceClick = (serviceId) => {
        // Navigate to the correct service page based on the ID
        navigate(`/services/${serviceId}`);
    };

    return (
        <section className="py-10 px-6 bg-gray-50">
            <div className="container mx-auto">
                {/* Main Service Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row my-10">
                    <div
                        className="lg:w-1/2 -mt-[10rem] h-72 lg:h-auto bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.images[0]})` }}
                    ></div>

                    <div className="w-full lg:w-1/2 px-1 sm:px-8 flex flex-col justify-between">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#44403d] mb-4">{service.title}</h2>
                        <p className="text-base sm:text-lg text-[#44403d] mb-6 leading-relaxed">{service.description}</p>

                        <div className="mb-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-[#e92b26] mb-2">Key Highlights</h3>
                            <ul className="list-disc list-inside text-[#44403d]">
                                <li>Professional and reliable service</li>
                                <li>High-quality standards</li>
                                <li>Customer satisfaction guaranteed</li>
                                <li>Customized solutions for your needs</li>
                            </ul>
                        </div>

                        <button
                            onClick={() => navigate('/')}
                            className="px-4 sm:px-6 py-2 sm:py-3 mb-3 bg-[#44403d] text-white rounded-full hover:bg-[#e92b26] transition-all duration-300 shadow-md self-center sm:self-end"
                        >
                            Go Back
                        </button>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="my-12">
                    <h3 className="text-2xl font-semibold text-[#e92b26] text-center mb-6">Gallery of Completed Jobs</h3>
                    <div className="block lg:hidden">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="w-full max-w-3xl mx-auto"
                        >
                            {Array(6)
                                .fill()
                                .map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={`https://via.placeholder.com/300?text=Job+${index + 1}`}
                                            alt={`Completed job ${index + 1}`}
                                            className="rounded-lg shadow-lg w-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>

                    <div className="hidden lg:grid grid-cols-3 gap-4">
                        {Array(6)
                            .fill()
                            .map((_, index) => (
                                <div key={index} className="rounded-lg shadow-lg">
                                    <img
                                        src={`https://via.placeholder.com/300?text=Job+${index + 1}`}
                                        alt={`Completed job ${index + 1}`}
                                        className="rounded-lg shadow-lg w-full object-cover"
                                    />
                                </div>
                            ))}
                    </div>
                </div>

                {/* Swiper layout for quick navigation to other services on all screen sizes */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-[#e92b26] text-center mb-6">Explore Other Services</h3>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={true}
                        autoplay={{ delay: 3000 }}
                        loop
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full pb-10 max-w-full mx-auto"
                    >
                        {serviceData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 text-left">
                                    <img
                                        src={service.images[0]}
                                        alt={service.title}
                                        className="w-full h-28 object-cover rounded-t-lg mb-4"
                                    />
                                    <h4 className="text-lg font-bold text-[#44403d]">{service.title}</h4>
                                    <p className="text-sm text-[#e92b26] mt-2">Learn more about this service</p>
                                    <button
                                        onClick={() => {
                                            handleServiceClick(service.id);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="mt-4 w-full px-4 py-2 bg-[#44403d] text-white rounded hover:bg-[#e92b26] transition-all duration-300"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    );
};

export default ServiceDetailPage;
