import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaTimes, FaExpand, FaHome, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Importiere Galeriebilder
// const galleryImages = Array.from({ length: 13 }, (_, index) =>
//     `/assets/images/gallery${index + 1}.jpg`
// );

const serviceData = [
	{
		id: 1,
		title: "Winterdienst",
		description: "Detailed description about Winterdienst...",
		images: [
			"/assets/images/Winterdienst.png",
			"/assets/images/Winterdienst2.png",
		],
	},
	{
		id: 2,
		title: "Hausreinigung",
		description: "Detailed description about Hausreinigung...",
		images: [
			"/assets/images/Hausreinigung.png",
			"/assets/images/Hausreinigung2.png",
		],
	},
	{
		id: 3,
		title: "Fensterputzen",
		description: "Detailed description about Fensterputzen...",
		images: [
			"/assets/images/Fensterputzen.png",
			"/assets/images/Fensterputzen2.png",
		],
	},
	{
		id: 4,
		title: "Entrümpelung",
		description: "Detailed description about Entrümpelung...",
		images: [
			"/assets/images/Entrümpelung.png",
			"/assets/images/Entrümpelung2.png",
		],
	},
	{
		id: 5,
		title: "Wohnungsauflösung",
		description: "Detailed description about Wohnungsauflösung...",
		images: [
			"/assets/images/Wohnungsauflösung.png",
			"/assets/images/Wohnungsauflösung2.png",
		],
	},
	{
		id: 6,
		title: "Kleine Reparaturarbeiten",
		description: "Detailed description about Kleine Reparaturarbeiten...",
		images: [
			"/assets/images/Reparaturarbeiten.png",
			"/assets/images/Reparaturarbeiten2.png",
		],
	},
	{
		id: 7,
		title: "Montagearbeiten",
		description: "Detailed description about Montagearbeiten...",
		images: [
			"/assets/images/Montagearbeiten.png",
			"/assets/images/Montagearbeiten2.png",
		],
	},
	{
		id: 8,
		title: "Gartenarbeiten",
		description: "Detailed description about Gartenarbeiten...",
		images: [
			"/assets/images/Gartenarbeiten.png",
			"/assets/images/Gartenarbeiten2.png",
		],
	},
];

const completedJobs = [
	{
		title: "Gartenpflege",
		description:
			"Umfassende Gartenpflege einschließlich Unkrautjäten, Pflanzen und allgemeiner Instandhaltung für einen makellosen Außenbereich.",
		images: ["/assets/images/gallery10.jpg", "/assets/images/gallery10.jpg"],
	},
	{
		title: "Heckenschnitt",
		description:
			"Präzises Formen und Beschneiden von Hecken zur Verbesserung der Landschaftsästhetik und Förderung eines gesunden Wachstums.",
		images: ["/assets/images/gallery8.jpg", "/assets/images/gallery3.jpg"],
	},
	{
		title: "Rasenmähen",
		description:
			"Regelmäßiger Rasenmähservice zur Erhaltung eines gepflegten und gesunden Rasenbildes.",
		images: ["/assets/images/gallery9.jpg", "/assets/images/gallery10.jpg"],
	},
	{
		title: "Poolreinigung",
		description:
			"Gründliche Reinigung und Wartung von Schwimmbädern, um sichere und hygienische Wasserbedingungen zu gewährleisten.",
		images: ["/assets/images/gallery4.jpg"],
	},
	{
		title: "Baumschnitt",
		description:
			"Professioneller Baumschnitt zur Verbesserung der Baumgesundheit, Sicherheit und des Gesamterscheinungsbildes des Grundstücks.",
		images: ["/assets/images/gallery1.jpg", "/assets/images/gallery2.jpg"],
	},
	{
		title: "Hochdruckreinigung",
		description:
			"Hochdruckreinigung von Außenflächen zur Entfernung von Schmutz, Dreck und Flecken, um das ursprüngliche Erscheinungsbild wiederherzustellen.",
		images: ["/assets/images/gallery11.jpg", "/assets/images/gallery7.jpg"],
	},
];

