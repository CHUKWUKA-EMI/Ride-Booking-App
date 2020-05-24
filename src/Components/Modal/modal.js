import React, { useState, useEffect } from "react";
import "./modal.css";
import ModalItems from "./Modal-Items/ModalItems";

const Modal = () => {
	const [routes, setRoutes] = useState([]);

	const fetchRoutes = () => {
		let requestBody = {
			query: `
         query{
            routes{
              id
              direction
              vehicle
              duration
              cost
            }
       }
      `,
		};

		fetch("https://ride-booking-app.herokuapp.com/graphql", {
			method: "post",
			body: JSON.stringify(requestBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Authentication Failed");
				}
				return res.json();
			})
			.then((resData) => {
				//console.log(resData.data.routes);
				const updatedRoutes = resData.data.routes;
				setRoutes(updatedRoutes);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchRoutes();
	}, []);

	return (
		<div className="modal-class">
			<p>Available Routes</p>
			<span>
				<label>Direction</label>
				<label>Duration</label>
				<label>Vehicle</label>
				<label>Cost</label>
			</span>
			<ModalItems
				direction="Lagos - kano"
				duration="10 hours"
				vehicle="Bus"
				cost="$100"
			/>
			<ModalItems
				direction="Lagos - kano"
				duration="10 hours"
				vehicle="Bus"
				cost="$100"
			/>
			<ModalItems
				direction="Lagos - kano"
				duration="10 hours"
				vehicle="Bus"
				cost="$100"
			/>
			<ModalItems
				direction="Lagos - kano"
				duration="10 hours"
				vehicle="Bus"
				cost="$100"
			/>
			<ModalItems
				direction="Lagos - kano"
				duration="10 hours"
				vehicle="Bus"
				cost="$100"
			/>
		</div>
	);
};

export default Modal;
