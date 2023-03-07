import React from "react";

import { useState } from "react";

import Counter from "./Counter.jsx";
import Button from "./Button.jsx";
import CounterDown from "./CounterDown.jsx";
import Input from "./Input.jsx";
import AlertInput from "./AlertInput.jsx";


// let valorInicial = 9;

//create your first component
const Home = () => {
	const [estado, setEstado] = useState(false);
	const [reset, setReset] = useState(false);
	const [alert, setAlert] = useState("");

	const handleAlertInputValor = (e,valor) => {
		if(e.key === "Enter") setAlert(valor);
	}

	const handleStartCounter = () => {
		setEstado(true);		
	}

	const handleResetCounter = () => {
		setReset(!reset);		
	}

	const handleStopCounter = () => {
		setEstado(false);
	}


	return (
	<>
		<Counter estado={estado} reset={reset} handleStopCounter={handleStopCounter} alert={alert} />
		<Button handleStartCounter={handleStartCounter} handleResetCounter={handleResetCounter} handleStopCounter={handleStopCounter} />

		<AlertInput handleAlertInputValor={handleAlertInputValor} />

		{/* <CounterDown valorInicial={estado} />
		<Input handleInputValor={handleInputValor} /> */}
	</>
	);
};

export default Home;