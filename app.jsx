import React from "react";
import { render } from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signin from "./src/containers/Signin";
import Signup from "./src/containers/Register";
import LandingPage from "./src/containers/LandingPage";
import StudentRegister from "./src/containers/StudentRegister";
import { Provider } from "react-redux";
import store from "./store";
import "./app.css";

render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/student/signup" element={<StudentRegister />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("app")
);
