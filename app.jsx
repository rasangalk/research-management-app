import React from "react";

import { render } from "react-dom";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import Signin from "./src/containers/Signin";

import Signup from "./src/containers/Register";

import LandingPage from "./src/containers/LandingPage";

import StudentRegister from "./src/containers/Student/StudentRegister";

import StudentHome from "./src/containers/Student/StudentHome/Home";

import { Provider } from "react-redux";

import store from "./src/store";

import "./app.css";
import { Provider } from "react-redux";
import store from "./src/store";
import "./app.css";

import StudentSubmission from "./src/containers/Student/StudentSubmission/StudentSubmission";

render(
	<Provider store={store}>
		<Router>
			<Routes>
				<Route path='/r' element={<StudentSubmission />} />
				<Route path='/' element={<StudentHome />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/landing-page' element={<LandingPage />} />
				<Route path='/student/signup' element={<StudentRegister />} />
			</Routes>
		</Router>
	</Provider>,
	document.getElementById("app"),
);
