import React from "react";

export default function Breadcrumb({link}) {
  return (
    <>
      <nav aria-label="breadcrumb" style={{ backgroundColor:'#ecf0f1',padding:'50px 0'}}>
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">{ link }</li>
          </ol>
        </div>
      </nav>
    </>
  );
};
