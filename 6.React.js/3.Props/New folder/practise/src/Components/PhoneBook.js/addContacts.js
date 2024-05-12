import { useState } from "react";

function AddContacts({addContacts}) {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')

    const handler = ()=>{
        addContacts({name,phone,id:Date.now()})
        setName('')
        setPhone('')
    }
   

    return ( 
    <div>
        <h3 className="text-bg-primary p-2 text-center">Add Contacts</h3>
        <div className="form-group mt-2">
            <lable>Name</lable>
            <input type="text"
             placeholder="@example:jhone Doe"
              className="mt-2 form-control" value={name} onChange={(e)=>setName(e.target.value)} />   
        </div>
        <div className="form-group mt-2">
            <lable>Name</lable>
            <input type="Phone" placeholder="@example:+01-224-564" className="mt-2 form-control"
             value={phone} onChange={(e)=>setPhone(e.target.value)}/>   
        </div>
        <button className="btn btn-info mt-2 w-100" onClick={handler} >Add Conacts</button>
    </div>
     );
}

export default AddContacts;