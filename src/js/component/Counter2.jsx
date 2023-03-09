import React from "react";

import "../../styles/counter.css";

let six = 0;
let five = 0;
let four = 0;
let three = 0;
let two = 0;
let one = 0;

//COMPONENTE
const Counter2 = (props) => {

  six = Math.floor(props.counter/100000);
	five = Math.floor(props.counter/10000);
	four = Math.floor(props.counter/1000);
	three = Math.floor(props.counter/100);
	two = Math.floor(props.counter/10);
	one = Math.floor(props.counter/1);

  return (
    <div className="container d-flex text-bg-dark">
      <div className="row bigCounter justify-content-center fw-bold w-100">
        <div className="col-2 calendar">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="col-1 six">{six % 10}</div>
        <div className="col-1 five">{five % 10}</div>
        <div className="col-1 four">{four % 10}</div>
        <div className="col-1 three">{three % 10}</div>
        <div className="col-1 two">{two % 10}</div>
        <div className="col-1 one">{one % 10}</div>
      </div>
    </div>
  );
};

export default Counter2;
