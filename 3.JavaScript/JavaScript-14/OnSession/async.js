const fetchdata= async()=>{
    const baseurl= 'https://jsonplaceholder.typicode.com/posts/1';
    try {
        const resp = await fetch(baseurl);
        const json= await resp.json();
       console.log(json)
    } catch (error) {
       console.log(error) 
    }
}

fetchdata()