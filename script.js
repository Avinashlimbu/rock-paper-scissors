
//Selecting all buttons

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("#btn1, #btn2, #btn3");

function getHumanChoice () {
    buttons.forEach((button, i) => {
        button.addEventListener('click', function() {
            if (i === 0) {
                console.log("rock");
            } else if (i === 1) {
                console.log("paper");
            } else if (i === 2) {
                console.log("scissors");
            }
        })
    })
}


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
getComputerChoice();


function playRound(humanChoice, computerChoice) { 
        console.log("Human Choice = ", humanChoice);
        console.log("Computer Choice = ", computerChoice);
        
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)


/*




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) { 
        humanChoice = humanChoice.toLowerCase();
        console.log("Human Choice = ", humanChoice);
        console.log("Computer Choice = ", computerChoice);
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log ("You Win! rock beats scissors");
            humanScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "rock" && computerChoice === "paper"){
            console.log ("You Lost! paper beats rock");
            computerScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Draw no-one wins or loses");
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log ("You Lost! scissors beats paper");
            computerScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore); 
        }
        else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Draw no-one wins or loses");
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log ("You Win! paper beats rock");
            humanScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Draw no-one wins or loses");
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log ("You Win! scissors beats paper");
            humanScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log ("You Lost! rocks beats scissors");
            computerScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore); 
        }
        
    }    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice()
    //for (let i = 0; i < 4; i++){
    //    playRound(getHumanChoice(), getComputerChoice());
    //}

    playRound(humanSelection, computerSelection);
}

playGame ();


/*

//Step 1 and 2



//Step 6






















//Complete Step 5 


    function playRound(humanChoice, computerChoice) {
        let humanScore = 0;
        let computerScore = 0;
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice);
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log ("You Win! rock beats scissors");
            humanScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "rock" && computerChoice === "paper"){
            console.log ("You Lost! paper beats rock");
            computerScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Draw no-one wins or loses");
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log ("You Lost! scissors beats paper");
            computerScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore); 
        }
        else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Draw no-one wins or loses");
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log ("You Win! paper beats rock");
            humanScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Draw no-one wins or loses");
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log ("You Win! scissors beats paper");
            humanScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log ("You Lost! rocks beats scissors");
            computerScore++;
            console.log ("Human Score = ", humanScore);
            console.log ("Computer Score = ", computerScore); 

        }
    }    


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanSelection);
console.log(computerSelection);














//Testing if my function is working as it needs to be


function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let lowerCase = humanChoice.toLowerCase();
    console.log(lowerCase);
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log ("You Win! rock beats scissors");
        humanScore++;
        console.log ("Human Score = ", humanScore);
        console.log ("Computer Score = ", computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log ("You Lost! paper beats rock");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Draw no-one wins or loses");
    }
} 








function getHumanChoice () {
    return choice = prompt('Select "rock", "paper", or "scissors"');
}


function getComputerChoice (num) {
    if (num <= 0.3) {
        console.log("rock");
    }
    else if (num <= 0.7) {
        console.log("paper");
    }
    else if (num <= 1) {
        console.log("scissors");
    }
}

getComputerChoice(Math.random());




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame () {
    let humanScore = 0
    let computerScore = 0
    function playRound (humanChoice, computerChoice) {
        humanChoice.toLowerCase();
        if ((humanChoice === "rock" && computerChoice === "paper")) {
            console.log("You lose! paper beats rock");
            computerScore++;
        }
        else if ((humanChoice === "paper" && computerChoice === "paper")){
            console.log("Draw, no change in scores");
        }    
        else if ((humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win! scissors beats paper");
            humanScore++;
        } else {
            return "nothing happened";
        }
    }
}


 Psuedo Code


Step 6: Now I need to wat the endrite a logic to play the entire game

Game is suppose to be 5 rounds
playGame call playRound to play 5 rounds,
keeps track of the score and declares the winner 



I think coding from now on will be so much fun
this is because now, that i have my own setup and also because i am so excited about changing my lifestyle that 
this is not gonna be a dream anymore 

I wonder how it feels like to use other mechanical keyboard, specifically low profile onees!!














Step 5: logic to play single round
a function that takes humans/computers choices
plays a single round 
increments the rounde winner score
logs a winner announcement





For getHumanChoice

i think this simple
i just need to make a function that asks for prompting the user








For getComputerChoice

Need to create a function that randomly retuns 
"rock", "paper" or "scissors"

math random retunrs a random number
htat is >=0 and <=1
if the number is less thank or equal to 0.3 return "rock"
if the number is more than or equal to 0.4~0.7 return "paper"
if the number is more thank or equal to 0.8~1 retunr "scissors"

What is the problem here
1. I need to randomly show strings 
2. three different strings: "rock", "paper" or "scissors"
3. using Math random and if/else statement */
