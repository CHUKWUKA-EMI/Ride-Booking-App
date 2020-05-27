import makeRequest from "../Utils/index";

const fetchRoutes = async () => {
	const requestBody = {
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

	const result = await makeRequest({ data: requestBody }).then((data) => {
		return data.data.routes;
	});
	return result;
};

export default fetchRoutes;
