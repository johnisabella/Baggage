import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from '../../structure/Header';
import ChildPageHeader from '../../display/ChildPageHeader';
import './home.css';


class Home extends Component {
  state = {};

  render() {
    return (
      <div>
      <Header />
      <ChildPageHeader>
        <h1>Welcome to Baggage</h1>
        <h3>To access your bags, please login below:</h3>
      </ChildPageHeader>
      <div className="login">
      <Form>
        <div className="emailEntry">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        </div>
        <div className="passwordEntry">
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
      </div>
      </Form>
    </div>
  </div>
    );
  }
}

export default Home;
