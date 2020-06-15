function deleteBooking({ bookingId }) {
	const requestBody = {
		query: `
      mutation{
  deleteTrip(bookingId:"${bookingId}"){
    id
  }
}

    `,
	};
	return requestBody;
}
export default deleteBooking;
