import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import App from './App';
import {Provider} from "./context/ThemeContext"
import State from "./components/State"
// State Data JSON
import tnData from "./data/tennessee.json"
import txData from "./data/texas.json"
import msData from "./data/mississippi.json"
import luData from "./data/louisiana.json"
import reportWebVitals from './reportWebVitals';
import "./App.sass";

ReactDOM.render(
  <React.StrictMode>
  <Provider>
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <App />
        </Route>
        <Route path="/tennessee">
          <State data={tnData}/>
        </Route>
        <Route path="/texas">
          <State data={txData}/>
        </Route>
        <Route path="/mississippi">
          <State data={msData}/>
        </Route>
        <Route path="/louisiana">
          <State data={luData}/>
        </Route>
      </Switch>
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
