import ProductForm from "./ProductForm";
import ProductDetails from "./ProductDetails";

function ProductList() {
    return (
         <div className="container mt-2">
            <h1 className="text-bg-primary text-center p-2 ">Product List</h1>

            <div className="row">
                <div className="col mt-2 ">
                <ProductForm/>
                </div>
                <div className="col mt-2">
                <ProductDetails/>
                </div>

            </div>
    </div> 
    );
}

export default ProductList;