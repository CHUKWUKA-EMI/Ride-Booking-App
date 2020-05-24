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

	return routes.map(() => {
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
					id={routes[0].id}
					direction={routes[0].direction}
					duration={routes[0].duration}
					vehicle={routes[0].vehicle}
					cost={routes[0].cost}
				/>
				<ModalItems
					id={routes[1].id}
					direction={routes[1].direction}
					duration={routes[1].duration}
					vehicle={routes[1].vehicle}
					cost={routes[1].cost}
				/>
				<ModalItems
					id={routes[2].id}
					direction={routes[2].direction}
					duration={routes[2].duration}
					vehicle={routes[2].vehicle}
					cost={routes[2].cost}
				/>
				<ModalItems
					id={routes[3].id}
					direction={routes[3].direction}
					duration={routes[3].duration}
					vehicle={routes[3].vehicle}
					cost={routes[3].cost}
				/>
				<ModalItems
					id={routes[4].id}
					direction={routes[4].direction}
					duration={routes[4].duration}
					vehicle={routes[4].vehicle}
					cost={routes[4].cost}
				/>
			</div>
		);
	});
};

export default Modal;
