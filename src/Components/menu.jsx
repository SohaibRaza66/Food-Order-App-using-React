import React from "react";

const menu = ({ menu, MenuSet, setMen, men, addCart }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="col-md-12">
          <div className="col-md-6 m-auto">
            <p className="text-center mt-5 tw-text-9xl">Our Menu</p>
            <p className="text-center tw-p-20">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>
            <div className="d-flex tw-place-content-center">
              <button
                className="btn tw-bg-transparent border rounded-5 focus:tw-bg-db-900 focus:tw-text-white hover:tw-bg-db-900 hover:tw-text-white tw-w-32"
                onClick={() => setMen(menu)}
              >
                All
              </button>
              <button
                className="btn tw-bg-transparent border rounded-5 focus:tw-bg-db-900 focus:tw-text-white hover:tw-bg-db-900 hover:tw-text-white tw-w-32 ms-2"
                onClick={() => MenuSet("Breakfast")}
              >
                Breakfast
              </button>
              <button
                className="btn tw-bg-transparent border rounded-5 focus:tw-bg-db-900 focus:tw-text-white hover:tw-bg-db-900 hover:tw-text-white tw-w-32 ms-2"
                onClick={() => MenuSet("Main Dishes")}
              >
                Main Dishes
              </button>
              <button
                className="btn tw-bg-transparent border rounded-5 focus:tw-bg-db-900 focus:tw-text-white hover:tw-bg-db-900 hover:tw-text-white tw-w-32 ms-2"
                onClick={() => MenuSet("Drinks")}
              >
                Drinks
              </button>
              <button
                className="btn tw-bg-transparent border rounded-5 focus:tw-bg-db-900 focus:tw-text-white hover:tw-bg-db-900 hover:tw-text-white tw-w-32 ms-2"
                onClick={() => MenuSet("Desserts")}
              >
                Desserts
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container tw-flex tw-place-content-center tw-flex-wrap">
        {men.map((item, index) => {
          return (
            <div className="col-md-3 p-4" key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="tw-text-2xl tw-text-db-900 text-center">
                    $ {item.price}
                  </p>
                  <p className="card-text tw-text-xl text-center">
                    {item.title}
                  </p>
                  <p className="card-text text-center">
                    Made with eggs, lettuce, salt, oil and other ingredients.
                  </p>
                </div>
                <button
                  className="btn tw-bg-transparent border rounded-5 focus:tw-bg-db-900 focus:tw-text-white hover:tw-bg-db-900 hover:tw-text-white tw-w-36 m-auto mb-3"
                  onClick={() => addCart(item)}
                >
                  <i className="bi bi-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container bg-body-tertiary p-5">
        <div className="row">
          <div className="col-md-4 p-5">
            <h1 className="h1">You can Order Through Apps</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut,
              numquam beatae laudantium dolor quae dolore illo non quasi vel,
              est magnam nulla voluptatibus fugiat. Quibusdam autem hic voluptas
              molestiae!
            </p>
          </div>
          <div className="col-md-8">
            <div className="apps tw-flex tw-flex-wrap">
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p >Uber <span className="tw-text-darkgreen-900">Eats</span></p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p className="tw-text-red-900">GRUBHUB</p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p>POSTMATES</p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p className="tw-text-orange-900">DoorDash</p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p className="tw-text-pink-900">Foodpanda</p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p className="tw-text-aqua-900">Deleiveroo</p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p className="tw-text-lightgreen-900">InstaCart</p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p className="tw-text-red-900">Just Eat</p>
              </div>
              <div className="app bg-white rounded-5 p-4 m-4 tw-text-3xl">
                <p>DiDi Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
