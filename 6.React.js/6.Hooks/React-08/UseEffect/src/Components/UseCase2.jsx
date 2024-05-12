import { useEffect, useState } from "react";

function UseCase2() {
    const [user,setUser]=useState([])
    const fetchData= async()=>{
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await resp.json()
            setUser(json)
        } catch (error) {
            console.log(`Error Occured ${error}`);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
     <div>
        <h1  className="text-center">User Data</h1>
        <table className="table tbale-borderd">
            <thead>
                <tr><th>Name</th><th>E-mail</th><th>Username</th></tr>
            </thead>
            <tbody>
                {
                    user.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div> 
    );
}

export default UseCase2;