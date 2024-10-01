import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Grid } from 'swiper/modules';
import { FaTimes, FaExpand, FaHome, FaPhoneAlt } from 'react-icons/fa';


// Importiere Galeriebilder
const galleryImages = Array.from({ length: 13 }, (_, index) =>
    `/assets/images/gallery${index + 1}.jpg`
);
const serviceData = [
    { id: 1, title: 'Einkaufen', description: 'Unser Einkaufsservice entlastet Sie im Alltag. Wir erledigen Ihre Einkäufe zuverlässig und pünktlich, egal ob Lebensmittel, Medikamente oder andere Besorgungen. Ideal für Senioren, Berufstätige oder Menschen mit eingeschränkter Mobilität.', images: ['/assets/images/Einkaufen.png'] },
    { id: 2, title: 'Fensterputzen', description: 'Professionelle Fensterreinigung für strahlenden Durchblick. Wir reinigen alle Arten von Fenstern, Fensterrahmen und Fensterbänke gründlich und streifenfrei. Auch für schwer erreichbare Fenster und Glasflächen geeignet.', images: ['/assets/images/Fensterputzen.png'] },
    { id: 3, title: 'Kleine Reparaturarbeiten', description: 'Schnelle und kompetente Hilfe bei kleinen Reparaturen im Haus. Von tropfenden Wasserhähnen über klemmende Türen bis hin zu lockeren Fliesen - wir kümmern uns um alle anfallenden Kleinreparaturen.', images: ['/assets/images/Reparaturarbeiten.png'] },
    { id: 4, title: 'Wohnungsauflösung', description: 'Umfassender Service zur kompletten Auflösung von Wohnungen oder Häusern. Wir organisieren die fachgerechte Entsorgung, Verwertung oder den Verkauf von Möbeln und Gegenständen. Inkl. Endreinigung und Übergabe an Vermieter oder neue Eigentümer.', images: ['/assets/images/Wohnungsauflösung.png'] },
    { id: 5, title: 'Entrümpelung', description: 'Professionelle Entrümpelung von Kellern, Dachböden, Garagen oder ganzen Wohnungen. Wir sortieren, entsorgen fachgerecht und recyceln, wo möglich. Optional bieten wir auch eine Wertanrechnung für gut erhaltene Gegenstände.', images: ['/assets/images/Entrümpelung.png'] },
    { id: 6, title: 'Hausreinigung', description: 'Gründliche Reinigung Ihres gesamten Zuhauses. Von der Küche über Badezimmer bis hin zu Wohn- und Schlafräumen sorgen wir für Sauberkeit und Hygiene. Regelmäßige oder einmalige Reinigungen nach Ihren Wünschen.', images: ['/assets/images/Hausreinigung.png'] },
    { id: 7, title: 'Winterdienst', description: 'Zuverlässiger Winterdienst für sichere Wege. Wir räumen Schnee, streuen bei Glättegefahr und sorgen dafür, dass Ihre Gehwege und Zufahrten auch bei winterlichen Bedingungen sicher begehbar sind.', images: ['/assets/images/Winterdienst.png'] },
    { id: 8, title: 'Montagearbeiten', description: 'Fachgerechte Montage von Möbeln, Lampen, Regalen und mehr. Ob IKEA-Schrank oder komplexe Wandmontagen - wir bringen Ihr Zuhause in Form. Inkl. sauberer Arbeitsweise und Entsorgung von Verpackungsmaterial.', images: ['/assets/images/Montagearbeiten.png'] },
    { id: 9, title: 'Gartenarbeiten', description: 'Umfassende Gartenpflege für einen gepflegten Außenbereich. Von Rasenmähen über Heckenschnitt bis hin zu Beetpflege und Unkrautbeseitigung. Wir gestalten und pflegen Ihren Garten nach Ihren Wünschen.', images: ['/assets/images/Gartenarbeiten.png'] },
];

