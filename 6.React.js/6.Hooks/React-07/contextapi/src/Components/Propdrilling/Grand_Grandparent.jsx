import { useState } from "react";
import Grandparent from "./Grandparent";


function GrandGrandparent() {
    const [name,setName]=useState("Skill Academy");
    return (
         <h3>
            GrandGrandparent Component
            <Grandparent name={name} />
         </h3>
         );
}

export default GrandGrandparent;