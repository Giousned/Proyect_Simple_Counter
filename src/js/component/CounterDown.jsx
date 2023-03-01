import React, { useState } from "react";

import "../../styles/counter.css";



const CounterDown = (props) => {

  let numeroSplit = "";
  let arr = [];

  let inicio = props.valorInicial;

  if (inicio>0) {
    numeroSplit = inicio.toString().split("");
    numeroSplit.forEach(e => {
      arr.push(Number(e));
    });
  }

  const [one, setOne] = useState(9);
  const [two, setTwo] = useState(9);
  const [three, setThree] = useState(9);
  const [four, setFour] = useState(9);
  const [five, setFive] = useState(9);
  const [six, setSix] = useState(9);

  // if (arr[0] != "undefined") setOne(arr[0]);
  // if (arr[1] != "undefined") setTwo(arr[1]);
  // if (arr[2] != "undefined") setThree(arr[2]);
  // if (arr[3] != "undefined") setFour(arr[3]);
  // if (arr[4] != "undefined") setFive(arr[4]);
  // if (arr[5] != "undefined") setSix(arr[5]);
  
  function restarUnidades () {

    if (one === 0) { setOne(9); setTwo(two - 1);}

    else if (two === 0) { setOne(9); setTwo(9); setThree(three - 1);}

    else if (three === 0) { setOne(9); setTwo(9); setThree(9); setFour(four - 1);}

    else if (four === 0) { setOne(9); setTwo(9); setThree(9); setFour(9); setFive(five - 1);}

    else if (five === 0) { setOne(9); setTwo(9); setThree(9); setFour(9); setFive(9); setSix(six - 1);}

    else if (six === 0) { setOne(9); setTwo(9); setThree(9); setFour(9); setFive(9); setSix(9);}

    else setOne(one - 1);
  }

  setTimeout(restarUnidades, 1000);

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
        <div className="col-1 one">{one}</div>
      </div>
    </div>
  );
};

export default CounterDown;