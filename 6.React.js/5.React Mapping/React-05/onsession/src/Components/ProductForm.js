import { useState } from "react";

function ProductForm() {
    const [products,setProducts]=useState({name:'',Price:'',Category:''})
    const handleSubmit =(e)=>{
        e.prventDefault()
        products.id = Date.now()
    }
    return (
         <div>
            <h2 className="text-bg-secondary text-center p-2">Product Form</h2>

            <form >
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="Enter Product Name" 
                    className="form-control"
                     onChange={(e)=>({...products,})} />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="text" placeholder="Enter Product Name" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input type="text" placeholder="Enter Product Name" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100 p-2">Add Product</button>
            </form>
    </div> 
    );
}

export default ProductForm;