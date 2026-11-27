
// get computer choice

let getComputerChoice = () => {
    let number = Math.floor((Math.random() *3 ) + 1);

    if(number === 1){
        return "rock"
    } else if(number === 2){
        return "paper"
    } else{
        return "scissors";
    }
}


// get human choice

let getHumanChoice = () => {
    let choice = prompt("Enter your choice", "");
    return choice.toLowerCase();
}

let humanSCore = 0;
let computerScore = 0;



// Determine who win function

let playRound = (humanChoice, computerChoice) => {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
     if(
        (computerSelection === "rock" && humanSelection === "scissors") || 
        (computerSelection === "paper" && humanSelection === "rock") || 
        (computerSelection === "scissors" && humanSelection === "paper"))
    {
        console.log(`You loose! ${computerSelection} beats ${humanSelection}`)
        computerScore += 1;
        console.log(`computer score is: ${computerScore}  human score is: ${humanSCore}`);

    } else if(
        (humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "paper" && computerSelection === "rock") || 
        (humanSelection === "scissors" && computerSelection === "paper"))
    {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`)
        humanSCore +=1;
        console.log(`computer score is: ${computerScore}  human score is: ${humanSCore}`);
    } else{
        console.log(`it is a draw! computer score is: ${computerScore}  human score is: ${humanSCore}`)
    }
}

playRound(getHumanChoice, getComputerChoice);