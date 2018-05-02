import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AddCard from '../AddCard';
import ExistingBagCard from '../ExistingBagCard';

class ChildPageMainContainer extends React.Component {
// state = {};
  render() {
    return (
   <div className="child-page-container">
    {/* {props.children} */}
    <Container className="cards-wrapper">
          <AddCard />
          <ExistingBagCard />
    </Container>
   </div>
 );
}
}

export default ChildPageMainContainer;
//
