import Products from "../Asset/Products.json";
function Usecase3() {
  return (
    <>
    <h1 className="text-center text-bg-warning">Featured Products</h1>
      <div className="row ">
        {Products.map((item) => (
          <div className="col container-fluid">
            <div className="card">
              <img src={item.ImageUrl} class="card-img-top" alt={item.name} width='300' height='200' />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                 ${item.Price}
                </p>
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Usecase3;
