import React from "react";
import Logo from "../assets/Logo_1.jpg";
import Egg from "../assets/egg.jpg";
import Chips from "../assets/chips.jpg";
import Olsson from "../assets/olsson.jpg";
import Burger from "../assets/burger.jpg";
const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-white mt-5 p-5">
      <div className="row m-auto">
        <div className="col-md-3 mt-5 p-5">
          <div className="footer">
            <div className="logo tw-flex">
              <img src={Logo} alt="" className="img-fluid bg-none" />
              <h1 className="h1">Bistro Bliss</h1>
            </div>
            <p className="mt-5">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
            <div className="social-icons mt-5">
              <i className="bi bi-facebook m-4"></i>
              <i className="bi bi-twitter m-4"></i>
              <i className="bi bi-instagram m-4"></i>
              <i className="bi bi-github m-4"></i>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5 p-5">
          <div className="footer">
            <h3 className="h3">Pages</h3>
            <p className="mt-5">Home</p>
            <p className="mt-5">About</p>
            <p className="mt-5">Menu</p>
            <p className="mt-5">Pricing</p>
            <p className="mt-5"> Blog </p>
            <p className="mt-5">Contact</p>
            <p className="mt-5">Deleivery</p>
          </div>
        </div>
        <div className="col-md-3 mt-5 p-5">
          <div className="footer">
            <h3 className="h3">Utility Pages</h3>
            <p className="mt-5">Start Here</p>
            <p className="mt-5">Style Guide</p>
            <p className="mt-5">Password Protected</p>
            <p className="mt-5">404 Not Found</p>
            <p className="mt-5"> Licenses </p>
            <p className="mt-5">Change Log</p>
            <p className="mt-5">View More</p>
          </div>
        </div>
        <div className="col-md-3 mt-5 p-5">
          <div className="footer">
            <h3 className="h3">Follow Us on Instagram</h3>
            <div className="imgs d-flex flex-wrap tw-max-h-screen">
              <div className="row">
                <img src={Egg} className="img-fluid p-2 w-50" alt="" />
                <img src={Chips} className="img-fluid p-2 w-50" alt="" />
              </div>
              <div className="row">
                <img src={Olsson} className="img-fluid p-2 w-50" alt="" />
                <img src={Burger} className="img-fluid p-2 w-50" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center m-5">Copyright © 2022 Bistro Bliss</p>
    </div>
  );
};

export default Footer;
