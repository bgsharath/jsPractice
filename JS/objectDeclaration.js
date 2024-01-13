
// possible ways to create objects in JavaScript

let obj = {name:'sharath'} // literal
    console.log(obj)

var obj1 = new Object();  // Object constructor:
    obj1.name = 'bg';
    console.log(obj1)

var obj2 = Object.create(null)
    obj2.name = 'hh'
    console.log(obj2)

                                
function objFunc(name){ // Function constructor
    this.name = name
    this.age = 21
}
console.log(new objFunc('sharath'))


function Person(){} // Function constructor with prototype
Person.prototype.name = 'sharath';
var objPerson = new Person()
console.log(objPerson.name)

// ES6 Class syntax

class funcClass {
    constructor(name){
        this.name = name;
    }
}

var obj3 = new funcClass('sharath')
console.log(obj3)

// A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

var obj4 = new (function(){
    this.name = 'sh'
})()
console.log(obj4)