import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import AddButton from '../../display/AddButton';

const AddCard = (props) => {
  return (
    <div className="card-wrapper">
      <Card>
         {/* <CardImg top src="http://via.placeholder.com/150x200" alt="Card image cap" /> */}
        <CardBody>
          {/* <CardTitle>Click to Add</CardTitle> */}
          {/* <CardSubtitle>neeed?</CardSubtitle> */}
          <AddButton />
        </CardBody>
      </Card>
    </div>
  );
};

export default AddCard;
