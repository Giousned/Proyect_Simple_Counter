import React from "react";

import { useState } from "react";

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

	let timeout = 0;

	let timeout2 = 0;

	const handleAlertInputValor = (e, valor) => {
		if(e.key === "Enter") setAlert(valor);
	}

	const handleStartCounter = () => {
		setEstado(true);		
	}

	const handleResetCounter = () => {
		setReset(!reset);
		setEstado(false);
		setCounter(0);
		clearTimeout(timeout);	
	}

	const handleStopCounter = () => {
		setEstado(false);
		clearTimeout(timeout);
	}

	const handleInputValor = (e, valor) => {
		if(e.key === "Enter") {
			clearTimeout(timeout2);
			setValorDown(valor);
		}
	}

	if(estado)  { timeout = setTimeout(() => { setCounter(counter + 1);},1000);} 

  	if(valorDown != 0) {timeout2 = setTimeout(() => {setValorDown(valorDown - 1);},1000);}

	return (
	<>
		<Counter />

		<Counter2 counter={counter} />
		<Button handleStartCounter={handleStartCounter} handleResetCounter={handleResetCounter} handleStopCounter={handleStopCounter} />

		<Counter3 alert={alert}/>
		<AlertInput handleAlertInputValor={handleAlertInputValor} />

		<CounterDown valorInicial={valorDown} />
		<Input handleInputValor={handleInputValor} />
	</>
	);
};

export default Home;