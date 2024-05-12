import { useState } from "react";

function UpdateContact({slected,setSlected,updateContact}) {
    const [name,setName]=useState(slected.name)
    const [phone,setPhone]=useState(slected.phone)

    const handler=()=>{
        updateContact({id:slected.id,name,phone})
        setSlected(null)
    }
    return ( 
    <div>
        <h3 className="text-bg-primary p-2 text-center">Update Contacts</h3>
        <div className="form-group mt-2">
            <lable>Name</lable>
            <input type="text" placeholder="@example:jhone Doe" 
            className="mt-2 form-control" value={name} onChange={(e)=>setName(e.target.value)} />   
        </div>
        <div className="form-group mt-2">
            <lable>Name</lable>
            <input type="text" placeholder="@example:jhone Doe" 
            className="mt-2 form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>   
        </div>
        <button className="btn btn-info mt-2 w-50 ms-0" onClick={handler}>Update Contacts</button>
        <button onClick={()=>setSlected(null)} className="btn btn-info mt-2 float-end w-50">Cancel</button>
    </div>
     );
}

export default UpdateContact;