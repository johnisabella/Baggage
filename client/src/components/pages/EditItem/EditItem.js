
import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

  import { Container, Card, CardTitle, CardText } from 'reactstrap';
  import ChildPageHeader from '../../display/ChildPageHeader';
  import ChildPageMainContainer from '../../display/ChildPageMainContainer';
  import AddEditForm from '../../forms/AddEditForm';
  import PictureCard from '../../display/PictureCard';
  import SaveButton from '../../display/SaveButton';
  import CancelButton from '../../display/CancelButton';
  import DeleteButton from '../../display/DeleteButton';
  import AddCard from '../../display/AddCard';
  import ExistingBagCard from '../../display/ExistingBagCard'
  import ExistingItemCard from '../../display/ExistingItemCard'
  import API from "../../../utils/ReactApi";

  class EditItem extends Component {
    state = {
      newItem: {},
      ItemName: '',
      ItemDescription: '',
      items: [],    
    };
    componentDidMount(){
      console.log("trying to get that id from the url")
      this.getBagItem(this.props.match.params.id);
    }
    getBagItem = (bagid) => {
      API.getBagItem(bagid)
      .then(res => this.setState({items: res.data.BagItem}, () => {
        console.log("callback", this.state.items)
      }))
      //.then(res => console.log("response here", res.data))
      .catch(err => console.log(err))
    };

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
        console.log(this.props.match.params.id)
        API.saveNewItem(this.props.match.params.id, {
      //These keys need to match the DB
          // BagId: this.props.match.params.id,
          ItemName: this.state.ItemName,
          ItemDescription: this.state.ItemDescription,
        })
          .then(res => console.log("item added"))
          // console.log("item added")
          .catch(err => console.log(err));
  } };
    
    render() {
    
      return (
        <div className="child-page-edit-item">
        <ChildPageHeader />
        <div className="child-page-container">
        <div className="edit-bags-title-wrapper">
        <h2 className="edit-bags-title">Add Item</h2>
        </div>
        <div className="add-item-form-wrapper">
        <Form onSubmit={this.handleItemFormSubmit} className="add-item-form"> 
          <FormGroup row>
            <Label for="item-name" sm={2}>Item Name</Label>
                <Col sm={10}>
                  <Input type="text" 
                    name="ItemName" id="ItemName" placeholder="item name" 
                    value={this.state.ItemName}
                    onChange={this.handleItemInput}/>
                </Col>
          </FormGroup>
          <FormGroup row>
                <Label for="item-description" sm={2}>Description</Label>
                  <Col sm={10}>
                    <Input type="textarea" ref="itemdescription"
                      name="ItemDescription" id="ItemDescription" placeholder="optional"
                      value={this.state.ItemDescription}
                    onChange={this.handleItemInput}/>
                  </Col>
            </FormGroup>
             <input className="add-item-button" type="submit" value="Add Item" />
             {/* <Button onClick={this.handleAddItem}>Add item</Button> */}
        </Form>
        </div>

        <div className="items-section">
          <div className="items-title">
          <h2>Your Items</h2>
          </div>
          <div className="items-container">
          
          {this.state.items.map(item => (
            <Card>
              <CardTitle>{item.ItemName}</CardTitle>
              <CardText>{item.ItemDescription}</CardText>
            </Card>
          ))}
          </div>
        </div>  
        </div> 
      </div>
      );
      }
    }

export default EditItem;

