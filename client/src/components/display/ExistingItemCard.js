import React, { Component } from 'react';

import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import EditButton from '../display/EditButton';
import API from "../../utils/ReactApi";

class ExistingItemCard extends Component {
    state = {
      items: []
    };

    // componentDidMount(){
    //   this.getItems();
    // }

    // getItems = () => {
    //   API.getItems()
    //   .then(res => this.setState({'items': res.data}))
    //   // .then(res => console.log("response here", res.data))
    //   .catch(err => console.log(err))
    // };

render() {
  return (

    <div className="item-wrapper">
         {this.state.items.map(item => (
               <Col sm="6">
                 <Card>
                 <CardBody body>
                   <EditButton />
                   <CardTitle>{item.ItemName}</CardTitle>
                   {/* <CardText>{bag.TypeOfBag}</CardText> */}
                   <CardText>{item.ItemDescription}</CardText>
                 </CardBody>
               </Card>
               </Col>
             ))}

     {/* </Container> */}
    </div>
  );
}
}

export default ExistingItemCard;