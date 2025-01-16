import { useState } from 'react'
import './App.css';
import RockPaperScissors from './games/RockPaperScissors';
import HigherOrLower from './games/HigherOrLower';

const GameSelector = ( {onGameSelect}) => {

  return (
  <div>
    <h2> Select a Game</h2>
    <button onClick ={() => onGameSelect("RockPaperScissors")}> Rock Paper Scissors</button>
    <button onClick ={() => onGameSelect("HigherOrLower")}> Higher or Lower Guessing Game</button>
  </div>
  );
}



  
const App = () => {
  const [selectedGame, setSelectedGame] = useState(null); 
  console.log(selectedGame);
  const renderGame = () => {
    switch (selectedGame) {
      case "RockPaperScissors":
        return < RockPaperScissors/>
      case "HigherOrLower":
        return <HigherOrLower/>
      default:
        return <h2>othergame</h2>
  }
  };
 



  return (
    <div>
      <h1> Mini Game Hub</h1>
      <hr />
      <GameSelector onGameSelect = {setSelectedGame}/>
      {renderGame()}
    </div>
  
);
    
 }
 export default App;



