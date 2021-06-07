import React from 'react';

export function Footer() {
  return (
    <header className="page-footer">
      <div className="container">
        <ul class="footer-list">
          <li class="col-4 footer-item">
            <h4 class="footer-item-title">About us</h4>
            <ul class="footer-card-list">
              <li class="footer-card-item footer-card-item-dot"><a class="footer-card-link">Distribution system</a></li>
              <li class="footer-card-item footer-card-item-dot"><a class="footer-card-link">News - Offers</a></li>
              <li class="footer-card-item footer-card-item-dot"><a class="footer-card-link">Beauty blogger review</a>
              </li>
              <li class="footer-card-item footer-card-item-dot"><a class="footer-card-link">Facuties and facelities</a>
              </li>
            </ul>
          </li>
          <li class="col-4 footer-item">
            <h4 class="footer-item-title">Support</h4>
            <ul class="footer-card-list">
              <li class="footer-card-item footer-card-item-dot"><a class="footer-card-link">Delivery</a></li>
              <li class="footer-card-item footer-card-item-dot"><a class="footer-card-link">Exchange</a></li>
            </ul>
          </li>
          <li class="col-4 footer-item">
            <h4 class="footer-item-title">Social connection</h4>
            <ul class="footer-card-list">
              <li class="footer-card-item"><a class="footer-card-link"><i class="fab fa-facebook-f"></i>Facebook</a></li>
              <li class="footer-card-item"><a class="footer-card-link"><i class="fab fa-google"></i>Google</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
