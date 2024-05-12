const ftchdata= async ()=>{
    try {
      const resp =  await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      const text = await resp.json()
      console.log(text);
      document.getElementById('body').innerHTML=text[0].body
    } catch (error) {
        console.log(error);
    }
}
ftchdata()