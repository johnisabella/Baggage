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
   <div className="edit-bags-title-wrapper">
   <h2 className="edit-bags-title">Manage Bags</h2>
   </div>
      
      <div className="edit-bag-container">
            <AddCard />
            <ExistingBagCard />
    
    </div>
  </div>
 );
}
}

export default ChildPageMainContainer;
//
