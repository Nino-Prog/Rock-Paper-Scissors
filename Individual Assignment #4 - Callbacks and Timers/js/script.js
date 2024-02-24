document.addEventListener("DOMContentLoaded", function () {
    const choices = document.querySelectorAll(".choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const outcomeText = document.getElementById("outcome-text");

    // Function to handle player's choice
    function playerChoice(playerSelection) {
        const computerSelection = getComputerChoice();
        displayComputerChoice(computerSelection);

        const winner = getWinner(playerSelection, computerSelection);
        updateOutcome(winner);
    }

    // Function to get computer's choice
    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3);
        const choices = ["rock", "paper", "scissors"];
        return choices[randomNumber];
    }

    // Function to display computer's choice
    function displayComputerChoice(computerSelection) {
        computerChoiceDisplay.src = `images/${computerSelection}.png`;
        computerChoiceDisplay.alt = computerSelection;
    }

    // Function to determine the winner
    function getWinner(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "tie";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            return "player";
        } else {
            return "computer";
        }
    }

    // Function to update the outcome text
    function updateOutcome(winner) {
        if (winner === "tie") {
            outcomeText.textContent = "It's a tie!";
        } else if (winner === "player") {
            outcomeText.textContent = "You win!";
        } else {
            outcomeText.textContent = "Computer wins!";
        }
    }

    // Event listeners for player's choices
    choices.forEach(choice => {
        choice.addEventListener("click", function () {
            playerChoice(this.id);
        });
    });

    // Reset button functionality
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", function () {
        outcomeText.textContent = "Waiting for your throw...";
        computerChoiceDisplay.src = "images/question-mark.png";
        computerChoiceDisplay.alt = "Question Mark";
    });
});
