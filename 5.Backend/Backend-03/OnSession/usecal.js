const { add, sub, mul, div } = require("./cal");
const student = require("./ob");

console.log('Addition :'+add(33,32))
console.log('Substraction :'+sub(33,32))
console.log('Multiplication :'+mul(33,32))
console.log('Division :'+div(33,32))

student.output()