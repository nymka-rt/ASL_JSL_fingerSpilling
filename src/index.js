import React from "react";
import ReactDOM from "react-dom";
import "./pages/index.css";
import ASL from "./pages/ASL";
import ASLTest from "./pages/ASLTest";
import JSL from "./pages/JSL";
import JSLTest from "./pages/JSLTest";
import Home from "./pages/home";
import { ChakraProvider } from "@chakra-ui/react";
import * as serviceWorker from "./pages/serviceWorker";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <Link to="/aslPractice">
            <li>
              <span>ASL</span>
            </li>
          </Link>
          <Link to="/aslTest">
            <li>
              <span>ASLTest</span>
            </li>
          </Link>
          <Link to="/jslPractice">
            <li>
              <span>JSLPractice</span>
            </li>
          </Link>
          <Link to="/jslTest">
            <li>
              <span>JSLTest</span>
            </li>
          </Link>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aslPractice" element={<ASL />}></Route>
          <Route exact path="/aslTest" element={<ASLTest />}></Route>
          <Route exact path="/jslPractice" element={<JSL />}></Route>
          <Route exact path="/jslTest" element={<JSLTest />}></Route>
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
