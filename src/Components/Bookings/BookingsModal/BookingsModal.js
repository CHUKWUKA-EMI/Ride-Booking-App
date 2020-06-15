import React from "react";
import "./BookingsModal.css";

const BookingsModal = (props) => {
  return (
    <div key={props.bookingId} className="booking-modal">
      <div>
        <span>
          <label>BookingID: {props.bookingId}</label>
        </span>
      </div>
      <div>
        <span>
          <label>UserID: {props.userId}</label>
        </span>
      </div>
      <div>
        <span>
          <label>Trip: {props.direction}</label>
        </span>
      </div>
      <div>
        <span>
          <label>Date: {props.date}</label>
        </span>
      </div>
      <span>
        <label>Completed: {props.completed}</label>
      </span>
      <div className="booking-actions">
        <button className="btn" onClick={() => props.onEdit(props.bookingId)}>
          Edit
        </button>
        <button
          style={{ backgroundColor: "red" }}
          className="btn"
          onClick={() => props.onDelete(props.bookingId)}
        >
          Delete
        </button>
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
