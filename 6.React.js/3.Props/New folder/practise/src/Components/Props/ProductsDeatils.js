function ProductDetails({slected}) {
    return (
     <div>
        <h2>Products Details</h2><hr/>
        <h3>Name: {slected.name}</h3>
        <h3>Price: {slected.Price}</h3>
        <img src={slected.ImageUrl} height='50' width='50'/>
    </div> 
    );
}

export default ProductDetails;