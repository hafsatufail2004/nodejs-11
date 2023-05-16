
import PromptSync from "prompt-sync";
let maxNum = 10;
let randomNum = Math.floor(Math.random() * maxNum);
let status = false;
while(!status){
    let prompt = PromptSync();
let userInput = prompt(`Guess any number between 1 and ` + maxNum+ " ")  ;
 let userInput0 = Number(userInput)
if(userInput0 === randomNum){
    status = true
console.log(`You won!The answer is ${randomNum}`);
}else if(userInput0 > randomNum){
console.log(`Your guess is so high`);
}else{
    console.log(`Your guess is so low`);
}
}