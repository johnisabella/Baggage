import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 class AddEditForm extends React.Component {
  render() {
    return (
        <Form>
            <FormGroup row>
                <Label for="bag-name" sm={2}>Bag Name</Label>
                <Col sm={10}>
                    <Input type="text" name="BagName" id="BagName" placeholder="bag name placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="type-of-bag" sm={2}>Type of bag</Label>
                <Col sm={10}>
                    <Input type="select" name="TypeOfBag" id="TypeOfBag" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="bag-description" sm={2}>Description</Label>
                <Col sm={10}>
                    <Input type="textarea" name="BagDescription" id="BagDescription" />
                </Col>
            </FormGroup>
        </Form>
        );
    }
}

export default AddEditForm;
