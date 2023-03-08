import React from "react";

import { useState } from "react";


//COMPONENTE
const Input = (props) => {
  const [value, setValue] = useState("");

  return (
    <div id="input" className="container my-0 d-flex justify-content-center w-50">
      <div className="input-group mb-3 w-50">
        <span className="input-group-text" id="basic-addon1">
          Insert Number:
        </span>
          <input
            type="text"
            className="form-control"
            placeholder="Number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {props.handleInputValor(e, value)}}
          />
      </div>
    </div>
  );
};

export default Input;

{/*  USAR SIEMPRE LOS FORMULARIOS ASI, CON UN HANDLE SUBMIT Y PASANDOSE ESTOS ESTADOS
  const [value, setValue] = useState(); 
    <input
    type="text"
    name="size"
    className="mx-2"
    value={value}
    onChange={(e) => {
      setValue(e.target.value);
      props.funcionValor(e.target.value);
}} */}