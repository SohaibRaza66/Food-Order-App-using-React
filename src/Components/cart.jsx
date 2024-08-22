import React from "react";

const cart = ({ cart, remove, price , minus , add , setQuantity , quantity}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {cart.length > 0 ? 
         cart.map((item , index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt="" />
                <div className="card-title text-center mt-4">
                  <h3>Name: {item.title}</h3>
                  <p>Price: $ {item.price * item.quantity}</p>
                </div>
                <div className="card-body">
                <div className="col-md-12">
                    <div className="row tw-place-content-center">
                      <button
                        className="tw-bg-db-900 tw-text-white p-3 rounded-2 w-auto"
                        onClick={() => add(item)}
                      >
                        {" "}
                        +{" "}
                      </button>
                      <p className="text-center w-auto">Quantity: {item.quantity}</p>
                      <button
                        className="tw-bg-db-900 tw-text-white p-3 rounded-2 w-auto"
                        onClick={() => minus(item)}
                      >
                        {" "}
                        - {" "}
                      </button>
                    </div>
                    <button
                    className="tw-bg-db-900 tw-text-white p-3 rounded-2 d-grid w-100 mt-3" 
                    onClick={() => remove(item)}
                  >
                    Remove from Cart
                  </button>
                  </div>
                </div>
              </div>
            </div>
          
        )) : (
          <h1 className="text-center md:tw-text-9xl h1 tw-text-6xl">Cart is Empty</h1>
        )}
      </div>
      <h1 className="text-center tw-text-3xl mt-5">
        Total Price: $ {price.toFixed(2)}
      </h1>
    </div>
  );
};

export default cart;
