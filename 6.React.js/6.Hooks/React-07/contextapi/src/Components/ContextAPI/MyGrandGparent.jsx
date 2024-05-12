import Mycontext from "./MyContext";
import MyGrandparent from "./MyGrandparent";

function MyGrandGparent() {
    return ( 
<Mycontext>
    <h1>This is Grand Grand Parent Component</h1>
    <MyGrandparent/>
</Mycontext>
     );
}

export default MyGrandGparent;