const completedJobs = [
    { title: 'Gartenpflege', description: 'Umfassende Gartenpflege einschließlich Unkrautjäten, Pflanzen und allgemeiner Instandhaltung für einen makellosen Außenbereich.', images: ['/assets/images/gallery6.jpg', '/assets/images/gallery10.jpg'] },
    { title: 'Heckenschnitt', description: 'Präzises Formen und Beschneiden von Hecken zur Verbesserung der Landschaftsästhetik und Förderung eines gesunden Wachstums.', images: ['/assets/images/gallery3.jpg', '/assets/images/gallery8.jpg'] },
    { title: 'Rasenmähen', description: 'Regelmäßiger Rasenmähservice zur Erhaltung eines gepflegten und gesunden Rasenbildes.', images: ['/assets/images/gallery9.jpg', '/assets/images/gallery10.jpg'] },
    { title: 'Poolreinigung', description: 'Gründliche Reinigung und Wartung von Schwimmbädern, um sichere und hygienische Wasserbedingungen zu gewährleisten.', images: ['/assets/images/gallery4.jpg'] },
    { title: 'Baumschnitt', description: 'Professioneller Baumschnitt zur Verbesserung der Baumgesundheit, Sicherheit und des Gesamterscheinungsbildes des Grundstücks.', images: ['/assets/images/gallery1.jpg', '/assets/images/gallery2.jpg'] },
    { title: 'Hochdruckreinigung', description: 'Hochdruckreinigung von Außenflächen zur Entfernung von Schmutz, Dreck und Flecken, um das ursprüngliche Erscheinungsbild wiederherzustellen.', images: ['/assets/images/gallery7.jpg', '/assets/images/gallery11.jpg'] },
];

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const navigate = useNavigate();
    const [fullViewImage, setFullViewImage] = useState(null);

    useEffect(() => {
        const selectedService = serviceData.find((service) => service.id === parseInt(id));
        setService(selectedService);
    }, [id]);

    if (!service) return <p>Laden...</p>;

    const handleServiceClick = (serviceId) => {
        navigate(`/services/${serviceId}`);
    };

    const openFullView = (image) => {
        setFullViewImage(image);
    };

    const closeFullView = () => {
        setFullViewImage(null);
    };

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="container mx-auto">
                {/* Hauptdienstkarte */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row mb-16 transition-all duration-300 hover:shadow-3xl">
                    <div
                        className="w-full  lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto bg-cover bg-bottom relative"
                        style={{ backgroundImage: `url(${service.images[0]})` }}
                    >
                    </div>

                    <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between bg-gradient-to-br from-white to-gray-100">
                        <p className="text-lg sm:text-xl text-[#44403d] mb-8 leading-relaxed">{service.description}</p>

                        <div className="mb-8">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-[#e92b26] mb-6">Hauptmerkmale</h3>
                            <ul className="space-y-3 text-[#44403d] text-lg">
                                {service.title === 'Einkaufen' && (
                                    <>
                                        <li>Zuverlässiger Einkaufsservice</li>
                                        <li>Pünktliche Lieferung</li>
                                        <li>Für Senioren, Berufstätige und Menschen mit eingeschränkter Mobilität</li>
                                    </>
                                )}
                                {service.title === 'Fensterputzen' && (
                                    <>
                                        <li>Professionelle Fensterreinigung</li>
                                        <li>Streifenfreie Reinigung</li>
                                        <li>Geeignet für schwer erreichbare Fenster</li>
                                    </>
                                )}
                                {service.title === 'Kleine Reparaturarbeiten' && (
                                    <>
                                        <li>Schnelle Hilfe bei Kleinreparaturen</li>
                                        <li>Vielseitige Kompetenz</li>
                                        <li>Effiziente Problemlösung</li>
                                    </>
                                )}
                                {service.title === 'Wohnungsauflösung' && (
                                    <>
                                        <li>Komplette Auflösung von Wohnungen oder Häusern</li>
                                        <li>Fachgerechte Entsorgung und Verwertung</li>
                                        <li>Endreinigung und Übergabe inklusive</li>
                                    </>
                                )}
                                {service.title === 'Entrümpelung' && (
                                    <>
                                        <li>Professionelle Entrümpelung</li>
                                        <li>Fachgerechte Entsorgung und Recycling</li>
                                        <li>Optional: Wertanrechnung für gut erhaltene Gegenstände</li>
                                    </>
                                )}
                                {service.title === 'Hausreinigung' && (
                                    <>
                                        <li>Gründliche Reinigung aller Räume</li>
                                        <li>Flexible Reinigungsintervalle</li>
                                        <li>Maßgeschneiderte Reinigungspläne</li>
                                    </>
                                )}
                                {service.title === 'Winterdienst' && (
                                    <>
                                        <li>Zuverlässige Schneeräumung</li>
                                        <li>Streudienst bei Glättegefahr</li>
                                        <li>Sicherstellung der Verkehrssicherheit</li>
                                    </>
                                )}
                                {service.title === 'Montagearbeiten' && (
                                    <>
                                        <li>Fachgerechte Möbelmontage</li>
                                        <li>Saubere Arbeitsweise</li>
                                        <li>Entsorgung von Verpackungsmaterial</li>
                                    </>
                                )}
                                {service.title === 'Gartenarbeiten' && (
                                    <>
                                        <li>Umfassende Gartenpflege</li>
                                        <li>Individuelle Gartengestaltung</li>
                                        <li>Regelmäßige oder einmalige Pflegeeinsätze</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => navigate('/')}
                                className="p-3 bg-[#44403d] text-white rounded-full hover:bg-[#e92b26] transition-all duration-300 shadow-md"
                            >
                                <FaHome size={24} />
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/');
                                    setTimeout(() => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                }}
                                className="px-6 py-3 flex flex-row items-center justify-between bg-[#e92b26] text-white text-lg rounded-full hover:bg-[#44403d] transition-all duration-300 shadow-md"
                            >
                                <FaPhoneAlt className="mr-2" /> Kontakt aufnehmen
                            </button>
                        </div>
                    </div>
                </div>

                {/* Abgeschlossene Aufträge Galerie */}
                <div className="my-16">
                    <h3 className="text-3xl font-semibold text-[#e92b26] text-center mb-8">Unsere abgeschlossenen Aufträge</h3>
                    <Swiper
                        modules={[Grid, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full pb-12"
                    >
                        {completedJobs.map((job, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105">
                                    <div className="relative overflow-hidden">
                                        <Swiper
                                            modules={[Pagination, Autoplay]}
                                            pagination={{ clickable: true }}
                                            autoplay={{ delay: 3000 }}
                                            loop
                                            className="w-full h-64 sm:h-80"
                                        >
                                            {job.images.map((image, imgIndex) => (
                                                <SwiperSlide key={imgIndex}>
                                                    <div className="relative">
                                                        <img
                                                            src={image}
                                                            alt={`${job.title} - Bild ${imgIndex + 1}`}
                                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <button
                                                                onClick={() => openFullView(image)}
                                                                className="absolute top-6 bg-white text-[#e92b26] px-4 py-2 rounded-full font-semibold hover:bg-[#e92b26] hover:text-white flex items-center"
                                                            >
                                                                <FaExpand className="mr-2" /> Vergrößern
                                                            </button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className="p-4 bg-white">
                                        <h4 className="text-xl font-bold text-[#44403d] mb-2">{job.title}</h4>
                                        <p className="text-sm text-[#44403d] mb-4">{job.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Swiper-Layout für schnelle Navigation zu anderen Diensten */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-[#e92b26] text-center mb-8">Entdecken Sie andere Dienste</h3>
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
                        className="w-full pb-12"
                    >
                        {serviceData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="aspect-w-16 aspect-h-9 mb-4">
                                        <img
                                            src={service.images[0]}
                                            alt={service.title}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#44403d] mb-2">{service.title}</h4>
                                    <p className="text-base text-[#e92b26] mb-4 flex-grow">Erfahren Sie mehr über diesen Dienst</p>
                                    <button
                                        onClick={() => {
                                            handleServiceClick(service.id);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="w-full px-4 py-2 bg-[#44403d] text-white rounded-full hover:bg-[#e92b26] transition-all duration-300"
                                    >
                                        Mehr erfahren
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Vollbild-Ansicht Modal */}
            {fullViewImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-4xl max-h-full">
                        <img src={fullViewImage} alt="Vollbild-Ansicht" className="w-full h-auto max-h-[90vh] object-contain" />
                        <button
                            onClick={closeFullView}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full text-[#e92b26] hover:text-white w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-[#e92b26] transition-colors duration-300"
                        >
                            <FaTimes className="text-xl sm:text-2xl" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServiceDetail;
