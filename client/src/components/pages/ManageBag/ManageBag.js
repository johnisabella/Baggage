import React, { Component } from "react";
import ChildPageHeader from '../../display/ChildPageHeader';
import ChildPageMainContainer from '../../display/ChildPageMainContainer';

class ManageBag extends Component {
  state = {};

  render() {
    return (
      <div className="child-page-manage-bag">
      <ChildPageHeader />
      <ChildPageMainContainer />
      <p> Manage Bag Page Test Text </p>
      </div>
      );
    }
  }

export default ManageBag;
