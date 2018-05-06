import React from "react";
import "./deleteButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteButton = props => (
  <span className="delete-button" {...props}>

    Delete

  </span>
);

{/* <button onClick={() => props.onRemoveBag(bagname)}>Delete Bag</button> */}

export default DeleteButton;