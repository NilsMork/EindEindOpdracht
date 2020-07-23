import React from "react";
import "./App.css";
import Home from "./Home";
import NavBar from "./components/NavBar";
import StudentContainer from "./StudentContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/StudentContainer" component={StudentContainer} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
