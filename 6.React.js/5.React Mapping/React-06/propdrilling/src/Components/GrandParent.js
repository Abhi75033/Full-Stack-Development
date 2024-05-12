import Parent from "./Parent";


function GrandParent() {
    return ( 
        <div>
            <h>Grand Parent</h>
            <Parent/>
        </div>

     );
}

export default GrandParent;