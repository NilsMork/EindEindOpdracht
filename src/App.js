import React from 'react';
import Students from "./components/Students"
import Home from "./components/Home"
import AllData from './AllData'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Victory from './victory/Victory';
import './App.css';

function App() {

  const sortAllNames = AllData.map((item) => item.name);
  console.log("alle-namen: ", sortAllNames);

  const sortAllAssignments = AllData.map((item) => item.assignment);
  console.log("alle-assignments: ", sortAllAssignments);

  const removeDoubleNames = [...new Set(AllData.map((item) => item.name))];
  console.log("Student-niet-dubbel: ", removeDoubleNames);


  const createlinks = removeDoubleNames.map((name) => (
    <li key={name}>
      <Link to={`/${name}`}>{name}</Link>
    </li>
  ))

  const createRoute = removeDoubleNames.map((name) => (
    <Route path={`/${name}`} key={name}>
      <Students
        studentName={name}
      />
    </Route>
  ))

  const sortDifficulty = [...new Set(AllData.map((item) => item.difficulty))];
  console.log("sortDifficulty: ", sortDifficulty);

  const sortEnjoyment = [...new Set(AllData.map((item) => item.enjoyment))];
  console.log("sortDifficulty: ", sortEnjoyment);

  return (
    
    <Router>
      <div>
        <ul className="navLinks">
          <Link to="/">Home</Link>
          {createlinks}
        </ul>
        <Switch>
          <Route path="/" exact> 
            <Home
            removeDoubleNames={removeDoubleNames}
            sortAllAssignments={sortAllAssignments}
            AllData={AllData}
          />
          </Route>
          <Route>
          {createRoute}
          </Route>
        </Switch>
      </div>
      <div>
      {/* <Victory /> */}
      </div>
    </Router>
    
  );
}



export default App;
