// // import { useState } from "react";

// // function Usecase1() {
// //     const [name,setName]=useState("Abhishek kumar")
// //     return ( <>
// //     <h1>Hello {name}</h1>

// //     <button onClick={()=>setName(name?"Abhishek kumar":"Skill Academy")}>Click Me</button>
// //     </> );
// // }

// // export default Usecase1;



import { useState } from "react";

function Usecase1() {
    const [name, setName] = useState("Abhishek Kumar");

    const handleClick = () => {
        if (name=="Abhishek Kumar") {
            setName("Skill Academy")
        }else{
            setName("Abhishek Kumar")
        }
    };

    return (
          <>
            <h1>Hello {name}</h1>
            <button onClick={handleClick}>Click Me</button>
            </>
        
    )
}

export default Usecase1


