import React, { Component } from "react";
import ChildPageHeader from '../../display/ChildPageHeader';
import ChildPageMainContainer from '../../display/ChildPageMainContainer';
import AddEditForm from '../../forms/AddEditForm';
import PictureCard from '../../display/PictureCard';
import SaveButton from '../../display/SaveButton';
import CancelButton from '../../display/CancelButton';
import DeleteButton from '../../display/DeleteButton';

class EditBag extends Component {
  state = {};

  render() {
    return (
      <div className="child-page-edit-bag">
      <ChildPageHeader />
      <PictureCard />
      <AddEditForm />
      {/* <ChildPageMainContainer /> */}
      <SaveButton />
      <CancelButton />
      <DeleteButton />
      </div>
      );
    }
  }

export default EditBag;
