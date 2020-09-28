import React from "react";

export default function Banner() {
  return (
    <div className="jumbotron" style={{backgroundImage:'url(/images/banner-main.png)',backgroundPosition:'top right',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-5">Healthfare - Online Doctor</h1>
            <hr className="my-4" />
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. <br />It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <hr className="my-4" />
          </div>
        </div>
      </div> 
    </div>
  );
};
