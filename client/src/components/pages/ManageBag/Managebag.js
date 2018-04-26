import React, { Component } from "react";
import Header from '../../structure/Header';
import ChildPageHeader from '../../display/ChildPageHeader';
import ChildPageMainContainer from '../../display/ChildPageMainContainer';

class ManageBag extends Component {
  state = {};

  render() {
    return (
      <div>
      <Header />
      <ChildPageHeader />
      <ChildPageMainContainer />
      <p> Manage Bag Page Test Text </p>
      </div>
      );
    }
  }

export default ManageBag;
