import { useState } from "react";

function FetchData() {
    const [users,setUsers]=useState([])
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
    }



    const tbody = []
    users.forEach(user => {
        tbody.push(
            <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        )
    });
    return ( 
    <>
    <button onClick={getData}>Get Data</button>
    <table>
        <thead>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
        </thead>
        <tbody>
            {tbody}
        </tbody>
    </table>
    </> 
    );
}

export default FetchData;