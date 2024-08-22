import React from "react";
import Coffee from "../assets/coffee.jpg";
import Desert from "../assets/desert.jpg";
import Dish from "../assets/dish.jpg";
import Drink from "../assets/drink.jpg";
import Shawarma from "../assets/Shwarma.jpg";
import Chef from "../assets/chef.jpg";
import Pasta from "../assets/pasta.jpg";
import Kabab from "../assets/kabab.jpg";
import Burg from "../assets/BURG.jpg";
import Fries from "../assets/fries.jpg";
import Chick from "../assets/chick.jpg";
import Cupcake from "../assets/cupcake.jpg";
import Pizza from "../assets/pizza.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="main">
      <div className="Food">
        <div className="img">
          <div className="txt">
            <h1 className="h1 xl:tw-text-9xl text-center">Best food for your taste</h1>
            <p>
              Discover delectable cuisine and unforgettable moments in our
              welcoming, culinary haven.
            </p>
          </div>
          <div className="btns m-auto">
            <button className="tw-bg-db-900 text-white p-3 rounded-5 tw-mr-5">Book A Table</button>
            <button className="tw-bg-transparent border-1 p-3 rounded-5">Explore Menu</button>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <h1 className="text-center m-4 h1">Browse Our Menu</h1>
        <div className="row">
          <div className="col-md-2">
            <div className="card m-auto">
              <img
                src={Coffee}
                className="card-img w-25 m-auto mt-4"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Breakfast</h5>
                <p className="card-text">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <Link
                  to="/menu"
                  style={{ textDecoration: "none", color: "#AD343E" }}
                >
                  <p className="text-center text-"> Explore menu </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="card col-md-2 m-auto">
            <img src={Dish} className="card-img w-25 m-auto mt-4" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Main Dishes</h5>
              <p className="card-text">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <Link
                to="/menu"
                style={{ textDecoration: "none", color: "#AD343E" }}
              >
                {" "}
                <p className="text-center text-"> Explore menu </p>
              </Link>
            </div>
          </div>
          <div className="card col-md-2 m-auto">
            <img src={Drink} className="card-img w-25 m-auto mt-4" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Drinks</h5>
              <p className="card-text">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <Link
                to="/menu"
                style={{ textDecoration: "none", color: "#AD343E" }}
              >
                <p className="text-center"> Explore menu </p>
              </Link>
            </div>
          </div>
          <div className="card col-md-2 m-auto">
            <img src={Desert} className="card-img w-25 m-auto mt-4" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Deserts</h5>
              <p className="card-text">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <Link
                to="/menu"
                style={{ textDecoration: "none", color: "#AD343E" }}
              >
                <p className="text-center"> Explore menu </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light w-100 position-relative">
        <div className="row position-relative">
          <div className="col-md-4 m-auto">
            <div className="position-relative m-auto overflow-hidden mt-5 mb-5">
              <img src={Shawarma} className="img-thumbnail" alt="" />
            </div>
          </div>
          <div
            className="col-md-3 m-auto text-start"
            style={{ fontSize: "20px" }}
          >
            <h1 className="h1">We Provide Healthy Food For Your Family .</h1>
            <p className="text-secondary fw-bolder">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <button className="btn btn-outline-dark p-3 rounded-5">
              More About Us
            </button>
          </div>
        </div>
        <div className="row tw-container m-auto">
          <div className="col-md-4">
            <img src={Chef} className="img-fluid" alt="logo" />
          </div>
          <div className="col-md-4">
            <img src={Pasta} className="img-fluid" alt="" />
            <img src={Kabab} className="img-fluid mt-4" alt="" />
          </div>
          <div className="col-md-4 m-auto">
            <h1 className="h1 tw-text-6xl">Fastest Food Deleivery in City</h1>
            <p className="mt-4">
              Our visual designer lets you quickly and of drag a down your way
              to customapps for both keep desktop.{" "}
            </p>
            <p className="mt-4">
              <i className="bi bi-clock"></i>
              <span className="ms-3"> Deleivery Within 30 minutes</span>
            </p>
            <p className="mt-4">
              <i className="bi bi-bookmark-plus"></i>
              <span className="ms-3"> Best Offers and Prices </span>
            </p>
            <p className="mt-4">
              <i className="bi bi-cart3"></i>
              <span className="ms-3">Online Services Available</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid tw-p-20 md:tw-p-40">
        <div className="row">
          <h1 className="h1 w-auto">Our Blog & Articles</h1>
          <button className="btn btn-outline-dark ms-auto p-3 rounded-5 w-auto">
            Read Our Articles
          </button>
        </div>
        <div className="row mt-5 border">
          <div className="col-sm-6">
            <div className="card">
              <img src={Burg} alt="" className="card-img-top" />
              <div className="card-body">
                <p>January 3, 2023</p>
                <h5 className="card-title h5 mt-3">
                  The secret tips & tricks to prepare a perfect burger & pizza
                  for our customers
                </h5>
                <div className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis neque voluptates optio et placeat architecto quos
                  aliquid voluptate minima quia eaque reprehenderit distinctio
                  atque repudiandae ipsa vel, unde possimus ut.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-6 p-2 pt-0">
                <div className="card">
                  <img src={Fries} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>January 3, 2023</p>
                    <h5 className="card-title h5">
                      How to prepare the perfect french fries in an air fryer
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2 pt-0">
                <div className="card">
                  <img src={Chick} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>January 3, 2023</p>
                    <h5 className="card-title h5">
                      How to prepare delicious chicken tenders
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 p-2">
                <div className="card">
                  <img src={Cupcake} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>January 3, 2023</p>
                    <h5 className="card-title h5">
                      7 delicious cheesecake recipes you can prepare
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="card">
                  <img src={Pizza} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>January 3, 2023</p>
                    <h5 className="card-title h5">
                      5 great pizza restaurants you should visit this city
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
