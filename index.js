#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t kindly check My work");
//const answer is a variable used to creat an object
//await is the t.s  command that will not allow compiller to mover further untill user provide input
const ans = await inquirer.prompt([
    { message: "enter your name", type: "string", name: "userName" },
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    { message: "select option",
        type: "list",
        name: "operator",
        choices: ["add", "subtract", "multiply", "divide"] },
]);
//airthmatic operator and nested if loop used here 
if (ans.operator == "add") {
    console.log(ans.firstNumber + `+` + ans.secondNumber + `=` +
        ans.firstNumber + ans.secondNumber);
}
else if (ans.operator == "subtract") {
    console.log(ans.firstNumber + `-` + ans.secondNumber + `=`);
    console.log(ans.firstNumber - ans.secondNumber);
}
else if (ans.operator == "multiply") {
    console.log(ans.firstNumber + ` * ` + ans.secondNumber + `=` +
        ans.firstNumber * ans.secondNumber);
}
else if (ans.operator == "divide") {
    console.log(ans.firstNumber + ` / ` + ans.secondNumber + `=` +
        ans.firstNumber / ans.secondNumber);
}
