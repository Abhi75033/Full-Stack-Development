const fs = require('fs')

console.log('file crate started');


    fs.writeFile('./file/hello.txt','hello',(err)=>{
        if (err) {
            throw err
        }

        console.log('file created');
    })






console.log('file creating stopped');
