import React from 'react';
import './Layout.css';

function BrandNavbar() {
  return (
    <div className="brandNav">
      <div className="my-container brandNav__menu">
        <img src="images/logo.png" alt="Healthfare" className="brandLogo" />
        <form className="search">
          <input type="text" placeholder="Enter your keyword..." name="search" />
          <button type="submit" className="brandNav__search">Search</button>
        </form>
        <div className="discount">
          <img src="images/discount.jpg" alt="Healthfare" />
          <div>
            <span className="discount__rate">-50% Off</span>
            <br />
            <span>on 100s of products</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandNavbar;