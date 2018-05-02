import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AddButton from '../../display/AddButton';
import API from "../../../utils/ReactApi";

 class AddEditForm extends React.Component {
     //when we click create, we'll "store" the bag info in state
     constructor(){
         super();
         this.state = {
             newBag:{},
             BagName: '',
             BagType: '',
             BagDescription: '',
         }
     }
     
    //  this is creating a prop to be used in the dropdown menu to select a bag type
     static defaultProps = {
         types: ["Tech", "Clothes", "Food", "Personal", "Custom"]
     }

     handleBagNameInput = event => {
        const {name, value} = event.target;
        this.setState({
          [name]: value,
        })
    };

        handleFormSubmit = event => {
            event.preventDefault();
            console.log(event);
            if (this.state.BagName) {
                console.log("insideBagName");
              API.saveNewBag({
            //These keys need to match the DB
                BagName: this.state.BagName,
                BagType: this.state.TypeOfBag,
                BagDescription: this.state.BagDescription
              })
                .then(res => console.log("success"))
                .catch(err => console.log(err));
            } 
    }
     
  render() {
      let bagTypes = this.props.types.map(typesofbag => {
        return <option key={typesofbag} value={typesofbag}>{typesofbag}</option>
      } );
    return (
        <Form onSubmit={this.handleFormSubmit} >
            <FormGroup row>
                <Label for="bag-name" sm={2}>Bag Name</Label>
                <Col sm={10}>
                   <Input type="text" ref="bagname"
                   name="BagName" id="BagName" placeholder="bag name placeholder" 
                   value={this.state.BagName}
                   onChange={this.handleBagNameInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="type-of-bag" sm={2}>Type of bag</Label>
                <Col sm={10}>
                {/* this is creating the drop down to choose a type of bag */}
                   <select type="select" ref="typesofbag" 
                   value={this.state.TypeOfBag}
                   onChange={this.handleBagNameInput}
                   name="TypeOfBag" id="TypeOfBag" >
                    {bagTypes} 
                   </select>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="bag-description" sm={2}>Description</Label>
                <Col sm={10}>
                    <Input type="textarea" ref="bagdescription" 
                    name="BagDescription" id="BagDescription" 
                    value={this.state.BagDescription}
                   onChange={this.handleBagNameInput}/>
                </Col>
            </FormGroup>
        {/* //for this button to submit properly we'll need an event handler that will be added in the handleFormSubmit */}
            <input type="submit" value="Create" />
            
        </Form>
        );
    }
}

export default AddEditForm;