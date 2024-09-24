// src/pages/service/ServiceDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Detailed data for each service, ensure all IDs from ServicesSection are included here
const serviceData = [
    { id: 1, title: 'Einkaufen', description: 'Detailed description about Einkaufen...', images: ['/assets/images/Einkaufen.png', '/assets/images/Einkaufen2.png'] },
    { id: 2, title: 'Fensterputzen', description: 'Detailed description about Fensterputzen...', images: ['/public/assets/images/Fensterputzen.png', '/public/assets/images/Fensterputzen2.png'] },
    { id: 3, title: 'Kleine Reparaturarbeiten', description: 'Detailed description about Kleine Reparaturarbeiten...', images: ['/public/assets/images/Reparaturarbeiten.png', '/public/assets/images/Reparaturarbeiten2.png'] },
    { id: 4, title: 'Wohnungsauflösung', description: 'Detailed description about Wohnungsauflösung...', images: ['/public/assets/images/Wohnungsauflösung.png', '/public/assets/images/Wohnungsauflösung2.png'] },
    { id: 5, title: 'Entrümpelung', description: 'Detailed description about Entrümpelung...', images: ['/public/assets/images/Entrümpelung.png', '/public/assets/images/Entrümpelung2.png'] },
    { id: 6, title: 'Hausreinigung', description: 'Detailed description about Hausreinigung...', images: ['/public/assets/images/Hausreinigung.png', '/public/assets/images/Hausreinigung2.png'] },
    { id: 7, title: 'Winterdienst', description: 'Detailed description about Winterdienst...', images: ['/public/assets/images/Winterdienst.png', '/public/assets/images/Winterdienst2.png'] },
    { id: 8, title: 'Montagearbeiten', description: 'Detailed description about Montagearbeiten...', images: ['/public/assets/images/Montagearbeiten.png', '/public/assets/images/Montagearbeiten2.png'] },
    { id: 9, title: 'Gartenarbeiten', description: 'Detailed description about Gartenarbeiten...', images: ['/public/assets/images/Gartenarbeiten.png', '/public/assets/images/Gartenarbeiten2.png'] },
];

const ServiceDetailPage = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [service, setService] = useState(null);

    useEffect(() => {
        const selectedService = serviceData.find((service) => service.id === parseInt(id)); // Find the service based on ID
        setService(selectedService); // Set the found service
    }, [id]);

    if (!service) return <p>Loading...</p>; // Show loading text if service data is not ready

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-[#44403d]">{service.title}</h2>
                <p className="text-lg text-[#e92b26] mb-6">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.images.map((image, index) => (
                        <img key={index} src={image} alt={service.title} className="rounded-lg shadow-lg" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailPage;
