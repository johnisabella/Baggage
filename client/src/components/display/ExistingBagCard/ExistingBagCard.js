import React, { Component } from 'react';

import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import EditButton from '../../display/EditButton';
import API from "../../../utils/ReactApi";

class ExistingBagCard extends Component {
    state = {
      bags: []
    };

    componentDidMount(){
      this.getBags();
    }

    getBags = () => {
      API.getBags()
      .then(res => this.setState({'bags': res.data}))
      // .then(res => console.log("response here", res.data))
      .catch(err => console.log(err))
    };

render() {
  return (

    <div className="card-wrapper">
         {this.state.bags.map(bag => (
               <div className="card-wrapper existing-bag-card-container">
                 <Card>
                 <CardBody body>
                   <EditButton />
                   <CardTitle>{bag.BagName}</CardTitle>
                   {/* <CardText>{bag.TypeOfBag}</CardText> */}
                   <CardText>{bag.BagDescription}</CardText>
                 </CardBody>
               </Card>
               </div>
               
             ))}

     {/* </Container> */}
    </div>


  );
}
}

export default ExistingBagCard;
