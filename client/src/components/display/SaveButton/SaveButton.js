import React from 'react';
import "./saveButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveButton = props => (
 <span className="save-button" {...props}>
   |save|
 </span>
);

{/* <button onClick={() => props.onSaveBag(bagname)}>Save Bag</button> */}
export default SaveButton; 
