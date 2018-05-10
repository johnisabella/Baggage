import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import AddButton from '../../display/AddButton';


const AddCard = (props) => {
  return (
    <div className="card-wrapper add-card-wrapper">
      <Card>
         {/* <CardImg top src="http://via.placeholder.com/150x200" alt="Card image cap" /> */}
        <CardBody>
          
          {/* <CardSubtitle>neeed?</CardSubtitle> */}
          
          <AddButton />
          <CardTitle>Add a Bag!</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddCard;
