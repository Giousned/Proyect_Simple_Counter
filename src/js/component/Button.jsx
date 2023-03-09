import React from "react";

const Button = (props) => {
  return (
    <div id="botones" className="container d-flex justify-content-center">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={props.handleStartCounter} type="button" className="btn btn-success">
          START
        </button>
        <button onClick={props.handleResetCounter} type="button" className="btn btn-secondary">
          RESET
        </button>
        <button onClick={props.handleStopCounter} type="button" className="btn btn-danger">
          STOP
        </button>
      </div>
    </div>
  );
};

export default Button;