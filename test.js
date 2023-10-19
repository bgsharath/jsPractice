const obj1 = {a:"123",b:'123',c:'123'}
const obj2 = {a:"123",b:'123',c:'123',d:'123'}

// const res = obj2.map(([key,value])=>{
//     console.log(key)
//     // const res = Array(obj1).some(obj => Object.keys(obj).includes(item))
//     // if(!res){
//     //    return item
//     // }
// })
const newObj = {}
Object.entries(obj2).forEach(([key, value]) => {   
        const res = Array(obj1).some(obj => Object.keys(obj).includes(key))
        if(!res){
            newObj[key] = value
        }
})

console.log(newObj)


