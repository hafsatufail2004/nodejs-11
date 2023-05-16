import inquirer from "inquirer";
let convert = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.24,
        "PKR": 346.62,
        "GBP": 1
    },
    "USD": {
        "PKR": 279.06,
        "GBP": 0.81,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select Your Currency:",
        choices: ["PKR", "GBP", "USD"]
    },
    {
        type: "list",
        name: "to",
        message: "Select Your Convertion Currency: ",
        choices: ["PKR", "GBP", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: "Kindly Enter Your Amount",
    }
]);
const { from, to, amount } = answer;
if (from && to) {
    let result = convert[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} resuted in ${result}`);
}
else {
    console.log("Invalid Inputs");
}
