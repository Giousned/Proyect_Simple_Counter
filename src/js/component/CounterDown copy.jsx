import React from "react";
import { useState, useEffect } from "react";

import "../../styles/counter.css";


const CounterDown = (props) => {

  const [one, setOne] = useState(9);
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();
  const [six, setSix] = useState();

  let numeroSplit = "";
  let arr = [];

  let inicio = props.valorInicial;

  if (inicio > 0) {
    numeroSplit = inicio.toString().split("").reverse();
    numeroSplit.forEach(e => {arr.push(Number(e));});
  } 

  // useEffect(() => {
  //   if (arr[5] != "undefined") {setSix(arr[5]); setFive(arr[4]); setFour(arr[3]); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //     else if (arr[4] != "undefined") {setSix(0); setFive(arr[4]); setFour(arr[3]); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //       else if (arr[3] != "undefined") {setSix(0); setFive(0); setFour(arr[3]); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //         else if (arr[2] != "undefined") {setSix(0); setFive(0); setFour(0); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //           else if (arr[1] != "undefined") {setSix(0); setFive(0); setFour(0); setThree(0); setTwo(arr[1]); setOne(arr[0]);}
  //             else if (arr[0] != "undefined") {setSix(0); setFive(0); setFour(0); setThree(0); setTwo(0); setOne(arr[0]);}
  //               else setOne(9);
  // },[inicio]);


  function restarUnidades () {

    if (six === 0 && arr[5] != "undefined") { setOne(9); setSix(0);}

    else if (five === 0 && arr[4] != "undefined") { setOne(9); setFive(0); setSix(0);}



    if (one !== 0) setOne(one - 1);

    else if (one === 0) { setOne(9); setTwo(two - 1);}

    // else if (two === 0) { setOne(9); setTwo(0); setThree(three - 1);}

    // else if (three === 0 && arr[2] != "undefined") { setOne(9); setTwo(0); setThree(0); setFour(four - 1);}

    // else if (four === 0 && arr[3] != "undefined") { setOne(9); setTwo(0); setThree(0); setFour(0); setFive(five - 1);}



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


  // useEffect(() => {
  //   if (arr[5] != "undefined") {setSix(arr[5]); setFive(arr[4]); setFour(arr[3]); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //     else if (arr[4] != "undefined") {setSix(0); setFive(arr[4]); setFour(arr[3]); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //       else if (arr[3] != "undefined") {setSix(0); setFive(0); setFour(arr[3]); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //         else if (arr[2] != "undefined") {setSix(0); setFive(0); setFour(0); setThree(arr[2]); setTwo(arr[1]); setOne(arr[0]);}
  //           else if (arr[1] != "undefined") {setSix(0); setFive(0); setFour(0); setThree(0); setTwo(arr[1]); setOne(arr[0]);}
  //             else if (arr[0] != "undefined") {setSix(0); setFive(0); setFour(0); setThree(0); setTwo(0); setOne(arr[0]);}
  //               else setOne(9);
  // },[inicio]);