// import Mycontext from "./MyContext";
import { useMyContxet } from "./MyContext";
import Myparent from "./Myparent";

function MyGrandparent() {
    const {data,setData}=useMyContxet()
    return ( 
    <div>
        <h1>My Grand Parent Component {data}</h1>
        <Myparent/>
    </div>
     );
}

export default MyGrandparent;