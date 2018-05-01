import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AddCard from '../../display/AddCard';
import ExistingBagCard from '../../display/ExistingBagCard';

class ChildPageMainContainer extends React.Component {
  render() {
    return (
   <div className="child-page-container">
    {/* {props.children} */}
    <Container className="cards-wrapper">
          <AddCard />
          <AddCard />
          <AddCard />
        {/* <Col>
          <ExistingBagCard />
        </Col> */}
    </Container>
   </div>
 );
}
}

export default ChildPageMainContainer;
//
