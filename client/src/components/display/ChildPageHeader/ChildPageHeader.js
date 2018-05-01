import React from 'react';
import { Link } from 'react-router-dom';
import './childPageHeader.css';

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
            <Link to="/" className="header-logo">
            <img src={require('../../../images/logo_primary.png')} alt="baggage logo"/> <span className="logo-text">Baggage</span>
            </Link>
            <form onSubmit={this.handleSubmit}>
          <input className="search-input" type="text" placeholder="Search by..." value={this.state.value} onChange={this.handleChange} />
        <input className="child-page-header-search-button" type="submit" value="Search" />
      </form>
             <Link to="/ManageBag/" className="manage-bags-header-link"><span>Manage Bags</span>
             </Link>
          </header>
        
      );
  }

}

export default ChildPageHeader;
// 
