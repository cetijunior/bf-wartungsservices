import {
	FiSun,
	FiTool,
	FiHome,
	FiTrash2,
	FiFeather,
	FiClipboard,
	FiScissors,
} from "react-icons/fi";
import { WiSnowflakeCold } from "react-icons/wi";
import { motion } from "framer-motion";

// Services with their icons
const services = [
	{ id: 1, title: "Winterdienst", icon: WiSnowflakeCold },
	{ id: 2, title: "Hausreinigung", icon: FiFeather },
	{ id: 3, title: "Fensterputzen", icon: FiSun },
	{ id: 4, title: "Entrümpelung", icon: FiTrash2 },
	{ id: 5, title: "Wohnungsauflösung", icon: FiHome },
	{ id: 6, title: "Kleine Reparaturarbeiten", icon: FiTool },
	{ id: 7, title: "Montagearbeiten", icon: FiClipboard },
	{ id: 8, title: "Gartenarbeiten", icon: FiScissors },
];

// Total icons and screen divisions
const totalIcons = 15; // Number of icons to show
const minDistance = 10; // Minimum distance between icons in percentage points

const BackgroundIcons = () => {
	// Helper to generate random values within a range
	const randomInRange = (min, max) => Math.random() * (max - min) + min;

	// Store already used positions
	const usedPositions = [];

	// Check if a new position is too close to existing positions
	const isTooClose = (top, left) => {
		for (const pos of usedPositions) {
			const distance = Math.sqrt(
				Math.pow(parseFloat(top) - parseFloat(pos.top), 2) +
					Math.pow(parseFloat(left) - parseFloat(pos.left), 2)
			);
			if (distance < minDistance) {
				return true;
			}
		}
		return false;
	};

	// Generate random positions, excluding the center area and ensuring distance
	const generateValidPosition = () => {
		let top, left;
		let attempts = 0;

		do {
			top = `${randomInRange(5, 95)}%`; // Avoid top/bottom edges
			left = `${randomInRange(5, 95)}%`; // Avoid left/right edges
			attempts++;

			// Break after too many attempts to avoid infinite loops
			if (attempts > 100) break;
		} while (
			(parseFloat(top) > 40 &&
				parseFloat(top) < 60 &&
				parseFloat(left) > 40 &&
				parseFloat(left) < 60) || // Avoid the center area
			isTooClose(top, left) // Check if too close to other icons
		);

		// Store the valid position
		usedPositions.push({ top, left });
		return { top, left };
	};

	// Generate icon instances with special cases for variation
	const iconInstances = Array.from({ length: totalIcons }, (_, index) => {
		const serviceIndex = index % services.length;
		const IconComponent = services[serviceIndex].icon;
		const validPosition = generateValidPosition();

		// Define special cases for some icons
		const isSpecialIcon = serviceIndex % 3 === 0; // Every third icon is special
		const size = isSpecialIcon ? randomInRange(24, 40) : randomInRange(16, 24); // Larger size for special icons
		const rotationSpeed = isSpecialIcon
			? randomInRange(5, 15) // Slower for special icons
			: randomInRange(10, 20); // Faster for regular icons

		// Random color based on special status
		const color = isSpecialIcon ? "text-red-600" : "text-red-600";

		return {
			icon: IconComponent,
			key: `${services[serviceIndex].id}-${index}`,
			top: validPosition.top,
			left: validPosition.left,
			size,
			color,
			rotationSpeed,
			isSpecialIcon,
		};
	});

	return (
		<div className="fixed inset-0 z-0 sm:-z-10 pointer-events-none">
			<div className="absolute w-full h-full opacity-70">
				{iconInstances.map((instance) => {
					const Icon = instance.icon;
					return (
						<motion.div
							key={instance.key}
							className={`absolute ${instance.color} ${
								instance.isSpecialIcon ? "animate-pulse" : ""
							}`}
							style={{
								top: instance.top,
								left: instance.left,
								fontSize: `${instance.size}px`,
							}}
							animate={{ rotate: 360 }}
							transition={{
								repeat: Infinity,
								duration: instance.rotationSpeed,
								ease: "linear",
							}}
						>
							<Icon />
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default BackgroundIcons;
