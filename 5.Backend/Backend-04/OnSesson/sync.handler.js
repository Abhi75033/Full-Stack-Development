const { log } = require('console');
const fs = require('fs')

console.log('proccess Started');

fs.writeFileSync('./file/temp.txt','Hello');
console.log('Data witen successfully');

let data = fs.readFileSync('./file/temp.txt')
console.log(data.toString(),);

data = fs.appendFileSync('/file/temp.txt','My name is Abhishek kumar')
console.log('Data Updated Successfully');

fs.unlinkSync('./file/temp.txt')
console.log('file deleted successfully');



