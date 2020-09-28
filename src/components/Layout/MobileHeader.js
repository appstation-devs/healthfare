import React from 'react';
import './Layout.css';

function MobileHeader() {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }
  const closeNav = ()=> {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <div className="mobilemenu">
      <div id="myNav" className="overlay">
        <a href={void(0)} className="closebtn" onClick={closeNav}>&times;</a>
        <div class="overlay-content">
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
        </div>
      </div>
      <div className="mobilemenu-m">
        <img src="images/logo.png" alt="Healthfare" className="mobileLogo" />
        <span style={{fontSize:'24px'}} onClick={openNav}>&#9776;</span>
      </div>
    </div>
  );
}

export default MobileHeader;