import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from '../../structure/Header';
import ChildPageHeader from '../../display/ChildPageHeader';
import './home.css';


class Home extends React.Component {
  state = {};

  // handleSubmit(event) {
  //   alert('Search Term Entered Is: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
      <div className="homepageMessage">
      <h1>Baggage</h1>
      <h3>Plan and Organize Your Stuff</h3>
      </div>
      <div className="loginContainer">
      <h3>Login to Begin</h3>
      <form onSubmit={this.handleSubmit}>
        <div className="emailEntry">
          {/* <Label for="loginEmail">Email Address:</Label> */}
          <Input type="email" style={{height: '30px', width: '90%', margin: '2%', "text-align": 'center', "font-family": 'Questrial, sans-serif', "font-style": 'italic'}} name="email" id="emailFormField" placeholder="Email Address" />
          </div>
        <div className="passwordEntry">
          {/* <Label for="loginPassword">Password:</Label> */}
          <Input type="password" style={{height: '30px', width: '90%', margin: '2%', "text-align": 'center', "font-family": 'Questrial, sans-serif', "font-style": 'italic'}} name="password" id="passwordFormField" placeholder="Password" />
      </div>
      <input className="login-submit-button" type="submit" value="Submit" />
    </form>
    </div>
    <div className="infoButtonContainer">
    <a href="/About/" className="home-page-to-about-page-link">What is Baggage? Click to Learn More...</a>
  </div>
  </div>
    );
  }
}

export default Home;
