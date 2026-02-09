let humanScore = 0, computerScore = 0;
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[parseInt(Math.random() * 3)];
}
function getHumanChoice(val) {
    const choice = ["rock", "paper", "scissors"];
    let input = val;
    if (input) {
        input.toLowerCase();
    }
    if (choice.includes(input)) {
        return input;
    }
    else {
        console.log("Invalid input! Try again!");
        return undefined;
    }
}
// console.log("Running game!");
function playRound(humanChoice, computerChoice) {
    if (!humanChoice)
        return;
    computerDisplay.innerText = `Computer chose: ${computerChoice}`;
    humanDisplay.innerText = `Human chose: ${humanChoice}`;
    switch (computerChoice) {
        case "scissors":
            if (humanChoice === "rock") {
                results.innerText = "You win!";
                ++humanScore;
            }
            else if (humanChoice === "paper") {
                results.innerText = "You Lose!";
                ++computerScore;
            }
            else {
                results.innerText = "TIE!";
            }
            break;
        case "rock":
            if (humanChoice === "paper") {
                results.innerText = "You win!";
                ++humanScore;
            }
            else if (humanChoice === "scissors") {
                results.innerText = "You lose!";
                ++computerScore;
            }
            else {
                results.innerText = "TIE!";
            }
            break;
        case "paper":
            if (humanChoice === "scissors") {
                results.innerText = "You win!";
                ++humanScore;
            }
            else if (humanChoice === "rock") {
                results.innerText = "You lose!";
                ++computerScore;
            }
            else {
                results.innerText = "TIE!";
            }
            break;
    }
    scoreDisplay.innerText = `You [${humanScore}] VS Computer [${computerScore}]`;
}
function handleClick(val) {
    console.log(val);
    playRound(getHumanChoice(val), getComputerChoice());
}
const container = document.querySelector("#btns").children;
console.log(container);
Array.from(container).forEach(node => {
    console.log(node);
    node.addEventListener('click', function (e) {
        handleClick(e.target.value);
    });
});
const results = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");
const computerDisplay = document.querySelector("#computerDisplay");
const humanDisplay = document.querySelector("#humanDisplay");
if (humanScore >= 5) {
    console.log("Humans win!");
}
else {
    console.log("Computer wins!");
}
export {};
//# sourceMappingURL=demo.js.map