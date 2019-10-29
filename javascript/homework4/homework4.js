function createNewUser() {

    let firstName = prompt('Enter your name', '');
    let lastName = prompt('Enter your second name', '');

    return {
        firstName: firstName,
        lastName: lastName,
        getLogin() {
            return this.firstName.charAt(0).toLowerCase() + lastName.toLowerCase()
        }
    };
}

let user01 = createNewUser();
user01.getLogin();

console.log(user01.getLogin());

// Theoretical question:
// Explain in your own words what the object method is:
//     An object in JavaScript is like a class in object-orientated languages.
//     Objects in JavaScript are collections of key/value pairs.
//     The values can consist of properties and methods, and may contain all other JavaScript data types, such as strings, numbers, and Booleans.
//     Objects represent things, like cars for example.
//     The object is the car.Cars can have properties like color, the amount of cylinders in the vehicle, whether it’s automatic or manual, etc.
//     Cars can also accelerate, brake, etc. Generally we can represent this functionality as a ‘method’ of the object.