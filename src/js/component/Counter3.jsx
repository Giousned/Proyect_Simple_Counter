import React from "react";

import { useState, useMemo } from "react";

import "../../styles/counter3.css";

//COMPONENTE
const Counter3 = () => {
  const [seconds, setSeconds] = useState(0);

  setTimeout(()=>{
    setSeconds(seconds + 1);
  },1000)

  const counter = useMemo(()=>{
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

export default Counter3;
