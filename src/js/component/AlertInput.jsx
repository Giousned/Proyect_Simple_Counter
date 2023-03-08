import React from "react";

import { useState } from "react";

const AlertInput = (props) => {
  const [value, setValue] = useState("");

  return (
    <div id="alertInput" className="container my-0 d-flex justify-content-center w-50">
      <div className="input-group mb-3 w-75">
        <span className="input-group-text" id="basic-addon1">
          Insert Alert Number:
        </span>
          <input
            type="text"
            className="form-control"
            placeholder="Number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => props.handleAlertInputValor(e, value)}
          />
      </div>
    </div>
  );
};

export default AlertInput;

{/*  USAR SIEMPRE LOS FORMULARIOS ASI, CON UN HANDLE SUBMIT Y PASANDOSE ESTOS ESTADOS
  Y MEJOR USAR SIEMPRE DENTRO DE UN FORM CON UN EVENT.PREVENTDEFAULT EN EL SUBMIT
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