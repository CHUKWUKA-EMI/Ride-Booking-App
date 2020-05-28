import React from "react";
import "./BookingsModal.css";

const BookingsModal = (props) => {
	return (
		<div className="booking-modal">
			<span>
				<label>BookingID:{props.bookingId}</label>
			</span>
			<br />
			<span>
				<label>UserID:{props.userId}</label>
			</span>
			<br />
			<span>
				<label>Direction:{props.direction}</label>
			</span>
			<br />
			<span>
				<label>Duration:{props.duration}</label>
			</span>
			<br />
			<span>
				<label>Vehicle:{props.vehicle}</label>
			</span>
			<br />
			<span>
				<label>Cost:{props.cost}</label>
			</span>
			<br />
			<span>
				<label>Date Created:{props.date}</label>
			</span>
			<br />
			<span>
				<label>Completed:{props.completed}</label>
			</span>
			<div className="booking-actions">
				<button className="btn">Edit</button>
				<button className="btn">Delete</button>
				<button className="btn">Update</button>
			</div>
			<div className="back-button">
				<button className="btn" onClick={props.onCancel}>
					Back
				</button>
			</div>
		</div>
	);
};

export default BookingsModal;
