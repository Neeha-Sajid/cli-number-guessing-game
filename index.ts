#! /usr/bin/env node
import inquirer from "inquirer";

//1.computer will generate a random number-DONE

//2.user input for guessing number-DONE

//3. compare user input with computer generated number and show result-DONE


const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("WELCOME TO GUESSING GAME");

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 0-5:",
    },
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("CONGRATULATIONS, YOU GUESSED THE RIGHT NUMBER")
}
else{
    console.log("YOU GUESSED WRONG NUMBER");
}