import React from "react";
import "./css/slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ image_src, title, subtitle, flip }) => {
	const { ref, inView } = useInView({
		//tiempo q tarda en aparecer
		threshold: 0.4,
	});

	const renderContent = () => {
		if (!flip) {
			return (
				<>
					<img src={image_src} alt="Travel" className="slider_image" />
					<div className="slider_content">
						<h1 className="slider_title">{title}</h1>
						<p>{subtitle}</p>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className="slider_content">
						<h1 className="slider_title">{title}</h1>
						<p>{subtitle}</p>
					</div>
					<img src={image_src} alt="Travel" className="slider_image" />
				</>
			);
		}
	};

	return (
		<div className={inView ? "slider slider_zoom" : "slider"} ref={ref}>
			{renderContent()}
		</div>
	);
};

export default Slider;
