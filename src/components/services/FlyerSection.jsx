// src/pages/landing/FlyersSection.jsx

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules"; // Import Pagination and Autoplay modules
import "swiper/css";
import "swiper/css/pagination"; // Import Swiper pagination styles

const FlyersSection = () => {
	//const flyers = [{ src: "/assets/images/40.png", alt: "Flyer 2" }];

	return (
		<section id="flyers" className="pb-10">
			<div className="container text-center">
				<img className="rounded-xl" src="/assets/images/40.png" alt="Flyer 2" />
				{/*
                <Swiper
					modules={[Pagination, Autoplay]} // Include Pagination and Autoplay modules
					spaceBetween={20}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 5000 }} // Adjusted autoplay delay to 5000ms (5 seconds) for better viewing
					pagination={{ clickable: true, dynamicBullets: true }} // Enable pagination dots
					className="w-auto max-w-3xl mx-auto"
				>
					{flyers.map((flyer, index) => (
						<SwiperSlide key={index}>
							<img
								src={flyer.src}
								alt={flyer.alt}
								className="rounded-lg shadow-lg w-full object-cover"
							/>
						</SwiperSlide>
					))}
				</Swiper>
                 */}
			</div>
		</section>
	);
};

export default FlyersSection;
