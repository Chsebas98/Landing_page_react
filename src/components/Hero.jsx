import React from "react";
import "./css/hero.css";

const Hero = ({ image_url }) => {
	return (
		<div className="hero">
			<img src={image_url} alt="Travel" className="hero_image" />
			<h1 className="hero_title">Viajar nunca fue tan fácil</h1>
		</div>
	);
};

export default Hero;
