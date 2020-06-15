function getCompletedTrips({ completed }) {
	const requestBody = {
		query: `
      query{
      completedTrips(completed:${completed}){
        id
        trip
        completed
      }
    }
    `,
	};

	return requestBody;
}

export default getCompletedTrips;
