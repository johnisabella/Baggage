
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
  import API from "../../../utils/ReactApi";

  class EditItem extends Component {
    state = {
      newItem: {},
      ItemName: '',
      ItemQuantity: '',
      ItemCategory: '',
    };

  //  this is creating a prop to be used in the dropdown menu for item category
  static defaultProps = {
    categories: ["Tech", "Clothes", "Food", "Personal", "Custom"]
    }  

   //  this is creating a prop to be used in the dropdown menu for item category
  // static defaultProps = {
  //   quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //   }  

    handleItemInput = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value,
      })
  };

    handleItemFormSubmit = event => {
      event.preventDefault();
      console.log(event);
      if (this.state.ItemName) {
          console.log("insideItemName");
        API.saveNewItem({
      //These keys need to match the DB
          ItemName: this.state.ItemName,
          ItemQuantity: this.state.ItemQuantity,
          ItemCategory: this.state.ItemCategory,
        })
          .then(res => console.log("item added"))
          .catch(err => console.log(err));
      } 
  }

    render() {
      //iterating through the categories array 
      let itemCategories = this.props.categories.map(itemCateg => {
        return <option key={itemCateg} value={itemCateg}>{itemCateg}</option>
      } );
  
      // let itemQuantities = this.props.quantities.map(itemQuant => {
      //   return <option key={itemQuant} value={itemQuant}>{itemQuant}</option>
      // } ); 
      return (
        // <p> #Edit Item Test Text </p>
        <Form onSubmit={this.handleItemFormSubmit}>
          <FormGroup row>
            <Label for="item-name" sm={2}>Item Name</Label>
                <Col sm={10}>
                  <Input type="text" 
                    name="ItemName" id="ItemName" placeholder="name placeholder" 
                    value={this.state.ItemName}
                    onChange={this.handleItemInput}/>
                </Col>
          </FormGroup>
          <FormGroup row>
                <Label for="item-quantity" sm={2}>Quantity</Label>
                  <Col sm={10}>
                  {/* this is creating the drop down to choose quatity */}
                    <select type="select" 
                     name="ItemQuantity" id="ItemQuantity" 
                     value={this.state.ItemQuantity}
                     onChange={this.handleItemInput}>
                     {/* {itemQuantities}  */}
                     </select>
                  </Col>
            </FormGroup>
  
          <FormGroup row>
                <Label for="item-category" sm={2}>Category</Label>
                  <Col sm={10}>
                  {/* this is creating the drop down to choose a category */}
                    <select type="select" ref="itemCateg"
                     name="ItemCategory" id="ItemCategory" 
                     value={this.state.ItemCategory}
                     onChange={this.handleItemInput}>
                     {itemCategories} 
                     </select>
                  </Col>
            </FormGroup>
        </Form>

// //     render() {
// //       return (
// //       <div>
// //         <div className="child-page-edit-bag">
// //         <ChildPageHeader />
// //         <PictureCard />
// //         <AddEditForm />
// //         {/* <ChildPageMainContainer /> */}
// //         <SaveButton />
// //         <CancelButton />
// //         <DeleteButton />
// //         </div>
// //         <div className="edit-items-container">
// //          {/* {props.children} */}
// //          <Container className="cards-wrapper">
// //            <AddCard />
// //            <ExistingBagCard />
// //          </Container>
// //         </div>
// //       </div>

      );
      }
    }

export default EditItem;

//Soraia added form (5/2)
//JI edited file name (4/25)
