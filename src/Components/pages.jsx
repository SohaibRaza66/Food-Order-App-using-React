import React from "react";
import Noodles from "../assets/Noodles.jpg";
import Fr from "../assets/fr.jpg";
const pages = () => {
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="col-md-8 m-auto p-5">
          <h1 className="h1 text-center">
            The secret tips & tricks to prepare a perfect burger & pizza for our
            customers
          </h1>
          <img src={Noodles} alt="" className="img-fluid rounded-2" />
          <div className="col-md-12">
            <h3 className="h3">
              What do you need to prepare a home-made burger?
            </h3>
            <p>
              Creating the perfect burger and pizza is an art, combining
              ingredients, techniques, and passion to craft dishes that truly
              delight the palate. Today, we'll unveil some closely guarded
              secrets and insider tips for mastering these beloved staples of
              the culinary world.{" "}
            </p>{" "}
            <ol className="tw-list-decimal mt-4 p-4">
              <li>
                <p>
                  <span className="tw-font-bold">Quality Beef:</span> The heart
                  of a perfect burger is top-notch beef. Opt for fresh,
                  high-quality ground beef with a fat content of about 20% for
                  the juiciest, most flavorful results.{" "}
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold">Seasoning:</span> Simplicity is
                  key here. A generous pinch of salt and black pepper just
                  before cooking will enhance the beef's natural flavors without
                  overshadowing them.
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold">
                    Don’t Overwork the Meat:
                  </span>{" "}
                  When forming your patties, be gentle. Overworking the meat can
                  lead to dense, tough burgers. You want a patty that's firm
                  enough to hold together, but not compressed.
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold"> Cooking: </span> High heat is
                  crucial. Whether you're grilling or pan-searing, make sure
                  your cooking surface is hot enough to form a nice crust on the
                  patty, sealing in those delicious juices.{" "}
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold">Resting:</span> Allow your
                  cooked burgers to rest for a few minutes before serving. This
                  lets the juices redistribute throughout the patty, ensuring a
                  moist and flavorful bite.
                </p>
              </li>
            </ol>
            <h3 className="h3">
              What are the right ingredients to make it delicious?
            </h3>
            <p>
              Creating the perfect burger and pizza is an art, combining
              ingredients, techniques, and passion to craft dishes that truly
              delight the palate. Today, we'll unveil some closely guarded
              secrets and insider tips for mastering these beloved staples of
              the culinary world.{" "}
            </p>{" "}
            <ol className="tw-list-decimal mt-4 p-4">
              <li>
                <p>
                  <span className="tw-font-bold">Quality Beef:</span> The heart
                  of a perfect burger is top-notch beef. Opt for fresh,
                  high-quality ground beef with a fat content of about 20% for
                  the juiciest, most flavorful results.{" "}
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold">Seasoning:</span> Simplicity is
                  key here. A generous pinch of salt and black pepper just
                  before cooking will enhance the beef's natural flavors without
                  overshadowing them.
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold">
                    Don’t Overwork the Meat:
                  </span>{" "}
                  When forming your patties, be gentle. Overworking the meat can
                  lead to dense, tough burgers. You want a patty that's firm
                  enough to hold together, but not compressed.
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold"> Cooking: </span> High heat is
                  crucial. Whether you're grilling or pan-searing, make sure
                  your cooking surface is hot enough to form a nice crust on the
                  patty, sealing in those delicious juices.{" "}
                </p>{" "}
              </li>
              <li>
                <p>
                  {" "}
                  <span className="tw-font-bold">Resting:</span> Allow your
                  cooked burgers to rest for a few minutes before serving. This
                  lets the juices redistribute throughout the patty, ensuring a
                  moist and flavorful bite.
                </p>
              </li>
            </ol>
          </div>
          <img src={Fr} alt="" className="img-fluid rounded-2" />
          <h3 className="h3">
            What are the right ingredients to make it delicious?
          </h3>
          <p>
            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
            eget viverra egestas nisi in consequat. Fusce sodales augue a
            accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lobortis arcu enim urna adipiscing praesent velit
            viverra sit semper lorem eu cursus ve of all hendrerit elementum
            morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi
            dignissim at ante massa mattis magna sit amet purus gravida quis
            blandit turpis..
          </p>
        </div>
      </div>
    </div>
  );
};

export default pages;
