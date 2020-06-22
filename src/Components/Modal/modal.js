import React, { useState, useEffect } from "react";
import "./modal.css";
import ModalItems from "./Modal-Items/ModalItems";
import fetchRoutes from "../../Helpers/index";

const Modal = (props) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    async function getRoutes() {
      const route = await fetchRoutes();
      setRoutes(route);
    }
    getRoutes();
  }, []);

  return (
    <div className="modal-class">
      <p>Available Routes</p>
      <span>
        <label>Direction</label>
        <label>Duration</label>
        <label>Vehicle</label>
        <label>Cost</label>
      </span>
      {routes.map((item) => {
        return (
          <ModalItems
            id={item.id}
            direction={item.direction}
            duration={item.duration}
            vehicle={item.vehicle}
            cost={item.cost}
            onSelect={props.onBook}
            onCheck={() => props.onTake(item.id)}
          />
        );
      })}
    </div>
  );
};
export default Modal;
