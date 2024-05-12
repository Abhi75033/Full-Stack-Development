import { useState } from "react";
import AddContacts from "./addContacts";
import UpdateContact from "./updateContact";

function Main() {
    const [contacts,setContacts] = useState([])
    const [slected,setSlected]=useState(null)
    const addContacts=(data)=>{
        setContacts([...contacts,data])
    }

    const deleteConatct=(item)=>{
        const index = contacts.indexOf(item)
        console.log(index);
        setContacts(contacts.splice(index,1))
        if (contacts.length==0) {
            setContacts([])
        }
    }

    const updateContact=(data)=>{
        const index = contacts.findIndex((item)=>item.id==data.id)
        contacts[index] = data
        setContacts([...contacts])
    }

        return ( 
    <div>
        <h1 className="text-center text-bg-warning mt-2 pb-2 pt-2">PhoneBook</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th><th>Phone No.</th><th className="text-center">Operations</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((item)=>(
                       <tr key={item.id}>
                         <td>{item.name}</td>
                         <td>{item.phone}</td>
                         <td className="float-end">
                            <button className="btn btn-dark ms-2" onClick={()=>setSlected(item)}>edit</button>
                            <button className="btn btn-danger ms-2" onClick={()=>{deleteConatct(item)}}>X</button></td>
                       </tr>
                    ))
                }
            </tbody>
        </table>
        <div className="row">
             <div className="col">
                <AddContacts addContacts={addContacts}/>
             </div>
             <div className="col">
            {slected && <UpdateContact slected={slected} setSlected={setSlected} updateContact={updateContact}/>}
             </div>
        </div>
    </div> 
    );
}

export default Main;