import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
      );
    }
  }

export default EditItem;

//Soraia added form (5/2)
//JI edited file name (4/25)
