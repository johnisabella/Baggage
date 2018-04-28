import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import AddButton from '../../display/AddButton';

const AddCard = (props) => {
  return (
    <div>
      <Card>
        {/* <CardImg img src={require('../../../images/addbagimage.png')} alt="Card image cap" /> */}
        <CardBody>
          <AddButton />
          <CardTitle>Add Your Bag</CardTitle>
          <CardSubtitle></CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddCard;
