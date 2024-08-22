import React from "react";

const Form = ({
  handleSubmit,
  dateHandle,
  monthHandle,
  yearhandle,
  firstHandle,
  lastHandle,
  emailHandle,
  passHandle,
  CpassHandle,
  date,
  month,
  year,
  formdata,
  err,
  ispass,
  shpass,
  show
}) => {
  return (
    <div className="contain tw-z-10">
        <div className="modal-wrapper col-md-4">
        <i className="bi bi-x bg-danger d-flex ms-auto text-white" onClick={show} style={{cursor:"pointer", width:"max-content", borderRadius:'10px' , padding:"5px"}}></i>
      <h1 className="text-center">Registration Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="Fname mb-3">
          <label htmlFor="FName" className="form-label">FirstName: </label>
          <input type="text" id="FName" className="form-control" onChange={firstHandle} value={formdata.firstname}/>
          <span className="text-danger">{err.firstname}</span>
        </div>
        <div className="Lname mb-3">
          <label htmlFor="LName" className="form-label">LastName: </label>
          <input type="text" id="LName" className="form-control" value={formdata.lastname} onChange={lastHandle}/>
          <span className="text-danger">{err.lastname}</span>
        </div>
        <div className="dob mb-3 d-flex">
          <label htmlFor="dd" className="form-label">Date of Birth: </label>
          <div className="dd ms-4">
            <select name="dd" id="dd" onChange={dateHandle} className="form-control">
                <option value="" selected disabled> -- Select date -- </option>
              {date.map((dat, index) => {
                return (
                  <option value={dat} key={index}>
                    {dat}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mm ms-4">
            
            <select name="mm" id="mm" onChange={monthHandle} className="form-control">
            <option value="" selected disabled> -- Select month -- </option>
              {month.map((dat, index) => {
                return (
                  <option value={dat} key={index}>
                    {dat}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="yy ms-4">
            <select name="yy" id="yy" onChange={yearhandle} className="form-control">
            <option value="" selected disabled> -- Select Year -- </option>
              {year.map((dat, index) => {
                return (
                  <option value={dat} key={index}>
                    {dat}
                  </option>
                );
              })}
            </select>
          </div>
          <span className="text-danger">{err.dob}</span>
        </div>
        <div className="email">
          <label htmlFor="em" className="form-label">Email: </label>
          <input type="email" className="form-control" onChange={emailHandle} value={formdata.email}/>
          <span className="text-danger">{err.email}</span>
        </div>
        <div className="pass position-relative">
          <label htmlFor="ps" className="form-label">Password: </label>
          <div className="ps position-relative">
          <input type={ispass ? "password" : "text"} className="form-control" onChange={passHandle} value={formdata.password} autoComplete="true"/>
          <i className="position-absolute bi bi-eye" style={{"top" : '50%',right:0, transform:'translate(-50%,-50%)' , cursor:'pointer'}} onClick={shpass}></i>
          </div>  
          <span className="text-danger">{err.password}</span>
        </div>
        <div className="cpass">
          <label htmlFor="ps" className="form-label">Confirm Password: </label>
          <div className="ps position-relative">
          <input type={ispass ? "password" : "text"} className="form-control" onChange={CpassHandle} value={formdata.cnfrmpass} autoComplete="true"/>
          <i className="position-absolute bi bi-eye" style={{"top" : '50%',right:0, transform:'translate(-50%,-50%)' , cursor:'pointer'}} onClick={shpass}></i>
          </div>
          <span className="text-danger">{err.cnfrmpass}</span>
        </div>
        <div className="btn">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Form;
