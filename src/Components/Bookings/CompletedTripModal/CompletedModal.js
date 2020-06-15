import React from "react";
import "./completedModal.css";

const CompletedModal = (props) => {
  return (
    <div className="completed-modal">
      <div>
        <h3>Id: {props.id}</h3>
      </div>
      <div>
        <h3>Direction: {props.trip}</h3>
      </div>
      <div>
        <h3>Completed: {props.completed}</h3>
      </div>
      <div>
        <button className="btn" onClick={props.onclose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CompletedModal;
