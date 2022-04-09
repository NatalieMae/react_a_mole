import React, {useState} from 'react';
// import Mole from "./Mole.js";
import MoleContainer from './MoleContainer';
// import EmptySpot from "./EmptySpot.js";
import './App.css';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 11; i++) {
      hills.push(
        <MoleContainer
        key = {i}
        setScore = {setScore}
        score = {score} />
      )
    }
  const displayMoleHill = () => {
    if (MoleContainer.Mole = 'true')  
      return (
        <div>
          {hills}
        </div>
      )
    }
      return (
    <div className= 'App'>
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
      {displayMoleHill()}
      <MoleContainer/>
    </div>
  )
} }

export default App;
