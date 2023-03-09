import React from "react";
import { useState, useMemo, useEffect } from "react";

import "../../styles/counter.css";


// COMPONENTE
const CounterDown = (props) => {
  const [seconds, setSeconds] = useState(0);

  let timeout = 0;

  if(props.valorInicial != 0) {timeout = setTimeout(() => {setSeconds(seconds - 1);},1000);}

  useEffect(() => {clearTimeout(timeout); setSeconds(props.valorInicial);},[props.valorInicial]);

  const counter = useMemo(() => {
    const secondsString = String(seconds).padStart(6,"0");
    const secondsArray = Array.from(secondsString);
    return secondsArray;
  },[seconds])


  return (
    <div id="contain" className="container">
          <i className="fa-regular fa-clock"></i>
          {counter.map((digit,index)=>{
            return <p id="digito" key={index}>{digit}</p>
          })}
    </div>
  );
};

export default CounterDown;

// if (inicio > 0) {
//   numeroSplit = inicio.toString().split("").reverse();
//   numeroSplit.forEach(e => {arr.push(Number(e));});
// }