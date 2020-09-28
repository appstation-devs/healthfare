import React from 'react';
import TopNavbar from './TopNavbar';
import BrandNavbar from './BrandNavbar';
import MainNavbar from './MainNavbar';

function Header() {
  return (
    <header>
      <TopNavbar />
      <BrandNavbar />
      <MainNavbar />
    </header>
  );
}

export default Header;
