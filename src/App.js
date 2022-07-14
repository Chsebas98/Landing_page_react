import React from "react";
import "./app.css";
import travel_1 from "./assets/travel-01.jpg";
import travel_2 from "./assets/travel-02.jpg";
import travel_3 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const navbarLinks = [
	{ url: "#", title: "Home" },
	{ url: "#", title: "Viajes" },
	{ url: "#", title: "Premios" },
];

const App = () => {
	return (
		<div className="App">
			<Navbar navbarLinks={navbarLinks} />
			<Hero image_url={travel_1} />
			<Slider
				image_src={travel_2}
				title={"Explora por ti mismo!"}
				subtitle={
					"Nuestra plataforma ofrece una gran variedad de increíbles lugares para viajar, lugares de ensueño."
				}
			/>
			<Slider
				image_src={travel_3}
				title={"Memorias para el resto de tu vida"}
				subtitle={"Tus vacaciones soñadas a tan sólo unos pocos clicks de aquí."}
				flip={true}
			/>
		</div>
	);
};

export default App;
