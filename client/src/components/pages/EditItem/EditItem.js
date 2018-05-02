
import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

  import { Container } from 'reactstrap';
  import ChildPageHeader from '../../display/ChildPageHeader';
  import ChildPageMainContainer from '../../display/ChildPageMainContainer';
  import AddEditForm from '../../forms/AddEditForm';
  import PictureCard from '../../display/PictureCard';
  import SaveButton from '../../display/SaveButton';
  import CancelButton from '../../display/CancelButton';
  import DeleteButton from '../../display/DeleteButton';
  import AddCard from '../../display/AddCard';
  import ExistingBagCard from '../../display/ExistingBagCard'


  class EditItem extends Component {
    state = {};


  render() {
    return (
      <p> #Edit Item Test Text </p>
      // <Form>
      //   <FormGroup row>
      //     <Label for="item-name" sm={2}>Item Name</Label>
      //         <Col sm={10}>
      //           <Input type="text" 
      //             name="ItemName" id="ItemName" placeholder="name placeholder" 
      //             value={this.state.ItemName}
      //             onChange={this.handleItemInput}/>
      //         </Col>
      //   </FormGroup>
      //   <FormGroup row>
      //         <Label for="item-quantity" sm={2}>Quantity</Label>
      //           <Col sm={10}>
      //           {/* this is creating the drop down to choose quatity */}
      //             <select type="select" 
      //              name="ItemQuantity" id="ItemQuantity" 
      //              value={this.state.ItemQuantity}
      //              onChange={this.handleItemInput}>
      //              {itemQuantities} 
      //              </select>
      //           </Col>
      //     </FormGroup>

      //   <FormGroup row>
      //         <Label for="item-category" sm={2}>Category</Label>
      //           <Col sm={10}>
      //           {/* this is creating the drop down to choose a category */}
      //             <select type="select" 
      //              name="ItemCategory" id="ItemCategory" 
      //              value={this.state.ItemCategory}
      //              onChange={this.handleItemInput}>
      //              {itemCategories} 
      //              </select>
      //           </Col>
      //     </FormGroup>
      // </Form>

//     render() {
//       return (
//       <div>
//         <div className="child-page-edit-bag">
//         <ChildPageHeader />
//         <PictureCard />
//         <AddEditForm />
//         {/* <ChildPageMainContainer /> */}
//         <SaveButton />
//         <CancelButton />
//         <DeleteButton />
//         </div>
//         <div className="edit-items-container">
//          {/* {props.children} */}
//          <Container className="cards-wrapper">
//            <AddCard />
//            <ExistingBagCard />
//          </Container>
//         </div>
//       </div>

      );
      }
    }

export default EditItem;

//Soraia added form (5/2)
//JI edited file name (4/25)
