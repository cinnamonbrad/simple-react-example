import { useState } from 'react';

const Header = ({title, instruction}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="instructions">{instruction}</p>
    </div>
  );
};

const Choices = ({choices, onPlayerChoice}) => {

  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <button key={index} onClick = {() => onPlayerChoice(choice)}>{choice.icon} {choice.name}</button>
      ))}
    </div>
  );
};

const Result = ({result}) => {
  if (!result) {
    return <div id="result"><h2>No result yet!</h2></div>
  }
  return (
    <div id="result">
      <p>{result.player}</p>
      <p>{result.computer}</p>
      <h2>{result.outcome}</h2>
    </div>
  );
};


  
const RockPaperScissors = ({updateScores, onSetGameResult }) => {

  const choices = [
    { name: 'Rock', icon: '✊' },
    { name: 'Paper', icon: '✋' }, 
    { name: 'Scissors', icon: '✌️' },
  ];
  const [result, setResult] = useState(null);

  const [playerScore, setPlayerScore] = useState(0); 
  const [computerScore, setComputerScore] = useState(0); 
  const [winner, setWinner] = useState(null);
  const getComputerChoice = () => {

    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };
  


  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setWinner("Tie");
      return "It's a tie!";
    }
    if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      setPlayerScore(playerScore + 1); 
      updateScores("Player");
      setWinner("Player");
      onSetGameResult("You win!")
      return "You win!";
    }
      setComputerScore(computerScore + 1); 
      setWinner("Computer");
      updateScores("Computer"); 
      onSetGameResult("You lose!")
      return "Computer wins!";
  };
  const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(playerChoice.name, computerChoice);
    console.log(`Player chose: ${playerChoice.name}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    setResult({
      player: `Player chose: ${playerChoice.name}`,
      computer: `Computer chose: ${computerChoice}`,
      outcome: gameResult}
    );
    const onSetGameResult = (result) => {
      setResult(result); 
    };

    onSetGameResult(`Player chose: ${playerChoice.name}, Computer chose: ${computerChoice}, ${gameResult}`); 
 
    console.log(result);
  };
  

  return (
    <div>
      <Header 
          title = "Rock-Paper-Scissors Game"
          instruction = "Choose Rock, Paper, or Scissors to play against the computer!"
      />
      {/* <Scoreboard playerScore = {playerScore} computerScore = {computerScore} winner ={winner}/> */}
      <Choices choices = {choices} onPlayerChoice = {handlePlayerChoice}/>
      <Result result = {result}/>
    </div>
);
    
 }
 export default RockPaperScissors;



