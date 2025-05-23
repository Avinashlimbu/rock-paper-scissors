
//Selecting all buttons

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;
const buttons = document.querySelectorAll("#btn1, #btn2, #btn3");

//Get Computer choice

function getComputerChoice () {
    let num = Math.random();
    if (num <= 0.3) {
        return "rock";
    }
    else if (num <= 0.7) {
        return "paper";
    }
    else if (num <= 1) {
        return "scissors";
    }
}


//Play the rock scissors function
function playGame () {
function playRound(humanChoice, computerChoice) { 
    if (roundCount >= maxRounds) {
        return;
    }
    
    console.log("Human Choice = ", humanChoice);
    console.log("Computer Choice = ", computerChoice);
    const choiceText = document.getElementById('choiceDiv');
    choiceText.textContent = (`Human Choice --  ${humanChoice} || Computer Choice --  ${computerChoice}`)
            
    const text = document.getElementById('newDiv');

    //how the winner's are declared;
    if (humanChoice === computerChoice) {
        console.log ("It's a draw");
        text.textContent = ("It's a draw");

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You Win! Human");
        text.textContent = ("You Win! Human");
        humanScore++;
    } else {
        console.log("Computer Wins");
        text.textContent = ("Computer Wins");
        computerScore++;
    }

    roundCount ++;
    console.log (`Score - Human: ${humanScore} | Computer: ${computerScore}`)
    const resultMessage = document.getElementById('resultDiv');
    resultMessage.textContent = (`Score - Human: ${humanScore} | Computer: ${computerScore}`);
    
    //Declare winnter if max round is reached
    if (roundCount === maxRounds) {
        if (humanScore > computerChoice) {
            alert(" Human Wins the game!");
        } else if (computerScore > humanScore) {
            alert("Computer Wins the game!");
         } else {
            alert ("it is a tie");
         }
        }
    }

//Get human choice

buttons.forEach((button, i) => {
    button.addEventListener('click', function() {
        if(roundCount >= maxRounds) return;
        let humanChoice;
        if (i === 0) {
                humanChoice = "rock";
            } else if (i === 1) {
                 humanChoice = "paper";
            } else if (i === 2) {
                 humanChoice = "scissors";
            }
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }); 
    });
    
}    
playGame()

//div for what is seleceted
const choiceDiv = document.createElement('div');
choiceDiv.id = "choiceDiv";
document.body.appendChild(choiceDiv);


//div for how winner's are declared
const newDiv = document.createElement('div');
newDiv.id = "newDiv";
document.body.appendChild(newDiv);

//div for results withing how winners are declared
const resultDiv = document.createElement('div');
resultDiv.id = "resultDiv";
//resultDiv.textContent = "hello checking if this works"
document.body.appendChild(resultDiv);


// if the score of the game comes to be 5
//then
// a = computer wins
//b = human wins should be declared