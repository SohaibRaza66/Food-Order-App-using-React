import React from "react";

const cart = ({ cart , remove}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {cart.length>0 ? cart.map((item) => (
          <div className="col-md-4 p-5">
            <div className="card">
              <img src={item.img} className="card-img-top" alt="" />
              <div className="card-title text-center mt-4 mb-4">
                <h3>Name: {item.title}</h3>
                <p>Price: $ {item.price}</p>
                <button className="tw-bg-db-900 tw-text-white p-3 rounded-2" onClick={() => remove(item)}>Remove from Cart</button>
              </div>
            </div>
          </div>
        )) : <h1 className="text-center tw-text-9xl">Cart is Empty</h1> }
      </div>
    </div>
  );
};

export default cart;
