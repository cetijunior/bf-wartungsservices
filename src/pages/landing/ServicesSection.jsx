// src/pages/landing/ServicesSection.jsx
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ServiceCard from "../../components/services/ServiceCard";
import FlyersSection from "../../components/services/FlyerSection"; // Ensure this path is correct
import { motion } from "framer-motion";

const ServicesSection = () => {
	const services = [
		{
			id: 1,
			title: "Winterdienst",
			description: "Winterdienst inklusive Schneeräumen und Streuen.",
			image: "/assets/images/Winterdienst.png",
		},
		{
			id: 2,
			title: "Hausreinigung",
			description: "Komplette Hausreinigung für ein sauberes Zuhause.",
			image: "/assets/images/Hausreinigung.png",
		},
		{
			id: 3,
			title: "Fensterputzen",
			description:
				"Professionelle Reinigung Ihrer Fenster, auch im Wintergarten.",
			image: "/assets/images/Fensterputzen.png",
		},
		{
			id: 4,
			title: "Entrümpelung",
			description: "Entrümpelung von Häusern, Garagen, Kellern und mehr.",
			image: "/assets/images/Entrümpelung.png",
		},
		{
			id: 5,
			title: "Wohnungsauflösung",
			description: "Unterstützung bei der Wohnungsauflösung und Entrümpelung.",
			image: "/assets/images/Wohnungsauflösung.png",
		},
		{
			id: 6,
			title: "Kleine Reparaturarbeiten",
			description: "Kleine Reparaturen rund um Ihr Haus.",
			image: "/assets/images/Reparaturarbeiten.png",
		},
		{
			id: 7,
			title: "Montagearbeiten",
			description: "Montage von Möbeln und anderen Gegenständen.",
			image: "/assets/images/Montagearbeiten.png",
		},
		{
			id: 8,
			title: "Gartenarbeiten",
			description: "Pflege Ihres Gartens und Ihrer Grünflächen.",
			image: "/assets/images/Gartenarbeiten.png",
		},
	];

	const navigate = useNavigate();

	const handleServiceClick = (id) => {
		navigate(`/services/${id}`);
	};

	return (
		<motion.section
			id="services"
			className="pt-20 pb-10 px-6 bg-transparent"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className="container mx-auto sm:text-center text-left">
				<motion.h2
					className="text-4xl font-bold mb-12 text-[#44403d]"
					initial={{ y: -50 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Unsere Dienstleistungen
				</motion.h2>

				{/* Services Section - right side */}
				<motion.div
					className="w-full lg:w-2/2"
					initial={{ x: 100 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.7 }}
				>
					{/* Swiper for small screens */}
					<div className="block md:hidden h-full">
						<Swiper
							modules={[Pagination, Autoplay]}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
								dynamicBullets: true,
							}}
							spaceBetween={60}
							loop={true}
							slidesPerView={1}
							className="w-full custom-swiper"
						>
							{services.map((service) => (
								<SwiperSlide key={service.id}>
									<ServiceCard
										service={service}
										onClick={() => handleServiceClick(service.id)}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					{/* Grid layout for medium and larger screens */}
					<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-6">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								whileHover={{ scale: 1.05 }}
							>
								<ServiceCard
									service={service}
									onClick={() => handleServiceClick(service.id)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
				{/* Flex container to align flyers on the left and services on the right */}
				<div className="flex flex-col sm:mt-10 mt-10 sm:-mb-16 -mb-16 lg:flex-row justify-evenly items-start gap-8">
					{/* Flyers Section - left side */}
					<motion.div
						className="w-full lg:hidden"
						initial={{ x: -100 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.7 }}
					>
						<FlyersSection />
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default ServicesSection;
