function getCPUChoice() {
    let numberOfChoices = 3;
    let randomInteger = Math.floor(Math.random() * numberOfChoices);

    if (randomInteger === 0) { 
        return 'Toro';
    } else if (randomInteger === 1) {
        return 'Garfield';
    } else {
        return 'Rat';
    }
}

function getHumanChoice() { 
    let value = prompt("Type 'Toro', 'Garfield', or 'rat'");
    return value;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, CPUChoice) {
    if (humanChoice === CPUChoice) {
        return "It's a tie!"
    }

    if (humanChoice === 'Toro') {
        if (CPUChoice === 'Rat') {
            return 'You win! Toro eats rat!';
        } else {
            return 'You lose! Garfield beats Toro!'
        }
    }

    if (humanChoice === 'Rat') {
        if (CPUChoice === 'Garfield') {
            return 'You win! Rat beats Garfield!'
        } else {
            return 'You lose! Garfield beats Toro!'
        }
    }

    if (humanChoice === 'Garfield') {
        if (CPUChoice === 'Toro') {
            return 'You win! Garfield beats Toro!'
        } else {
            return 'You lose! Rat beats Garfield!'
        }
    }

    return "Invalid input. Please choose 'Toro', 'Rat', or 'Garfield'"
}

let CPUChoice = getCPUChoice();
let humanChoice = getHumanChoice();
let roundResult = playRound(humanChoice, CPUChoice);


