import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./SearchEngine";
import Firma from "./Firma";
import Forecast from "./Forecast";
//import App from './App';

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

function App() {
  return (
    <div>
      <SearchEngine />
      <br />
      <br />
      <Forecast />
      <Firma />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
