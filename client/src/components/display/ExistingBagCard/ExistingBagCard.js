import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import EditButton from '../../display/EditButton';

const ExistingBagCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="200" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Add%20Bag&w=180&h=256" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <EditButton />
        </CardBody>
      </Card>
    </div>
  );
};

export default ExistingBagCard;
