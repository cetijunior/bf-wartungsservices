// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./pages/landing/HeroSection";
import ServicesSection from "./pages/landing/ServicesSection";
import TestimonialsSection from "./pages/landing/TestimonialsSection";
import PricingSection from "./pages/landing/PricingSection";
import ContactSection from "./pages/landing/ContactSection";
import Footer from "./components/layout/Footer";
import ServiceDetailPage from "./components/services/ServiceDetail";
import BackgroundIcons from "./components/layout/BackgroundIcons";
import "./App.css";
import "./styles/index.css";

function App() {
	return (
		<Router>
			{/* Background Icons with a -z-10 class to ensure it's behind everything */}
			<BackgroundIcons />
			{/* Main content container with a z-index above the background */}
			<div className="relative z-10">
				<Navbar />
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<HeroSection />
									<ServicesSection />
									<PricingSection />
									<TestimonialsSection />
									<ContactSection />
								</>
							}
						/>
						<Route path="/services/:id" element={<ServiceDetailPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
