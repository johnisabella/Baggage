import React from 'react';
import { Link } from 'react-router-dom';
import './childPageHeaderLoggedOut.css';

const ChildPageHeaderLoggedOut = props => (
  <header className="child-pages-header">
            <Link to="/" className="header-logo">
            <img src={require('../../../images/logo_primary.png')} alt="baggage logo"/> 
            <span className="logo-text">Baggage</span>
            </Link>
  </header>
);

export default ChildPageHeaderLoggedOut;
// 