const ServiceDetail = () => {
	const { id } = useParams();
	const [service, setService] = useState(null);
	const navigate = useNavigate();
	const [fullViewImage, setFullViewImage] = useState(null);

	useEffect(() => {
		const selectedService = serviceData.find(
			(service) => service.id === parseInt(id)
		);
		setService(selectedService);
	}, [id]);

	if (!service) return <p>Laden...</p>;

	const handleServiceClick = (serviceId) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		navigate(`/services/${serviceId}`, { replace: true });
	};

	const openFullView = (image) => {
		setFullViewImage(image);
	};

	const closeFullView = () => {
		setFullViewImage(null);
	};

	return (
		<section className="py-20 px-6 ">
			<div className="container mx-auto">
				{/* Main Service Card */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="bg-white mt-5 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row mb-16"
				>
					<div
						className="lg:w-1/2 lg:h-auto h-52 w-full md:h-96 bg-cover bg-center"
						style={{ backgroundImage: `url(${service.images[0]})` }}
					></div>

					<div className="w-full lg:w-1/2 p-4 sm:p-10 flex flex-col justify-between">
						<h2 className="text-3xl font-bold text-[#e92b26] mb-6">
							{service.title}
						</h2>
						<p className="text-lg text-gray-700 mb-8 leading-relaxed">
							{service.description}
						</p>

						<div className="mb-8">
							<h3 className="text-2xl font-semibold text-gray-800 mb-4">
								Hauptmerkmale
							</h3>
							<ul className="space-y-3 text-gray-700 text-base list-disc list-inside">
								{service.title === "Einkaufen" && (
									<>
										<li>Zuverlässiger Einkaufsservice</li>
										<li>Pünktliche Lieferung</li>
										<li>
											Für Senioren, Berufstätige und Menschen mit
											eingeschränkter Mobilität
										</li>
									</>
								)}
								{service.title === "Fensterputzen" && (
									<>
										<li>Professionelle Fensterreinigung</li>
										<li>Streifenfreie Reinigung</li>
										<li>Geeignet für schwer erreichbare Fenster</li>
									</>
								)}
								{service.title === "Kleine Reparaturarbeiten" && (
									<>
										<li>Schnelle Hilfe bei Kleinreparaturen</li>
										<li>Vielseitige Kompetenz</li>
										<li>Effiziente Problemlösung</li>
									</>
								)}
								{service.title === "Wohnungsauflösung" && (
									<>
										<li>Komplette Auflösung von Wohnungen oder Häusern</li>
										<li>Fachgerechte Entsorgung und Verwertung</li>
										<li>Endreinigung und Übergabe inklusive</li>
									</>
								)}
								{service.title === "Entrümpelung" && (
									<>
										<li>Professionelle Entrümpelung</li>
										<li>Fachgerechte Entsorgung und Recycling</li>
										<li>
											Optional: Wertanrechnung für gut erhaltene Gegenstände
										</li>
									</>
								)}
								{service.title === "Hausreinigung" && (
									<>
										<li>Gründliche Reinigung aller Räume</li>
										<li>Flexible Reinigungsintervalle</li>
										<li>Maßgeschneiderte Reinigungspläne</li>
									</>
								)}
								{service.title === "Winterdienst" && (
									<>
										<li>Zuverlässige Schneeräumung</li>
										<li>Streudienst bei Glättegefahr</li>
										<li>Sicherstellung der Verkehrssicherheit</li>
									</>
								)}
								{service.title === "Montagearbeiten" && (
									<>
										<li>Fachgerechte Möbelmontage</li>
										<li>Saubere Arbeitsweise</li>
										<li>Entsorgung von Verpackungsmaterial</li>
									</>
								)}
								{service.title === "Gartenarbeiten" && (
									<>
										<li>Umfassende Gartenpflege</li>
										<li>Individuelle Gartengestaltung</li>
										<li>Regelmäßige oder einmalige Pflegeeinsätze</li>
									</>
								)}
							</ul>
						</div>

						<div className="flex flex-col sm:flex-row justify-start sm:justify-between items-center space-y-4 sm:space-y-0">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									navigate("/");
									setTimeout(() => {
										const contactSection = document.getElementById("contact");
										if (contactSection) {
											contactSection.scrollIntoView({ behavior: "smooth" });
										}
									}, 100);
								}}
								className="w-full sm:w-auto px-6 py-3 bg-[#e92b26] text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md flex items-center justify-center"
							>
								<FaPhoneAlt className="mr-2" /> Kontakt aufnehmen
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => navigate("/")}
								className="w-full sm:w-auto px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-[#e92b26] transition-all duration-300 shadow-md flex items-center justify-center"
							>
								<FaHome className="mr-2" /> Startseite
							</motion.button>
						</div>
					</div>
				</motion.div>

				{/* Completed Jobs Gallery */}
				<div className="my-16">
					<h3 className="text-3xl font-semibold text-[#e92b26] text-center mb-12">
						Unsere abgeschlossenen Aufträge
					</h3>
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={30}
						autoplay={{ delay: 200 }}
						loop={true}
						slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						className="w-full custom-swiper pb-4"
					>
						{completedJobs.map((job, index) => (
							<SwiperSlide key={index}>
								<motion.div
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.3 }}
									className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
								>
									<div className="relative">
										<img
											src={job.images[0]}
											alt={job.title}
											className="w-full h-56 object-cover"
										/>
										<button
											onClick={() => openFullView(job.images[0])}
											className="absolute top-4 right-4 bg-white text-[#e92b26] p-2 rounded-full hover:bg-[#e92b26] hover:text-white transition-colors"
										>
											<FaExpand size={18} />
										</button>
									</div>
									<div className="p-5 flex flex-col flex-grow">
										<h4 className="text-xl font-bold text-gray-800 mb-2">
											{job.title}
										</h4>
										<p className="text-gray-600 text-sm flex-grow">
											{job.description}
										</p>
									</div>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Other Services Slider */}
				<div className="mt-16">
					<h3 className="text-3xl font-semibold text-[#e92b26] text-center mb-12">
						Entdecken Sie andere Dienste
					</h3>
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={30}
						loop={true}
						slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						className="w-full custom-swiper pb-4"
					>
						{serviceData
							.filter((s) => s.id !== service.id)
							.map((serviceItem) => (
								<SwiperSlide key={serviceItem.id}>
									<motion.div
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.3 }}
										className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
									>
										<div className="relative">
											<img
												src={serviceItem.images[0]}
												alt={serviceItem.title}
												className="w-full sm:h-full h-56 object-cover"
											/>
										</div>
										<div className="p-5 flex flex-col flex-grow">
											<h4 className="text-xl font-bold text-gray-800 mb-2">
												{serviceItem.title}
											</h4>
											<p className="text-gray-600 text-sm flex-grow">
												Erfahren Sie mehr über diesen Dienst
											</p>
											<motion.button
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												onClick={() => handleServiceClick(serviceItem.id)}
												className="mt-4 px-4 py-2 bg-[#e92b26] text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
											>
												Mehr erfahren
											</motion.button>
										</div>
									</motion.div>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>

			{/* Fullscreen Image Modal */}
			{fullViewImage && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
					<div className="relative w-full max-w-4xl max-h-full">
						<img
							src={fullViewImage}
							alt="Vollbild-Ansicht"
							className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
						/>
						<button
							onClick={closeFullView}
							className="absolute top-4 right-4 bg-white text-[#e92b26] hover:bg-[#e92b26] hover:text-white rounded-full p-2 transition-colors duration-300"
						>
							<FaTimes size={24} />
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default ServiceDetail;
