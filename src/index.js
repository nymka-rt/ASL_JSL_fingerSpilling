import React from "react";
import ReactDOM from "react-dom";
import "./pages/index.css";
import ASL from "./pages/ASL";
import JSL from "./pages/JSL";
import Home from "./pages/home";
import { ChakraProvider } from "@chakra-ui/react";
import * as serviceWorker from "./pages/serviceWorker";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <span>
              <Link to="/">Home</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/asl">ASl</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/jsl">JSL</Link>
            </span>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/asl" element={<ASL />}></Route>
          <Route exact path="/jsl" element={<JSL />}></Route>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
