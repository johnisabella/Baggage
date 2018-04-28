import React, { Component } from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from '../../structure/Header';
import ChildPageHeaderLoggedOut from '../../display/ChildPageHeaderLoggedOut';
import API from "../../../utils/ReactApi";

import './about.css';


class About extends React.Component {
  state = {
    email: "",
    password1: "",
    password2: "",
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.password1 === this.state.password2) {
      //email is not blank and contains an @ symbol
      API.saveUser({
        email: this.state.email,
        password1: this.state.password1
      })
        // .then(console.log(this.state.email))
        .then(window.location = '/ManageBag')
        //Need to send new users to the Manage Bags page.
        .catch(err => console.log(err));
    } else {
      //modal with passwords not matching.
    }
  };

render() {
  return (
    <div>
      <ChildPageHeaderLoggedOut />
      <div className="homepageMessage">
      <img src={require('../../../images/logo_primary.png')} alt="baggage logo"/>
      <h1>Baggage</h1>
      <h3>Plan and Organize Your Stuff</h3>
      </div>
      <div className="aboutpageCards">
        <CardDeck>

          <div className="aboutCardContainer">
          <Card>
            <CardImg top width="70%" img src={require('../../../images/AboutPage1.jpg')} alt="Card image cap" width="350" height="230" />
            <CardBody>
              <CardTitle><h2>Travel Planning</h2></CardTitle>
              <div className="aboutCardText"><p><CardText>In a boring work meeting and thinking about what you need to pack for an upcoming trip? We've all been there. Baggage allows you to pack a virtual suitcase from anywhere. You can also let your friends and family know what you're packing with the "Shared Bag" feature.</CardText></p></div>
            </CardBody>
          </Card>
        </div>

        <div className="aboutCardContainer">
          <Card>
            <CardImg top width="70%" img src={require('../../../images/AboutPage2.jpg')} alt="Card image cap" width="350" height="230" />
            <CardBody>
              <CardTitle><h2>Shopping Strategy</h2></CardTitle>
              <div className="aboutCardText"><p><CardText>Tired of going to the grocery store without a plan and buying way more food than you actually need? Us too. Create a grocery bag before heading to the store to keep you on track -- or create a bag for the person in your life who does the grocery shopping with the "Shared Bag" feature.</CardText></p></div>
            </CardBody>
          </Card>
        </div>

        <div className="aboutCardContainer">
          <Card>
            <CardImg top width="70%" img src={require('../../../images/AboutPage3.jpg')} alt="Card image cap" width="350" height="230" />
            <CardBody>
              <CardTitle><h2>Tracking Valuables</h2></CardTitle>
              <div className="aboutCardText"><p><CardText>Having your most prized possessions stolen is terrible. Dealing with insurance claims is also terrible. Make it a little easier by creating a valuables bag to store important information about your products, like serial numbers.</CardText></p></div>
            </CardBody>
          </Card>
        </div>

        <div className="aboutCardContainer">
          <Card>
            <CardImg top width="70%" img src={require('../../../images/AboutPage4.jpg')} alt="Card image cap" width="350" height="230" />
            <CardBody>
              <CardTitle><h2>Much, Much More...</h2></CardTitle>
              <div className="aboutCardText"><p><CardText>Basically, you can create any type of bag you'd like, and you can add custom items too. A bag of goods to donate to your nearby shelter? Check. A bag of birthday wish list items to subtly share with your significant other? Check. A bag of materials to remember to bring to that upcoming job interview? Baggage can help you do it all.</CardText></p></div>
            </CardBody>
          </Card>
        </div>

        </CardDeck>
      </div>


      <div className="newUserContainer">
      <h3>Create an Account to Begin</h3>
      <form onSubmit={this.handleSubmit}>
        <div className="emailEntry">
          {/* <Label for="loginEmail">Email Address:</Label> */}
          <Input type="email" style={{height: '30px', width: '90%', margin: '2%', "text-align": 'center', "font-family": 'Questrial, sans-serif', "font-style": 'italic'}} name="email" id="emailFormField" placeholder="Email Address" value={this.state.email}
                onChange={this.handleInputChange} />
          </div>
        <div className="passwordEntry">
          {/* <Label for="loginPassword">Password:</Label> */}
          <Input type="password" style={{height: '30px', width: '90%', margin: '2%', "text-align": 'center', "font-family": 'Questrial, sans-serif', "font-style": 'italic'}} name="password1" id="passwordFormField" placeholder="Password" value={this.state.password1}
                onChange={this.handleInputChange} />
      </div>
      <div className="passwordConfirm">
        {/* <Label for="loginPassword">Password:</Label> */}
        <Input type="password" style={{height: '30px', width: '90%', margin: '2%', "text-align": 'center', "font-family": 'Questrial, sans-serif', "font-style": 'italic'}} name="password2" id="passwordFormField" placeholder="Confirm Your Password" value={this.state.password2}
        onChange={this.handleInputChange} />
    </div>
      <input className="login-submit-button" type="submit" value="Submit"
      disabled={!(this.state.email && this.state.password1 && this.state.password2)}
      onClick={this.handleFormSubmit} />
    </form>
    </div>
  </div>
    );
  }
}

export default About;
