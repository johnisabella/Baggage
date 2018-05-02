import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import AddButton from '../../display/AddButton';

const AddCard = (props) => {
  return (
    <div>
      <Card>
         <CardImg top width="25%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=100&h=100" alt="Card image cap" />
        <CardBody>
          <CardTitle>Click to Add</CardTitle>
          <CardSubtitle></CardSubtitle>
          <AddButton />
        </CardBody>
      </Card>
    </div>
  );
};

export default AddCard;
