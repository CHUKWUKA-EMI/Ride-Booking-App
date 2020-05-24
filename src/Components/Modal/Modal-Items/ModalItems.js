import React from "react";
import "./ModalItems.css";

const ModalItems = (props) => {
	return (
		<div key={props.id} className="modal-Items">
			<span key={props.id} className="item-features">
				<label style={{ marginLeft: "3%" }}>{props.direction}</label>
				<label>{props.duration}</label>
				<label>{props.vehicle}</label>
				<label>{props.cost}</label>
			</span>

			<div style={{ width: "100px", marginLeft: "75%" }}>
				<button
					className="btn"
					style={{ marginTop: "20px", marginLeft: "83%" }}>
					Book
				</button>
			</div>
		</div>
	);
};

export default ModalItems;
