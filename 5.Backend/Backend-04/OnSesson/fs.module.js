const fs = require('fs')

const createFile =(filename,data)=>{
    fs.writeFile(filename,data,(err)=>{
        if(err){
            throw err
        }
    })

    console.log('File created successfully');
}

function readMyFile(filename)
{fs.readFile(filename,(err,data)=>{
    if (err) {
        throw err
    
    }

    console.log(data.toString())
})
}

readMyFile('./file/ak.txt')
createFile('./file/ak.txt','My name is Abhishek kumar, i am FSD here')

const updatefile = (filename,data)=>{
    fs.appendFile(filename,data,(err)=>{
        if(err){
            throw err
        }
    })

    console.log('File updated successfully');
}

updatefile('./file/ak.txt','. I am a fresher in FSD but i am lerning evry single concept of FSD slowly but effciently' )

const dletefile = (filename)=>{
    fs.unlink(filename,(err)=>{
        if(err){
            throw err
        }
    })

    console.log('File deleted successfully');
}

//dletefile('./file/ak.txt')

const deleteDir = (dirname)=>{
    fs.rmdir(dirname,(err)=>{
        if (err) {
            throw err
        }
    })

    console.log('Directory deleted successfully');
}

deleteDir('./files')


