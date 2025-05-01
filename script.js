
//Step 3 (moving step 3 make sense beause this program needs to run before the computer executes)
function getHumanChoice () {
    return choice = prompt('Input "rock", "paper", or "scissors"');
}

//Step 1 and 2
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


//Step 4 and 5 added in step 6
//Step 6 

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


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanSelection);
console.log(computerSelection);






















//Testing if my function is working as it needs to be

/*
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


*/





/*function getHumanChoice () {
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


/* Psuedo Code


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
3. using Math random and if/else statement

*/