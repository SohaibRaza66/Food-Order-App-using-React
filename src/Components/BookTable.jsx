import React from "react";

const BookTable = () => {
  return (
    <div className="container-fluid p-5 text-center">
      <div className="col-md-6 m-auto">
        <h1 className="h1 tw-text-9xl">Book A Table</h1>
        <p className="text-center tw-ps-40 tw-pr-40">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <div className="col-md-8 m-auto mt-5">
        <form
          action=""
          className="form-control p-5 tw-shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="row m-auto">
            <div className="date col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date:{" "}
              </label>
              <input
                type="date"
                id="exampleFormControlInput1"
                className="form-control"
              />
            </div>
            <div className="time col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Time:{" "}
              </label>
              <input
                type="time"
                id="exampleFormControlInput1"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="name col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name:{" "}
              </label>
              <input
                type="text"
                id="exampleFormControlInput1"
                className="form-control"
                placeholder="Enter Your name"
              />
            </div>
            <div className="number col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone:{" "}
              </label>
              <input
                type="number"
                id="exampleFormControlInput1"
                className="form-control"
                placeholder="x-xxx-xxx-xxx"
              />
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Total Person:{" "}
            </label>
            <select name="Total" className="form-control">
              <i className="bi bi-arrow-down"></i>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <option key={item} value={item}>
                  {item} Person
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-12 d-grid">
            <button className="tw-bg-db-900 tw-text-white p-3 rounded-2 mt-5">
              Book A Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
