import { useState } from 'react';
import Product from '../../Asset/Products.json'
import ProductDetails from './ProductsDeatils';
function Products() {
    const [slected,setSlected]=useState(null)

    const handler=(item)=>{
        setSlected(item)
    }
    return (
    <div className='pb-5'>
        <h3>My Products</h3>
        <table>
            <thead>
                <tr>
                {
                        Product.map((item)=>(
                            <td onClick={()=>handler(item)}>
                            <img src={item.ImageUrl} height='250' width='250' alt={item.name}/>
                            </td>
                        ))
                    }

                </tr>
            </thead>
        </table>
        {
            slected && <ProductDetails slected={slected}/>
        }
     </div>
     );
}

export default Products;