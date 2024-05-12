
const mypromise = new Promise((resovle,reject)=>{

    if(18>10){
        resovle('Success')
    }else{
        reject('Error')
    }
})

//

// mypromise.then((res)=>{
//     return 'resolve'+" "+ res
// }).then((result)=>{
//     return result
// }).then((r1)=>{
// console.log(r1)
// }).catch((err)=>{
//     console.log(err);
// })


async function check(){
    try {
        const resp = await mypromise;
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

check()