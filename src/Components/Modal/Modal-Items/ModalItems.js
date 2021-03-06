import React from "react";
import "./ModalItems.css";

const ModalItems = (props) => {
  return (
    <div key={props.id} className="modal-Items">
      <span data-testid="modalitems" key={props.id} className="item-features">
        <label style={{ marginLeft: "3%" }}>{props.direction}</label>
        <label>{props.duration}</label>
        <label>{props.vehicle}</label>
        <label>${props.cost}</label>
      </span>

      <div>
        <label>
          {" "}
          select
          <input
            data-testid="modal-input"
            type="checkbox"
            id={props.id}
            onClick={props.onCheck}
          />
        </label>
        <button
          data-testid="modal-button"
          className="btn"
          onClick={() => props.onSelect(props.id)}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default ModalItems;
