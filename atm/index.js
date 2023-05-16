import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly enter your ID."
    },
    {
        type: "number",
        name: "userPIN",
        message: "Kindly enter your Pin."
    },
    {
        type: "list",
        name: "accounttype",
        message: "Kindly Select Your Account Type:",
        choices: ["Current", "Saving"]
    },
    {
        type: "list",
        name: "transaction",
        message: "Kindly Select Your Transaction Type:",
        choices: ["Fast Cash", "Withdraw"],
        when(answer) {
            return answer.accounttype;
        }
    },
    {
        type: "list",
        name: "amount",
        message: "Kindly Select Account:",
        choices: [1000, 2000, 3000, 5000, 10000],
        when(answer) {
            return answer.transaction == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Select Amount:",
        when(answer) {
            return answer.transaction == "Withdraw";
        }
    },
]);
if (answer.userID && answer.userPIN) {
    const balance = 50000;
    console.log("Previous Balance:", balance);
    const enterAmount = answer.amount;
    if (balance >= enterAmount) {
        const remain = balance - enterAmount;
        console.log(`Your Remaining Bank Balance Is:`, remain);
    }
    else {
        console.log("Insufficient Bank Balance");
    }
}
