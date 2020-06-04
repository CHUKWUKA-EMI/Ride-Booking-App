function EditBooking({ bookingId, completed }) {
	const requestBody = {
		query: `
      mutation{
        editTrip(bookingId:"${bookingId}",completed:${completed}){
          id
          user_id
          trip
          completed
        }
     }
    `,
	};
	return requestBody;
}

export default EditBooking;
