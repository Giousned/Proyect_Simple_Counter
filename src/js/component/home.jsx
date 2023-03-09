import React from "react";

import { useState, useEffect } from "react";

import Counter from "./Counter.jsx";
import Button from "./Button.jsx";
import CounterDown from "./CounterDown.jsx";
import Input from "./Input.jsx";
import AlertInput from "./AlertInput.jsx";
import Counter3 from "./Counter3.jsx";
import Counter2 from "./Counter2.jsx";



//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);

	const [estado, setEstado] = useState(false);
	const [reset, setReset] = useState(false);

	const [alert, setAlert] = useState(999999);

	const [valorDown, setValorDown] = useState(0);

	const handleAlertInputValor = (e, valor) => {
		if(e.key === "Enter") setAlert(valor);
	}

	const handleStartCounter = () => {
		setEstado(true);		
	}

	const handleResetCounter = () => {
		setEstado(false);
		setReset(!reset);		
	}

	const handleStopCounter = () => {
		setEstado(false);
	}

	const handleInputValor = (e, valor) => {
		if(e.key === "Enter") {
			setValorDown(valor);
		}
	}

	setTimeout(() => {
		setCounter(counter + 1);
	},1000)


	return (
	<>
		<Counter2 counter={counter} />

		<Counter3 alert={alert}/>
		<AlertInput handleAlertInputValor={handleAlertInputValor} />

		<Counter estado={estado} reset={reset}/>
		<Button handleStartCounter={handleStartCounter} handleResetCounter={handleResetCounter} handleStopCounter={handleStopCounter} />


		<CounterDown valorInicial={valorDown} />
		<Input handleInputValor={handleInputValor} />
	</>
	);
};

export default Home;