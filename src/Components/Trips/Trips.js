import React, { useState, useContext } from "react";
import "./Trips.css";
import Modal from "../Modal/modal";
import Spinner from "../spinner/spinner";
import AuthContext from "../Context/context";
import makeRequest from "../../Utils/index";

const Trips = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(AuthContext);

  React.useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);
  const onCheckHandler = (routeId) => {
    setSelectedRoute(routeId);
  };

  const onBookHandler = () => {
    if (!context.token) {
      setSelectedRoute(null);
      setErrMsg("You are not authenticated. Please login!");
      return;
    }
    const requestBody = {
      query: `
			   mutation{
						bookTrip(routeId:"${selectedRoute}"){
							id
							user_id
							trip
							completed

						}
				}
			`,
    };
    makeRequest({ data: requestBody, token: context.token })
      .then((resData) => {
        setErrMsg("You have booked a Trip! Good luck!");
        setSelectedRoute(null);
      })
      .catch((err) => {
        setErrMsg(err.message);
      });
  };
  return (
    <div className="trips-page">
      {errMsg ? (
        <h1 className="err" style={{ color: "red" }}>
          {errMsg}
        </h1>
      ) : (
        <h1>Welcome to JusticeRides. You can book your ride here!</h1>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <Modal onBook={onBookHandler} onTake={onCheckHandler} />
      )}
    </div>
  );
};

export default Trips;
