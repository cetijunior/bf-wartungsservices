// src/components/layout/BackgroundIcons.jsx

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

const gridSize = 10; // Defines a 10x10 grid

const BackgroundIcons = () => {
	// Create grid-based positions
	const gridPositions = [];
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			gridPositions.push({
				top: `${(i / gridSize) * 100}%`,
				left: `${(j / gridSize) * 100}%`,
			});
		}
	}

	// Shuffle grid positions to make it more dynamic
	const shuffledGridPositions = gridPositions.sort(() => Math.random() - 0.5);

	const iconInstances = services.flatMap((service, serviceIndex) => {
		const IconComponent = service.icon;

		// Position each icon in the shuffled grid without overlap
		return Array.from({ length: 3 }, (_, iconIndex) => {
			const positionIndex =
				(serviceIndex * 3 + iconIndex) % shuffledGridPositions.length;
			const position = shuffledGridPositions[positionIndex];

			return {
				icon: IconComponent,
				key: `${service.id}-${iconIndex}-${Math.random()}`,
				top: position.top,
				left: position.left,
				rotationSpeed: Math.random() * 10 + 10, // Random speed between 10s and 20s
			};
		});
	});

	return (
		<div className="fixed inset-0 z-0 sm:-z-10 pointer-events-none">
			<div className="absolute w-full h-full opacity-70">
				{iconInstances.map((instance) => {
					const Icon = instance.icon;
					return (
						<motion.div
							key={instance.key}
							className="absolute text-red-600"
							style={{
								top: instance.top,
								left: instance.left,
								fontSize: `20px`,
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
