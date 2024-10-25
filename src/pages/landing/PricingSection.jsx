// src/pages/landing/PricingSection.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PriceCard from "../../components/prices/PricesCard";
import { motion } from "framer-motion";

const PricingSection = () => {
	const pricingPlans = [
		{
			title: "Basis-Paket",
			price: "30€ / Stunde",
			features: ["Hausreinigung", "Kleine Reparaturarbeiten", "Winterdienst"],
			note: "* Pro benötigte Person",
			buttonText: "Jetzt Buchen",
		},
		{
			title: "Standard-Paket",
			price: "50€ / Stunde",
			features: [
				"Fensterputzen",
				"Montagearbeiten",
				"Hausmeisterservice",
				"Gartenarbeiten",
			],
			note: "* Bei größeren Aufträgen Pauschalpreise möglich",
			buttonText: "Jetzt Buchen",
		},
		{
			title: "Premium-Paket",
			price: "Pauschalpreis nach Absprache",
			features: [
				"Wohnungsauflösung",
				"Entrümpelung",
				"Abbrucharbeiten",
				"VIP Services",
			],
			note: "* Alle Leistungen aus Basis- und Standard-Paket",
			buttonText: "Kontaktieren Sie uns",
		},
	];

	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="pricing" className="py-20  ">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="container mx-auto text-center px-6"
			>
				<h2 className="text-4xl font-bold mb-12 text-[#44403d]">
					Unsere Preise
				</h2>

				<div className="mb-12 text-lg text-[#44403d]">
					<p>Bezahlung erfolgt bequem nach Abschluss der Arbeiten.</p>
					<p className="text-sm mt-2">
						* Wir akzeptieren Barzahlung und Überweisung.
					</p>
				</div>

				{/* Swiper for small and medium screens */}
				<div className="block md:hidden">
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={20}
						slidesPerView={1}
						className="w-full max-w-md mx-auto"
					>
						{pricingPlans.map((plan, index) => (
							<SwiperSlide key={index}>
								<motion.div
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
								>
									<PriceCard plan={plan} onClick={scrollToContact} />
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Grid layout for large screens */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{pricingPlans.map((plan, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
						>
							<PriceCard plan={plan} onClick={scrollToContact} />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default PricingSection;
