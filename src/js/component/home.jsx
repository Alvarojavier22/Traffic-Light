import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	function selectColor(lightColor) {
		return <div onClick={() => setColor(lightColor)} className={color == lightColor ? "selectedlight" + lightColor : "light " + lightColor}></div>
	}

	return (
		<div>
			<div className="poste"></div>
			<div className="semaforo">
				{
					["red", "yellow", "green"].map(selectColor)
				}
			</div>
		</div>
	);
};

export default Home;
