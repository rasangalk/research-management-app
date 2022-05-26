import React from "react";
import { render } from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/store";
import "./app.css";
import App from "./testApp";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
