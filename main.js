import inquirer from "inquirer";
console.log("Wellcome to CLI-Saba-Guessing-Game");
const randomNumber = Math.floor(Math.random() * 100 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Pleaze Guess a number",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congretulations! you guessed a right number.");
}
else {
    console.log("Sorry! you guessed wrong number.");
}
;
