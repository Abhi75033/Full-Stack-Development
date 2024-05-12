import Child from "./Child";

function Parent({name}) {
    return (
         <h3>
            parent Component
            <Child name={name}/>
         </h3>
         );
}

export default Parent;