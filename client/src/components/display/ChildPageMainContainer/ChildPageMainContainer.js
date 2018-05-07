import React, { Component } from 'react';

import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import AddCard from '../../display/AddCard';
import ExistingBagCard from '../../display/ExistingBagCard';
import API from "../../../utils/ReactApi";

class ChildPageMainContainer extends Component {
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
   <div className="child-page-container">
    {/* {props.children} */}
    {/* <Container> */}
    <div className="edit-bag-container">
      {/* <Col> */}
          <AddCard />
          <ExistingBagCard />
       {/* </Col> */}
   </div>
   {/* <div className="existing-bag-wrapper"> */}
   
   {/* </div> */}
        {/* {this.state.bags.map(bag => (
              <Col sm="6">
                <Card body>
                  <CardTitle>{bag.BagName}</CardTitle> */}
                  {/* <CardText>{bag.TypeOfBag}</CardText> */}
                  {/* <CardText>{bag.BagDescription}</CardText>
                </Card>
              </Col>
            ))} */}

    {/* </Container> */}
   </div>
 );
}
}

export default ChildPageMainContainer;
//
