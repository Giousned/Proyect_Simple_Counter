import React from "react";

import "../../styles/counter.css";

//COMPONENTE
const Counter2 = ({one, two, three, four, five, six}) => {

  return (
    <div className="container d-flex text-bg-dark">
      <div className="row bigCounter justify-content-center fw-bold w-100">
        <div className="col-2 calendar">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="col-1 six">{six}</div>
        <div className="col-1 five">{five}</div>
        <div className="col-1 four">{four}</div>
        <div className="col-1 three">{three}</div>
        <div className="col-1 two">{two}</div>
        <div className="col-1 one">{one % 10}</div>
      </div>
    </div>
  );
};

export default Counter2;
