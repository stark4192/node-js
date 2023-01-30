// const amount = 12
// if (amount < 10) {
//     console.log('small number')
// }
// else {
//     console.log("large number")
// }
// console.log('hey , its my first program')

// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world')
// },10000000)

// const manshu = 'manshu'
// const peter = 'peter'



console.log(module)
const names = require('./names')
const sayHi = require('./fun')
const data = require('./item')
require('./math')

console.log(names)

sayHi(names.manshu)
sayHi(names.peter)



