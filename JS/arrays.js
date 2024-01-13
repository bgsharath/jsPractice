// The **slice()** method returns the selected elements in an array as a new array object. 
// It selects the elements starting at the given start argument, 
// and ends at the given optional end argument without including the last element. 
// If you omit the second argument then it selects till the end.
// Slice method won't mutate the original array but it returns the subset as a new array.

let arrr1 = [3,6,9,5,1]

var res1 = arrr1.slice(3)
console.log(res1)
var res2 = arrr1.slice(2,3)
console.log(res2)


// The **splice()** method is used either adds/removes items to/from an array, 
// and then returns the removed item. 
// The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. 
// Each additional argument is added to the array.
// **Note:** Splice method modifies the original array and returns the deleted array.
let arrr2 = [1,2,3,4,5,6,7,8,9]
var res3 = arrr2.splice(3)
console.log(res3)
let arrr3 = [1,2,3,4,5,6,7,8,9]
var res4 = arrr3.splice(3,2,'hi')
console.log(res4)
console.log(arrr3)

let user = ["sharth", "bg", 3 , 34, true]

user.shift() // will delete from 0th bottom
console.log(user)

user.unshift("sharath") // adds element to bottom 0 th
console.log(user)

console.log(Array.from("sharath"))
