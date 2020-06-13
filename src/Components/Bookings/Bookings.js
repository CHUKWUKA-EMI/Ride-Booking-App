import React, { useState, useContext, useEffect } from "react";
import "./Bookings.css";
import BookingsModal from "./BookingsModal/BookingsModal";
import Backdrop from "./Backdrop/Backdrop";
import makeRequest from ".././../Utils/index";
import deleteBooking from "../.././Helpers/Delete";
import editBooking from "../.././Helpers/Edit";
import getCompletedTrips from "../../Helpers/completedTrip";
import CompletedModal from "./CompletedTripModal/CompletedModal";
import Authcontext from "../Context/context";

const Bookings = (props) => {
  const [modalViewing, setModalViewing] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isComplete, setIsComplete] = useState(null);
  const [completedTrip, setCompletedTrip] = useState([]);
  const [selectCompletedTrip, setSelectCompletedTrip] = useState(null);
  const [completeView, setCompleteView] = useState(false);
  const context = useContext(Authcontext);

  useEffect(() => {
    fetchBookings();
    fetchCompleteTrips();
  }, []);

  const viewCompleteTrips = (bookingId) => {
    setCompleteView(true);
    const selected = completedTrip.find((e) => e.id === bookingId);
    setSelectCompletedTrip(selected);
  };
  const closeCompletedModal = () => {
    setCompleteView(false);
  };

  const modalCancelHandler = () => {
    setModalViewing(false);
  };
  const onEditHandler = () => {
    setIsEdit(true);
    setModalViewing(false);
  };
  const onViewHandler = (bookingId) => {
    setModalViewing(true);
    const selected = bookings.find((e) => e.id === bookingId);
    setSelectedBooking(selected);
  };

  const fetchBookings = () => {
    const requestBody = {
      query: `
			  query{
					bookings{
						id
						user_id
						trip
						completed
					}
        }
			`,
    };
    const result = makeRequest({
      data: requestBody,
      token: context.token,
    }).then((resData) => {
      setBookings(resData.data.bookings);
    });
  };
  const deleteHandler = (bookingId) => {
    const bookingdata = deleteBooking({ bookingId: selectedBooking.id });

    makeRequest({ data: bookingdata, token: context.token }).then(() => {
      const updatedBookings = bookings.filter((e) => e.id !== bookingId);
      setBookings(updatedBookings);
      setModalViewing(false);
    });
  };

  const updateHandler = (bookingId) => {
    const updateData = editBooking({
      bookingId: selectedBooking.id,
      completed: isComplete,
    });

    makeRequest({ data: updateData, token: context.token }).then((resData) => {
      setModalViewing(true);
    });
  };

  const fetchCompleteTrips = (bookingId) => {
    const completedTrips = getCompletedTrips({ completed: true });

    makeRequest({ data: completedTrips, token: context.token }).then(
      (resData) => {
        setCompletedTrip(resData.data.completedTrips);
      }
    );
  };

  return (
    <React.Fragment>
      {(modalViewing || completeView) && <Backdrop />}
      <div className="bookings-container">
        <h1>Welcome to Bookings page</h1>
        <p>You can view your bookings below</p>
        {bookings.map((booking) => {
          return (
            <div>
              <section>{booking.trip}</section>
              <button
                className=" btn"
                id={booking.id}
                onClick={() => onViewHandler(booking.id)}
              >
                Details
              </button>
            </div>
          );
        })}
        {completedTrip.map((trip) => {
          return (
            <div>
              <section>Completed Trip</section>
              <button
                className=" btn"
                id={trip.id}
                onClick={() => viewCompleteTrips(trip.id)}
              >
                View
              </button>
            </div>
          );
        })}
      </div>
      {modalViewing && (
        <BookingsModal
          bookingId={selectedBooking.id}
          userId={selectedBooking.user_id}
          direction={selectedBooking.trip}
          date={new Date().toLocaleDateString()}
          completed={selectedBooking.completed.toString()}
          onCancel={modalCancelHandler}
          onDelete={deleteHandler}
          onEdit={onEditHandler}
        />
      )}
      {completeView && (
        <CompletedModal
          id={selectCompletedTrip.id}
          trip={selectCompletedTrip.trip}
          completed={selectCompletedTrip.completed.toString()}
          onclose={closeCompletedModal}
        />
      )}

      {isEdit && (
        <div className="edit-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <span>
              <label>Completed:</label>
              <input
                type="text"
                name="completed"
                value={isComplete}
                onChange={(e) => setIsComplete(e.target.value)}
              />
            </span>
            <button
              className="btn"
              onClick={() => updateHandler(selectedBooking.id)}
            >
              Update
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default Bookings;
