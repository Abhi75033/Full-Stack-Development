let response = fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
response.then((data)=>data.json())
.then((mydata)=>{
    console.log(mydata);
})