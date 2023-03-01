import React from "react";

const Button = () => {
  return (
    <div className="container my-0 d-flex justify-content-center">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">
          START
        </button>
        <button type="button" className="btn btn-primary">
          STOP
        </button>
      </div>
    </div>
  );
};

export default Button;