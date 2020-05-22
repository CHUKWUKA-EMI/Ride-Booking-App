import React from "react";
import "./modal.css";
import ModalItems from "./Modal-Items/ModalItems";

const Modal = () => {
	return (
		<div className="modal-class">
			<p>Available Routes</p>
			<span>
				<label>Direction</label>
				<label>Duration</label>
				<label>Vehicle</label>
				<label>Cost</label>
			</span>
			<ModalItems />
			<ModalItems />
			<ModalItems />
			<ModalItems />
			<ModalItems />
		</div>
	);
};

export default Modal;
