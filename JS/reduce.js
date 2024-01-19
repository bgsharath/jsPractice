const arr = [4,3,6,7]

const sum = arr.reduce((acc,curr)=>{
    console.log(acc,curr)
    return acc+curr
},8) // 8 is initial value

console.log(sum)

// output
// 8 4
// 12 3
// 15 6
// 21 7
// 28