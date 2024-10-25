// src/components/layout/Footer.jsx

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="border-t-4 border-red-700 bg-gradient-to-r from-[#600404] to-[#cc0e0e] text-white py-12">
			<div className="container mx-auto px-6">
				<div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
					{/* Logo and Description */}
					<div className="text-center lg:text-left space-y-4">
						<h2 className="text-3xl font-extrabold">BF Wartungsservices</h2>
						<p className="text-sm max-w-xs lg:max-w-sm leading-relaxed">
							Ihr zuverlässiger Partner für alle Wartungs- und
							Reparaturarbeiten. Wir bieten erstklassigen Service für jedes
							Anliegen.
						</p>
					</div>

					{/* Navigation Links */}
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
						<a
							onClick={() => scrollToSection("services")}
							className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
						>
							Services
						</a>
						<a
							onClick={() => scrollToSection("pricing")}
							className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
						>
							Preise
						</a>
						<a
							onClick={() => scrollToSection("contact")}
							className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
						>
							Kontakt
						</a>
					</div>

					{/* Social Media Icons */}
					<div className="flex space-x-8">
						<a
							href="#"
							className="hover:text-gray-300 transition-colors duration-300"
							aria-label="Facebook"
						>
							<FaFacebookF size={24} />
						</a>
						<a
							href="#"
							className="hover:text-gray-300 transition-colors duration-300"
							aria-label="Twitter"
						>
							<FaTwitter size={24} />
						</a>
						<a
							href="#"
							className="hover:text-gray-300 transition-colors duration-300"
							aria-label="Instagram"
						>
							<FaInstagram size={24} />
						</a>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
					&copy; {new Date().getFullYear()} BF Wartungsservices. Alle Rechte
					vorbehalten.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
