import { useState } from 'react';
import foods from '../Asset/Food.json'

function OrderdList({addFood}) {
    const [count , setCount]=useState(0)
    const handler=(item)=>{
        addFood(item)
        
    }
    return ( 
        <div>
            <div className='row'>
                {
                    
                    foods.map(item=>(
                        
                        <div key={item.name} className='col mt-2 text-center'>
                            <img src={item.imageUrl} height='150' width='150'/>
                            <h3 className='text-center'>{item.name}</h3>
                            <h4 className='text-center'>₹{item.price}</h4>
                            <button onClick={()=>handler(item)} className='btn btn-primary'>Add {item.name}</button>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default OrderdList;