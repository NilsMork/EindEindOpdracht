import React from "react";
import '../App.css';

function Home({ AllData, removeDoubleNames }) {

const averageDifficulty = (assignment) => {
    const avarage = AllData
          .filter((item) => {
             return item.assignment === assignment;
          })
          .map((item) => item.difficulty)
          .reduce((currentTotal, rate) => {
             return rate + currentTotal;
          }, 0);
       return avarage / removeDoubleNames.length;
       
    };

    console.log("gemiddelde van W1D1-1", averageDifficulty("W1D1-1"));
    console.log("gemiddelde van W4D2-1", averageDifficulty("W4D2-1"));
    console.log("gemiddelde van W6D1-1", averageDifficulty("W6D1-1"));

    return (
    <h1>Home</h1>

    )
}
export default Home;