function createNewUser (name,surname,birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday ;
    this.getAge = function() {
        let today = new Date();
        let birthday = new Date(this.birthday.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
        let age = today.getFullYear() - birthday.getFullYear();
        let m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate()))
        {
            age--;
        }
        return age;
    };

    this.getPassword = function () {
        return (this.name.charAt(0).toUpperCase() + this.surname.toLowerCase() + this.birthday.substr(6));
    };



}
let newUser = new createNewUser(prompt ('What is your name?', ''),prompt ('What is your surname?', ''), prompt ('What is your date of birth?', ''));


console.log(newUser);
console.log(newUser.getAge());
console.log(newUser.getPassword());

// Theoretical question.
//  Describe in your own words what shielding is and what it is for in programming languages
//   Shielding the programmer from lower-level details is the intent of the abstraction movement
//   that supplanted the extensibility movement.