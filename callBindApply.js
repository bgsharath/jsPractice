// The call() method invokes a function with a given `this` value and arguments provided one by one
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function greet(greet1,...arg){
    console.log(`${greet1} ${this.firstName} ${this.lastName} ${arg}`)
}

greet.call(employee1,'hello')

// Apply: Invokes the function with a given `this` value and allows you to pass in arguments as an array

greet.apply(employee2,['hello'])

// bind: returns a new function, allowing you to pass any number of arguments

var bindGreet = greet.bind(employee1)
console.log(bindGreet('hello from bind','second','third'))