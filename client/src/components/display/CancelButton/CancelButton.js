import React from "react";
import "./cancelButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CancelButton = props => (
  <span className="cancel-button" {...props}>
    Cancel

  </span>
);

{/* <button onClick={() => props.onCancelBag(bagname)}>Cancel Bag</button> */}

export default CancelButton;

