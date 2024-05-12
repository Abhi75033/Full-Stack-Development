import Parent from "./Parent";

function Grandparent({name}) {
    return (
         <h3>
            Grandparent Component
            <Parent name={name}/>
         </h3>
         );
}

export default Grandparent;