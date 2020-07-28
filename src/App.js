import React from 'react';
import AllData from './data/AllData'
import AverageDasboard from "./components/AverageDasboard"
import StudentDashboard from "./components/StudentDashboard"
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  const studentList = [...new Set(AllData.map((item) => item.name))];

  const getAssignmentList = [
    ...new Set(AllData.map((x) => x.assignment)),
  ].sort((assignment1, assignment2) => {
    if (assignment1 > assignment2) {
      return 1;
    } else if (assignment1 === assignment2) {
      return 0;
    } else if (assignment1 < assignment2) {
      return -1;
    }
    return 0;
  });

  const getEnjoymentScore = (name, assignment) => {
    const enjoyment = AllData
      .filter((item) => {
        return item.name === name;
      })
      .filter((name) => {
        return name.assignment === assignment;
      })
      return enjoyment[0].enjoyment;
  };

  const getDifficultyScore = (name, assignment) => {
    const difficulty = AllData
      .filter((item) => {
        return item.name === name;
      })
      .filter((name) => {
        return name.assignment === assignment;
      })
      return difficulty[0].difficulty;
  };

  const createlinks = studentList.map((name) => (
   <ul className="Links">
   <li key={name}>
      <Link to={`/${name}`}>{name}</Link>
    </li>
   </ul> 
  ))

  const createRoute = studentList.map((name) => (
    <Route path={`/${name}`} key={name}>
      <StudentDashboard
         studentList={studentList}
         student={name}
         assignmentList={getAssignmentList}
         enjoymentScore={getEnjoymentScore}
         difficultyScore={getDifficultyScore}
      />
    </Route>
  ))

  return (
    
    <Router>
      <div>
      <div className="header"> ~ STUDENT DASHBOARD CONSOLE_</div>
        <ul className="Links">
          <Link to="/">Average</Link>
          {createlinks}
        </ul>
        <Switch>
          <Route path="/" exact> 
            <AverageDasboard 
              studentList={studentList}
              assignmentList={getAssignmentList}
              AllData={AllData}
            />
          </Route>
          <Route>
          {createRoute}
          </Route>
        </Switch>
      </div>
      <div>
        <div className="footer">&copy;Nils Mork - Winc - 2020</div>
        <div className="glitchLine-thin"></div>
        <div className="glitchLine-thick"></div>
        <div className="glitchLine-thinnest"></div>
      </div>
    </Router>
    
  );
}




export default App;
