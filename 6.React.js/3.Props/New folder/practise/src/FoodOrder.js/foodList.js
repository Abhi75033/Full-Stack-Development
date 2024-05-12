import { useState } from "react";
import OrderdList from "./Orderd_foodList";

function FoodList() {
    const [total,setTotal]=useState([])
    const [name,setName]=useState('Pay')
    const [count,setCount]=useState(0)
    const [food,setfood]=useState([])
    const [paid,setPaid]=useState(false)
    const addFood=(data)=>{
        console.log(data)
        setfood([...food,data])
        setTotal([...total,data.price])
        setCount(count+1)
    }

    const deleteItem=(item)=>{
       if  (food.length > 0) {
         const index = food.indexOf(item)
         food.splice(index,1)
         setfood([...food])
 
         const index1 = total.indexOf(item.price)
         total.splice(index1,1)
         setTotal([...total])
       }else{
              setfood([])
              setTotal([])
       }
    }

    const hanler=()=>{
        if (paid===false) {
            setPaid(true)
        }else{
            setPaid(false)
            setName('Paid')
        }
    }


    
    return (
     <div>
        
        <h1 className="text-bg-warning text-center p-2 mt-2 ">FOOD ORDERING SYSTEM</h1>
        <OrderdList addFood={addFood}/>
        <h1 className="text-bg-primary text-center p-2 mt-2">Food List</h1>
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Operations</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        food.map((item)=>(
                            <tr key={food.indexOf(item)}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-danger w-100" 
                                    onClick={()=>deleteItem(item)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <thead>
                {
                  food.length &&   <tr >
                    <th></th>
                    <th>Total items</th>
                    
                    
                    <th>
                        Total: ₹{
                         total.length===0?0:total.reduce((a,b)=>a+b)
                        }
                        
                        </th>
                        <th><button  className="ms-2 btn btn-success w-100" onClick={hanler}>
                            {name}</button></th>
                </tr>
                }
                </thead>
            </table>
        </div>
        
    </div> 
    );
}

export default FoodList;