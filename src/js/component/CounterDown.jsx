import React from "react";
import { useMemo } from "react";

import "../../styles/counter.css";


// COMPONENTE
const CounterDown = (props) => {

  const counter = useMemo(() => {
    const secondsString = String(props.valorInicial).padStart(6,"0");
    const secondsArray = Array.from(secondsString);
    return secondsArray;
  },[props.valorInicial])


  return (
    <div id="containdown" className="container">
          <i className="fa-regular fa-clock"></i>
          {counter.map((digit,index)=>{
            return <p id="digitodown" key={index}>{digit}</p>
          })}
    </div>
  );
};

export default CounterDown;
