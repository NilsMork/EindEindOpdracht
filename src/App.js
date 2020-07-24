import React from 'react';
import Students from "./components/Students"
// import Rahima from './components/Rahima';
// import Sandra from './components/Sandra';
// import Wietske from './components/Wietske';
// import Storm from './components/Storm';
import AllData from './AllData'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  const sortAllNames = AllData.map((item) => item.name);
  console.log("alle-namen: ", sortAllNames);

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
  const sortAssignment = [...new Set(AllData.map((item) => item.assignment))];
  console.log("getAssignment: ", sortAssignment);

  const assignmentList = AllData.map((item) => item.assignment);
  console.log("assignmentList: ", assignmentList);

  const sortDifficulty = [...new Set(AllData.map((item) => item.difficulty))];
  console.log("getDifficulty: ", sortDifficulty);

  const sortEnjoyment = [...new Set(AllData.map((item) => item.enjoyment))];
  console.log("getDifficulty: ", sortEnjoyment);

  return (
    
    <Router>
      <div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          {createlinks}
        </ul>
        <Switch>
          <ul>
          <Route path="/" exact component={Home} />
          {createRoute}
          </ul>
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);


export default App;
