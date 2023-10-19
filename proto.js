this.age = 21
const User = function (name){
    this.name = name    
}

User.prototype.getName = function (){
    return this.name
}

const obj = new User('sharath')
console.log(obj)