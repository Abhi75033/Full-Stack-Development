

const fetchdata=()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q={mumbai}&appid={a7092acc2e11fcf3216b34eb9d42eea3}')
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

fetchdata()
