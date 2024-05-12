import { useMyContxet } from "./MyContext";


function MyChild() {
    const {data,setData}=useMyContxet()
    return ( 
    <div>
        <h1>My Child Component {data}</h1>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
    </div>
     );
}

export default MyChild;