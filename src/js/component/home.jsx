import React from "react";

import { useState } from "react";

import Counter from "./Counter.jsx";
import Button from "./Button.jsx";
import CounterDown from "./CounterDown.jsx";
import Input from "./Input.jsx";

let valorIncial = 9;

//create your first component
const Home = () => {
	const [estado, setEstado] = useState(valorIncial);

	const handleInputValor = (valor) => {
		setEstado(valor);
	}

	return (
	<>
		<Counter />
		<Button />

		<CounterDown valorInicial={estado} />
		<Input handleInputValor={handleInputValor} />
	</>
	);
};

export default Home;