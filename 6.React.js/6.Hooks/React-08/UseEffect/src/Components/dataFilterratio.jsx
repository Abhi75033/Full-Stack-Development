import { useEffect, useState } from "react";

function Fiteration() {
    const array =[
        {key:1,Name:'Abhishek',type:'regular'},
        {key:2,Name:'Bob',type:'silver'},
        {key:3,Name:'Catty',type:'gold'},
        {key:4,Name:'Abhay',type:'silver'},
        {key:5,Name:'Anjali',type:'gold'},
        {key:6,Name:'Ajit',type:'regular'},
    ]
    const [filterd,setFilterd]=useState([])
    const [input,setInput]=useState('')
    useEffect(()=>{
        setFilterd(array.map((item)=>(item.type.includes(input))))
    })
    return (
    <>
    <input type="text" placeholder="Enter your type " onChange={(e)=>setInput(e.target.value)}/>
    <table>
        <thead>
            <tr><th>Key</th><th>Name</th><th>Type</th></tr>
        </thead>
        <tbody>
            {
                <tr key={}>

                </tr>
            }
        </tbody>
    </table>
    </> 
    )
}

export default Fiteration;