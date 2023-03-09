import React from "react";

import { useState, useMemo } from "react";

import "../../styles/counter3.css";

let timeout = 0;

//COMPONENTE
const Counter3 = (props) => {
  const [seconds, setSeconds] = useState(0);

  timeout = setTimeout(() => { setSeconds(seconds + 1);},1000)

  const counter = useMemo(() => {
    const secondsString = String(seconds).padStart(6,"0");
    const secondsArray = Array.from(secondsString);
    return secondsArray;
  },[seconds])

  if(props.alert == seconds) {
    alert ("Se ha alcanzado el tiempo!");
    setSeconds(0);
    clearTimeout(timeout);
  }

  return (
    <div id="contain" className="container">
          <i className="fa-regular fa-clock"></i>
        {counter.map((digit,index)=>{
          return <p id="digito" key={index}>{digit}</p>
        })}
    </div>
  );
};

export default Counter3;
