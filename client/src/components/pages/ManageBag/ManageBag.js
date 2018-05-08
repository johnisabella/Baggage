import React, { Component } from "react";
import ChildPageHeader from '../../display/ChildPageHeader';
import ChildPageMainContainer from '../../display/ChildPageMainContainer';
import AddEditForm from '../../forms/AddEditForm';

class ManageBag extends Component {
  state = {};

  render() {
    return (
      <div className="child-page-manage-bag">
      <ChildPageHeader />
      <ChildPageMainContainer />
      </div>
      );
    }
  }

export default ManageBag;
