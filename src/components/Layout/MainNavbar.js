import React from 'react';

function MainNavbar() {
  return (
    <div className="mainNavbar">
      <div className="my-container main__Navbar">
        <div className="dropdown dropbtn-orange" style={{left:"0"}}>
          <button className="dropbtn dropbtn--orange">All Categories<i className="fa fa-ellipsis-h" style={{marginLeft:'30px'}}></i></button>
          <div className="dropdown-content" style={{left:"0",border: "2px solid #f07320",borderRadius:'5px'}}>
            <a className="dropdown-item" href="/#">Dashboard</a>
            <a className="dropdown-item" href="/#">Orders</a>
            <a className="dropdown-item" href="/#">Downloads</a>
            <a className="dropdown-item" href="/#">Edit Address</a>
            <a className="dropdown-item" href="/#">Account Details</a>
            <a className="dropdown-item" href="/#">Log Out</a>
          </div>
        </div>
        <nav className="mainNav" id="myTopnav">
          <a href="#home" className="active">HOME</a>
          <div className="megaMenu__dropdown">
            <button className="megaMenu__dropbtn">SHOP 
              <i className="fa fa-chevron-down" style={{marginLeft:'5px',fontSize:'10px',color:'#ccc'}}></i>
            </button>
            <div className="megaMenu__dropdown-content" style={{borderTop:"2px solid #f07320",borderRadius:'5px'}}>
              <div className="megaMenu__header">
                <span>Featured Categories</span>
              </div>   
              <div className="megaMenu__row">
                <div className="megaMenu__column">
                  <h6 style={{padding:'0px 14px'}}>Category 1</h6>
                  <a href="/#">Link 1</a>
                  <a href="/#">Link 2</a>
                  <a href="/#">Link 3</a>
                </div>
                <div className="megaMenu__column">
                  <h6 style={{padding:'0px 14px'}}>Category 2</h6>
                  <a href="/#">Link 1</a>
                  <a href="/#">Link 2</a>
                  <a href="/#">Link 3</a>
                </div>
                <div className="megaMenu__column">
                  <h6 style={{padding:'0px 14px'}}>Category 3</h6>
                  <a href="/#">Link 1</a>
                  <a href="/#">Link 2</a>
                  <a href="/#">Link 3</a>
                </div>
              </div>
            </div>
          </div> 
          <a className="active" href="/#">PHARMACY SERVICES</a>
          <a className="active" href="/#">ONLINE DOCTORS</a>
          <a className="active" href="/#">CONTACT US</a>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;
