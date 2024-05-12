const path = require('path')

const mypath = __dirname+'\\path.js'

console.log('BaseName',path.basename(mypath));
console.log("Extension:",path.extname(mypath));
console.log("is Absolute:",path.isAbsolute(mypath));
// console.log("dirName:",path.dirname(mypath));

const dname = '\\user'
const filenames = 'server.js'

console.log(path.join((dname,filenames)));

console.log(path.resolve('server.js'));