let username = prompt('What is your name?');

if (!username) {
    username = prompt('Enter a name, please.');
}

let age = prompt('How old are you?');

if (!age || isNaN(age)) {
    age = prompt('Enter the age, please.');
}

if (age < 18) {
    alert('You are not allowed to visit this website.');
} else if (age <= 22) {
    result = confirm('Are you sure you want to continue?');

    console.log(result);

    if (result) {
        alert(`Welcome, ${username}`);
    }
} else if (age > 22){
    alert(`Welcome, ${username}`)
}
//
// 1. Explain in your own words the difference between declaring variables via var, let and const.
// Var
// The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.
//     Example: var a =10;
// .Variable declarations are processed before the execution of the code.
//     .The scope of a JavaScript variable declared with var is its current execution context.
//     .The scope of a JavaScript variable declared outside the function is global.
//     Let
// The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.
//     Example: let a =10;
// .The let statement allows you to create a variable with the scope limited to the block on which it is used.
//     .It is similar to the variable we declare in other languages like Java, .NET, etc.
//
//     Const
// Const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.
//
// 2. Why is declaration of a variable via var considered a bad tone?
//     No error is thrown if you declare the same variable twice using var (conversely, both let and const will throw an error if a variable is declared twice)
// Variables declared with var are not block scoped (although they are function scoped), while with let and const they are.
//     This is important because what’s the point of block scoping if you’re not going to use it.
//     So using var in this context would require a situation in which a variable declared inside a function would need to be used in the global scope.
//     Another argument that has been made against the use of var is that JS Linters are now pointing out their use as bad practice.
//
