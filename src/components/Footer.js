import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <header className="page-footer">
        <div className="container">
          <ul className="footer-list">
            <li className="col-4 footer-item">
              <h4 className="footer-item-title">About us</h4>
            </li>
            <li className="col-4 footer-item">
              <h4 className="footer-item-title">Support</h4>
            </li>
            <li className="col-4 footer-item">
              <h4 className="footer-item-title">Social connection</h4>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Footer;
