#!user/bin/env node
import inquirer from "inquirer";
import add from "./ope.js";
import { subtract } from "./ope.js";
import { divide } from "./ope.js";
import { multiply } from "./ope.js";
function calculate() {
    let question = inquirer.prompt([
        {
            type: "list",
            name: "operators",
            message: "Select an operation:",
            choices: ["+", "-", "*", "/"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first number:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number:"
        },
    ])
        .then((result) => {
        if (result.operators === "+") {
            let addition = add(result.num1, result.num2);
            console.log(`The result is: ${addition}`);
        }
        else if (result.operators === "-") {
            let subt = subtract(result.num1, result.num2);
            console.log(`The result is:${subt}`);
        }
        else if (result.operators === "*") {
            let multi = multiply(result.num1, result.num2);
            console.log(`The result is: ${multi}`);
        }
        else if (result.operators === "/") {
            let div = divide(result.num1, result.num2);
            console.log(`The result is :${div}`);
        }
    });
    async function startAgain() {
        do {
            await calculate();
            var again = await inquirer.prompt({
                type: "input",
                name: "restart",
                message: "Would you like to continue?"
            });
        } while (again.restart === "Y" || again.restart === "y" ||
            again.restart === "YES" || again.restart === "yes");
    }
    startAgain();
}
//calculate();
