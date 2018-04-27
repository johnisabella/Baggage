import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './childPageHeader.css';


// const ChildPageHeader = props => (
//    <header className="child-pages-header">
//    <a href="/" className="header-logo">Baggage</a>
//     <a href="/ManageBag/" className="manage-bags-header-link">Manage Bags</a>
//  </header>
// );
class ChildPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Search Term Entered Is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
      return(
        <header className="child-pages-header">
            <a href="/" className="header-logo">Baggage</a>
            <form onSubmit={this.handleSubmit}>
          <input className="search-input" type="text" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
        <input className="child-page-header-search-button" type="submit" value="Submit" />
      </form>
             <a href="/ManageBag/" className="manage-bags-header-link">Manage Bags</a>
          </header>
        
      );
  }

}

export default ChildPageHeader;
// 
