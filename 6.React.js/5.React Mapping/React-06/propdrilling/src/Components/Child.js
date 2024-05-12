import { useMyContext } from "./Mycontext";

function GrandParent() {
    const {data,setData}=useMyContext();
    return ( 
        <div>
            <h>Child : {data}</h>
        </div>

     );
}