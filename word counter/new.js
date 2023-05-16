import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "input",
        name: "Sentence",
        message: "Enter your sentence here to find the word count:"
    }
]);
const words = answer.Sentence.trim().split(' ');
console.log(`You word count is ${words.length}`);
