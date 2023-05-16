import inquirer from "inquirer";
const answer : {
    Sentence : string;
} = await inquirer.prompt([{
    type:"input",
    name:"Sentence",
    message:"Enter your sentence here to find the word count:"
}
])
const words = answer.Sentence.trim().split(' ');
console.log(`You sentence word count is ${words.length}`);
