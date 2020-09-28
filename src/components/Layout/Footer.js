import React from 'react';
import './Layout.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="my-container">
        <div className="footer__section">
          <div className="footer__sectiona">
            <img src="images/logo.png" alt="Healthfare" style={{marginBottom:'20px'}} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="footer__sectionb">
            <span>Categories</span>
            <ul>
              <li><a href="/#">Medicines</a></li>
              <li><a href="/#">Skin Care</a></li>
              <li><a href="/#">Vitamins & Supplements</a></li>
              <li><a href="/#">Reflex Hammer</a></li>
            </ul>
          </div>
          <div className="footer__sectionc">
            <span>Account</span>
            <ul>
              <li><a href="/#">Wishlist</a></li>
              <li><a href="/#">Compare</a></li>
              <li><a href="/#">Subscribe</a></li>
              <li><a href="/#">Log in</a></li>
            </ul>
          </div>
          <div className="footer__sectiond">
            <span>Quick Links</span>
            <ul>
              <li><a href="/#">Shipping & Returns</a></li>
              <li><a href="/#">Privacy Policy</a></li>
              <li><a href="/#">Terms & Conditions</a></li>
              <li><a href="/#">Vacancies</a></li>
            </ul>
          </div>
          <div className="footer__sectione">
            <span>Promotions</span>
            <img src="images/promotions.png" alt="Healthfare" />
          </div>
        </div>

        <div className="footer__section2">
          <div className="footer__section2-socials">
            <a href="/#"><i className="fa fa-facebook"></i></a>
            <a href="/#"><i className="fa fa-twitter"></i></a>
            <a href="/#"><i className="fa fa-instagram"></i></a>
            <a href="/#"><i className="fa fa-youtube"></i></a>
            <a href="/#"><i className="fa fa-pinterest"></i></a>
          </div>
          <div className="footer__section2-links">
            <a href="/#">ABOUT US</a> { ' | ' }
            <a href="/#">CUSTOMER SERVICE</a> { ' | ' }
            <a href="/#">PRIVACY POLICY</a> { ' | ' }
            <a href="/#">SITE MAP</a> { ' | ' }
            <a href="/#">ADVANCED SEARCH</a> { ' | ' }
            <a href="/#">CONTACT US</a>
          </div>
        </div>

        <div className="footer__section3">
          Copyright &copy; 2020 Loctech. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
