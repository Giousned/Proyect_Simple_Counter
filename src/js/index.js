//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/counter3.css";

//import your own components
import Home from "./component/home.jsx";
import Counter2 from "./component/Counter2.jsx";


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

// let counter = 0;
// setInterval(function(){
// 	const six = Math.floor(counter/100000);
// 	const five = Math.floor(counter/10000);
// 	const four = Math.floor(counter/1000);
// 	const three = Math.floor(counter/100);
// 	const two = Math.floor(counter/10);
// 	const one = Math.floor(counter/1);
// 	counter++;

// ReactDOM.render(<Counter2 one={one} two={two} three={three} four={four} five={five} six={six} />, document.querySelector("#app"));

// },1000)