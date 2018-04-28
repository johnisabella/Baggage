import React from 'react';
import './childPageHeaderLoggedOut.css';

const ChildPageHeaderLoggedOut = props => (
  <header className="child-pages-header">
            <a href="/" className="header-logo">
            <img src={require('../../../images/logo_primary.png')} alt="baggage logo"/> <span className="logo-text">Baggage</span></a>
  </header>
);

export default ChildPageHeaderLoggedOut;
// 
