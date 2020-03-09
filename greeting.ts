//https://www.typescriptlang.org/docs/tutorial.html

//tsc "filename.ts" - to compile the file to js

//node "filename.js" - to run the js file after


class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "Smith");

console.log(greeter(user));