//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
var cont = 0;

setInterval(counter, 1000);

function counter() {
	cont++;
	ReactDOM.render(<Home time={cont} />, document.querySelector("#app"));
}
