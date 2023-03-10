import React from "react";

import { useState } from "react";

import "../../styles/counter.css";


//COMPONENTE
const Counter = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);

  function sumarUnidades () {

    if (six === 9) { setOne(0); setTwo(0); setThree(0); setFour(0); setFive(0); setSix(0);}
    
    else if (five === 9) { setOne(0); setTwo(0); setThree(0); setFour(0); setFive(0); setSix(six + 1);}
    
    else if (four === 9) { setOne(0); setTwo(0); setThree(0); setFour(0); setFive(five + 1);}

    else if (three === 9) { setOne(0); setTwo(0); setThree(0); setFour(four + 1);}

    else if (two === 9) { setOne(0); setTwo(0); setThree(three + 1);}

    else if (one === 9) { setOne(0); setTwo(two + 1);}

    else setOne(one + 1);
  }

  setTimeout(sumarUnidades, 1000);

  return (
    <div className="container d-flex text-bg-success">
      <div className="row bigCounter justify-content-center fw-bold w-100">
        <div className="col-2 calendar">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="col-1 six">{six}</div>
        <div className="col-1 five">{five}</div>
        <div className="col-1 four">{four}</div>
        <div className="col-1 three">{three}</div>
        <div className="col-1 two">{two}</div>
        <div className="col-1 one">{one}</div>
      </div>
    </div>
  );
};

export default Counter;

// function Timer(callback, delay) {
//   var timerId, start, remaining = delay;

//   this.pause = function() {
//       window.clearTimeout(timerId);
//       remaining -= new Date() - start;
//   };

//   this.resume = function() {
//       start = new Date();
//       window.clearTimeout(timerId);
//       timerId = window.setTimeout(callback, remaining);
//   };

// timer.pause();
// // Do some stuff...
// timer.resume();