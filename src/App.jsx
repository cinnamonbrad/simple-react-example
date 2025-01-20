import { useState } from 'react'
import './App.css';
import RockPaperScissors from './games/RockPaperScissors';
import HigherOrLower from './games/HigherOrLower';
import GameSelector from './components/GameSelector';
import Scoreboard from './components/Scoreboard';
import Result from './components/Results'; 
import Hangman from './games/Hangman';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null); 
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0); 
  const [gameResult, setGameResult] = useState(null); 
  const [winner, setWinner] = useState(null); 
 
const updateScores = (winner) =>
  {
    if (winner === "Player"){   
    setPlayerScore (playerScore +1);
    setGameResult("You guessed correct"); 
    }
    else if (winner === "Computer"){
    setComputerScore(computerScore +1); 
    setGameResult("You guessed incorrect"); 
    }
  }

const reset = () => {
  setPlayerScore(0); 
  setComputerScore(0);
  setGameResult(null); 
}
  return (
    <div>
      <h1> Mini Game Hub</h1>
      <Scoreboard playerScore={playerScore} winner = {winner} computerScore={computerScore}/>      
      <Result result = {gameResult}/>
      <hr />
      <GameSelector onGameSelect = {setSelectedGame}/>
      {/* {renderGame()} */}
      {selectedGame === "RockPaperScissors" && <RockPaperScissors updateScores = {updateScores} onSetGameResult = {setGameResult}/>}
      {selectedGame === "HigherOrLower" && <HigherOrLower updateScores={updateScores} onSetGameResult = {setGameResult}/>}
      {selectedGame === "Hangman" && <Hangman updateScores={updateScores} onSetGameResult = {setGameResult}/>}
      <button onClick={reset} id = "resetbtn">Reset</button>
    </div>
  ); 
 }
 export default App;



