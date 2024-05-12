import GrandParent from "./GrandParent";
import MycontextProvider from "./Mycontext";


function GrandGparent() {
    return ( 
        <MycontextProvider>
            <div>
                <h>Grand Parent</h>
            </div>
            <GrandParent/>
        </MycontextProvider>
     );
}

export default GrandGparent;