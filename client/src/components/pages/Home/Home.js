import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Header from '../../structure/Header';
import ChildPageHeader from '../../display/ChildPageHeader';
import './home.css';
import API from "../../../utils/ReactApi";


class Home extends React.Component {
    state = {
      email: "",
      password1: "",
      redirect: false
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
        API.userLogin({
          email: this.state.email,
          password1: this.state.password1
        })
          // .then(console.log(this.state.email))
          .then(res => {
            console.log("login successful")
            this.setState({
              redirect: true,
            })
          })
          //Need to send new users to the Manage Bags page.
          .catch(err => alert("Your email and password are not recognized. Please try again."))
        };

  render() {

    if (this.state.redirect) {
      return <Redirect to="/ManageBag" />
    }

    return (
      <div className="home-page-wrapper">
      <div className="homepageMessage">
      <img src={require('../../../images/logo_primary.png')} alt="baggage logo"/>
      <h1>Baggage</h1>
      <h3>Plan and Organize Your Stuff</h3>
      </div>
      <div className="loginContainer">
      <h3>Login to Begin</h3>
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
      <input className="login-submit-button" type="submit" value="Submit" onClick={this.handleFormSubmit} />
    </form>
    </div>
    <div className="infoButtonContainer">
    <Link to="/About/" className="home-page-to-about-page-link">What is Baggage? Click to Learn More...</Link>
  </div>
  </div>
    );
  }
}

export default Home;
