import React from 'react';
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
            <a href="/" className="header-logo">Baggage</a>
            <form onSubmit={this.handleSubmit}>
          <input className="search-input" type="text" placeholder="Search by..." value={this.state.value} onChange={this.handleChange} />
        <input className="child-page-header-search-button" type="submit" value="Search" />
      </form>
             <a href="/ManageBag/" className="manage-bags-header-link">Manage Bags</a>
          </header>
        
      );
  }

}

export default ChildPageHeader;
// 
