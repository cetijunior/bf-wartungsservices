// src/components/layout/Navbar.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import {
	FiSun,
	FiTool,
	FiHome,
	FiTrash2,
	FiFeather,
	FiClipboard,
	FiScissors,
} from "react-icons/fi";
import { WiSnowflakeCold } from "react-icons/wi"; // Import snowflake from the 'wi' package

const Navbar = () => {
	const [isServicesOpen, setIsServicesOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	// Services data
	const services = [
		{ id: 1, title: "Winterdienst", icon: <WiSnowflakeCold /> },
		{ id: 2, title: "Hausreinigung", icon: <FiFeather /> },
		{ id: 3, title: "Fensterputzen", icon: <FiSun /> },
		{ id: 4, title: "Entrümpelung", icon: <FiTrash2 /> },
		{ id: 5, title: "Wohnungsauflösung", icon: <FiHome /> },
		{ id: 6, title: "Kleine Reparaturarbeiten", icon: <FiTool /> },
		{ id: 7, title: "Montagearbeiten", icon: <FiClipboard /> },
		{ id: 8, title: "Gartenarbeiten", icon: <FiScissors /> },
	];

	// Framer Motion variants
	const navVariants = {
		initial: {
			y: -80,
		},
		animate: {
			y: 0,
		},
	};

	const dropdownVariants = {
		hidden: {
			opacity: 0,
			y: -20,
			pointerEvents: "none",
		},
		visible: {
			opacity: 1,
			y: 0,
			pointerEvents: "auto",
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20,
			},
		},
	};

	const handleServiceClick = (id) => {
		navigate(`/services/${id}`);
		setIsServicesOpen(false);
		setIsMenuOpen(false);
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleNavigation = (sectionId) => {
		if (window.location.pathname !== "/") {
			navigate("/");
			setIsMenuOpen(false);
			setTimeout(() => scrollToSection(sectionId), 100); // Delay to ensure the page has loaded
		} else {
			scrollToSection(sectionId);
			setIsMenuOpen(false);
		}
	};

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-gradient-to-r from-[#7a0505] to-[#f51010]`}
			variants={navVariants}
			initial="initial"
			animate="animate"
		>
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				{/* Logo */}
				<button
					onClick={() => {
						if (window.location.pathname === "/") {
							window.scrollTo({ top: 0, behavior: "smooth" });
						} else {
							navigate("/");
						}
						setIsMenuOpen(false);
					}}
					className="flex items-center outline-none cursor-pointer bg-transparent border-none focus:outline-none"
				>
					<img
						src="/assets/images/Logo.PNG"
						alt="BF Wartungsservice Logo"
						className="h-10 rounded-full mr-2 transition-transform duration-300 rotate-360 loop"
					/>
					<p className="text-xl text-white font-bold">BF Wartungsservice</p>
				</button>

				{/* Desktop Menu */}
				<div className="hidden lg:flex space-x-8">
					<button
						onClick={() => {
							if (window.location.pathname === "/") {
								window.scrollTo({ top: 0, behavior: "smooth" });
							} else {
								navigate("/");
							}
							setIsMenuOpen(false);
						}}
						className="text-white hover:text-gray-200 transition-colors focus:outline-none"
					>
						Startseite
					</button>
					<div className="relative">
						<button
							onClick={() => setIsServicesOpen(!isServicesOpen)}
							className="text-white hover:text-gray-200 transition-colors flex items-center focus:outline-none"
						>
							Dienstleistungen
							<svg
								className={`w-4 h-4 ml-1 transform transition-transform ${
									isServicesOpen ? "rotate-180" : ""
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>

						{/* Mega Menu */}
						<AnimatePresence>
							{isServicesOpen && (
								<motion.div
									initial="hidden"
									animate="visible"
									exit="hidden"
									variants={dropdownVariants}
									className="absolute -left-12 transform -translate-x-1/2 mt-7 w-[500px] max-w-4xl bg-white shadow-lg rounded-lg p-6 z-20 overflow-auto"
								>
									<div className="grid grid-cols-3 gap-6">
										{services.map((service) => (
											<motion.button
												key={service.id}
												onClick={() => handleServiceClick(service.id)}
												className="flex flex-col items-center text-red-600 focus:outline-none"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												transition={{ type: "spring", stiffness: 300 }}
											>
												<motion.div
													className="text-4xl mb-2"
													whileHover={{ rotate: 10 }}
													transition={{ type: "spring", stiffness: 300 }}
												>
													{service.icon}
												</motion.div>
												<span className="text-sm text-center">
													{service.title}
												</span>
											</motion.button>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<button
						onClick={() => handleNavigation("testimonials")}
						className="text-white hover:text-gray-200 transition-colors focus:outline-none"
					>
						Kundenstimmen
					</button>
					<button
						onClick={() => handleNavigation("pricing")}
						className="text-white hover:text-gray-200 transition-colors focus:outline-none"
					>
						Preise
					</button>
					<button
						onClick={() => handleNavigation("contact")}
						className="text-white hover:text-gray-200 transition-colors focus:outline-none"
					>
						Kontakt
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="lg:hidden text-white focus:outline-none"
				>
					{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						className="border-t-2 border-transparent bg-gradient-to-r from-[#7a0505] to-[#f51010] lg:hidden overflow-hidden"
					>
						<nav className="flex flex-col px-4 pb-4">
							<button
								onClick={() => {
									if (window.location.pathname === "/") {
										window.scrollTo({ top: 0, behavior: "smooth" });
									} else {
										navigate("/");
									}
									setIsMenuOpen(false);
								}}
								className="text-white py-2 text-left focus:outline-none"
							>
								Startseite
							</button>
							<button
								onClick={() => setIsServicesOpen(!isServicesOpen)}
								className="text-white py-2 flex items-center justify-between focus:outline-none"
							>
								Dienstleistungen
								<svg
									className={`w-4 h-4 ml-1 transform transition-transform ${
										isServicesOpen ? "rotate-180" : ""
									}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							{/* Mobile Dropdown */}
							<AnimatePresence>
								{isServicesOpen && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										className="flex flex-col pl-4"
									>
										{services.map((service) => (
											<button
												key={service.id}
												onClick={() => {
													handleServiceClick(service.id);
													setIsServicesOpen(false);
													setIsMenuOpen(false);
												}}
												className="text-white py-2 flex items-center focus:outline-none"
											>
												<span className="mr-2">{service.icon}</span>
												{service.title}
											</button>
										))}
									</motion.div>
								)}
							</AnimatePresence>
							<button
								onClick={() => {
									handleNavigation("testimonials");
									setIsMenuOpen(false);
								}}
								className="text-white py-2 text-left focus:outline-none"
							>
								Kundenstimmen
							</button>
							<button
								onClick={() => {
									handleNavigation("pricing");
									setIsMenuOpen(false);
								}}
								className="text-white py-2 text-left focus:outline-none"
							>
								Preise
							</button>
							<button
								onClick={() => {
									handleNavigation("contact");
									setIsMenuOpen(false);
								}}
								className="text-white py-2 text-left focus:outline-none"
							>
								Kontakt
							</button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
