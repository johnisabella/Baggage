
import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

  import { Container, Card } from 'reactstrap';
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
      console.log(this.props.match.params.id)
      this.getBag(this.props.match.params.id);
    }

    getBag = (bagid) => {
      API.getBag(bagid)
      .then(res => this.setState({'items': res.data.BagItem}))
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
        API.saveNewItem({
      //These keys need to match the DB
          ItemName: this.state.ItemName,
          ItemDescription: this.state.ItemDescription,
        })
          .then(res => console.log("item added"))   
          // console.log("item added")
          .catch(err => console.log(err));
  } };
    
    render() {
    
      return (
        <div>
        <Form onSubmit={this.handleItemFormSubmit}> 
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
             <input type="submit" value="Add Item" />
             {/* <Button onClick={this.handleAddItem}>Add item</Button> */}
        </Form>

        <div className="items-container">
          <Container>
              
          </Container>
        </div>   
      </div>
      );
      }
    }

export default EditItem;

