import React, { useState } from "react";
import "./Bookings.css";
import BookingsModal from "./BookingsModal/BookingsModal";
import Backdrop from "./Backdrop/Backdrop";

const Bookings = (props) => {
	const [viewing, setViewing] = useState(false);

	const onCancelHandler = () => {
		setViewing(false);
	};
	const onViewHandler = () => {
		setViewing(true);
	};
	return (
		<React.Fragment>
			{viewing && <Backdrop />}
			<div className="bookings-container">
				<h1>Welcome to Bookings page</h1>
				<p>You can view your bookings below</p>
				<div>
					<section>Date</section>
					<button className=" btn" onClick={onViewHandler}>
						Details
					</button>
				</div>

				{!viewing && (
					<div>
						<section>Completed Trips</section>
						<button className=" btn">View</button>
					</div>
				)}
			</div>

			{viewing && <BookingsModal onCancel={onCancelHandler} />}
		</React.Fragment>
	);
};

export default Bookings;
