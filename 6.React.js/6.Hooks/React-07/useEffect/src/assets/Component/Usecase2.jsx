import { useEffect, useState } from "react";

function Usecase2() {
    const [users, setUsers] = useState([]);
    const fetchUsers=async()=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            setUsers(users);
        } catch (error) {
           console.log('Error: ',error); 
        }
    }
    useEffect(()=>{
        fetchUsers();
    
    },[])
    return (
        <>
        <h3>User data</h3>
        <table className="table table-borderd">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
                </tbody>
        </table>
        </>
    );
}

export default Usecase2;