import './App.css'
import Mole from "./components/mole";
import { useEffect, useState, useContext } from 'react';

import GameContext from "./context/GameContext";
import GameContextProvider from './context/GameContextProvider';
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 9) + 1;
}

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  useEffect(() => {
    const interval = setInterval(() => setRandomNumber(generateRandomNumber()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <GameContextProvider>
      <div className="container">
        <ScoreBoard />
        <div className="playground">
          <Mole active={randomNumber === 1} />
          <Mole active={randomNumber === 2} />
          <Mole active={randomNumber === 3} />
          <Mole active={randomNumber === 4} />
          <Mole active={randomNumber === 5} />
          <Mole active={randomNumber === 6} />
          <Mole active={randomNumber === 7} />
          <Mole active={randomNumber === 8} />
          <Mole active={randomNumber === 9} />
        </div>
      </div>
      <Buttons />
    </GameContextProvider>

  )
}

const ScoreBoard = () => {
  const { score } = useContext(GameContext);
  return <div className="score_board">
    Score : <span className="score">{score}</span>
  </div>
}

const Buttons = () => {
  const {reset} = useContext(GameContext);
  return <div>
    <button onClick={reset} >Reset Score</button>
  </div>
}
export default App
