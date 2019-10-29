let num1 = +prompt("Enter your Number 1: ");
while (num1 === '' || isNaN(num1) === true || num1 === null) {
    alert("NOT CORRECT");
    num1 = prompt("Enter your Number again: ", num1);
    if (isNaN(num1) === false && num1 !== '' && num1 !== null) {
        break;
    }
}

let num2 = +prompt("Enter your Number 2: ");
while (num2 === '' || isNaN(num2) === true || num2 === null) {
    alert("NOT CORRECT");
    num2 = prompt("Enter your Number again: ", num2);
    if (isNaN(num2) === false && num2 !== '' && num2 !== null) {
        break;
    }
}
let operation = prompt("Enter the operation you want to do: +, -, /, *");

while (operation !== "+" || operation !== "-" || operation !== "/" || operation !== "*") {
    if (operation === "+" || operation === "-" || operation === "/" || operation === "*") {
        break;
    }
    alert("NOT CORRECT");
    operation = prompt("Enter the operation you want to do: +, -, /, *", operation);
}

function calcOperation(num1, num2) {
    if (operation === "+") {
        return num1 + num2;
    }
    if (operation === "-") {
        return num1 - num2;
    }
    if (operation === "/") {
        return num1 / num2;
    }
    if (operation === "*") {
        return num1 * num2;
    }
}

console.log(calcOperation(num1, num2));

// Theoretical question
// 1.Describe in your own words what the functions in programming are for.
    // Functions are "self contained" modules of code that accomplish a specific task.
    // Functions usually "take in" data, process it, and "return" a result.
    // Once a function is written, it can be used over and over and over again.
    // Functions can be "called" from the inside of other functions.
// 2.Describe in your own words what is the reason why arguments are defined in a function. Why are they passed when a function is called?
    // Function arguments also known as parameters are the variables that will receive the data sent by the calling program.
    // These arguments serve as input data to the function to carry out the specified task.