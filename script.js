
//Selecting all buttons

let humanScore = 0;
let computerScore = 0;
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

function playRound(humanChoice, computerChoice) { 
    console.log("Human Choice = ", humanChoice);
    console.log("Computer Choice = ", computerChoice);

    //how the winner's are declared;
    if (humanChoice === computerChoice) {
        console.log ("It's a draw");
        const text = document.getElementById('newDiv');
        text.textContent = ("It's a draw");

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You Win! Human");
        const text = document.getElementById('newDiv');
        text.textContent = ("You Win! Human");
        humanScore++;
    } else {
        console.log("Computer Wins");
        const text = document.getElementById('newDiv');
        text.textContent = ("Computer Wins");
        computerScore++;
    }
    console.log (`Score - Human: ${humanScore} | Computer: ${computerScore}`)
    const resultMessage = document.getElementById('resultDiv');
    const message = (`Score - Human: ${humanScore} | Computer: ${computerScore}`);
    resultMessage.textContent = message;
}

//Get human choice
buttons.forEach((button, i) => {
    button.addEventListener('click', function() {
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
   
})


//div for how winner's are declared
const newDiv = document.createElement('div');
newDiv.id = "newDiv";
document.body.appendChild(newDiv);

//div for results withing how winners are declared
const resultDiv = document.createElement('div');
resultDiv.id = "resultDiv";
//resultDiv.textContent = "hello checking if this works"
document.body.appendChild(resultDiv);


