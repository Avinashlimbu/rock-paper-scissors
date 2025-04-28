let humanScore = 0
let computerScore = 0


function getHumanChoice () {
    return choice = prompt('Select "rock", "paper", or "scissors"');
}

getHumanChoice();


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

console.log(getComputerChoice(Math.random()));



function playRound (humanChoice, computerChoice) {
    
}




/* Psuedo Code



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