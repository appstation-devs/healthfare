import React from 'react';
import './Layout.css';

function TopNavbar() {
  return (
    <div className="topNav">
      <div className="my-container topNav__menu">
        <p>Ordered before <strong>17:30</strong>, shipped today – Support: <strong>(012) 345 000 789</strong></p>
        <div className="dropdown" style={{float:"right"}}>
          <button className="dropbtn">Account{'  '}<i className="fa fa-chevron-down" style={{marginLeft:'5px',fontSize:'10px',color:'#ccc'}}></i></button>
          <div className="dropdown-content" style={{borderTop:"2px solid #f07320",borderRadius:'5px'}}>
            <a className="dropdown-item" href="/#">Dashboard</a>
            <a className="dropdown-item" href="/#">Orders</a>
            <a className="dropdown-item" href="/#">Downloads</a>
            <a className="dropdown-item" href="/#">Edit Address</a>
            <a className="dropdown-item" href="/">Account Details</a>
            <a className="dropdown-item" href="/#">Log Out</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
