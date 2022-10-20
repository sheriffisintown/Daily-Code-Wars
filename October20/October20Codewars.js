//Let's play! You have to return which player won! In case of a draw return Draw!
//Example
//"scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
    if (p1 == p2) {
        return 'Draw!'
    } else if (p1 === "rock" && p2 === "scissors") {
        return 'Player 1 won!'
    } else if (p1 === "scissors" && p2 === "paper") {
        return 'Player 1 won!'
    } else if (p1 === "paper" && p2 === "rock") {
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    }
};

//2. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Examples
// "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

const doubleChar = (str) => str.split("").map(c => c + c).join("");
