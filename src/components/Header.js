import React, { Component } from 'react';
import logo from '../asets/images/logo192.png';

class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <div className="container">
          <div className="header-wrap">
            <a href="#">
              <img src={logo} className="img-logo" alt="logo" />
            </a>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="page-info">
              <div className="nav-icon">
                <a className="page-link" href="#"><i className="fa fa-phone"></i></a>
                <a className="page-link" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="page-link" href="#"><i className="fas fa-question-circle"></i></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
