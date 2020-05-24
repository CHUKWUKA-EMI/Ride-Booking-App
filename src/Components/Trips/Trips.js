import React, { useState } from "react";
import "./Trips.css";
import Modal from "../Modal/modal";

const Trips = () => {
	return (
		<div className="trips-page">
			<h1>Welcome to JusticeRides. You can book your ride here!</h1>

			<Modal />
		</div>
	);
};

export default Trips;
