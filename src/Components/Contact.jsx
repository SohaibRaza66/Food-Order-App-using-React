import React from 'react'

const Contact = () => {
  return (
    <div className="Contact col-md-12">
      <div className="h1 text-center">
        <h1 className='tw-text-6xl md:tw-text-8xl'>Contact Us</h1>
      </div>
      <div className="col-md-4 m-auto p-5 text-center">
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <div className="col-md-6 m-auto p-5">
        <form action="" className='form form-control' onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Subject</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea name="text" id="" className='form-control'></textarea>
          </div>
          <div className="d-grid gap-2">
            <button className="border rounded-2 tw-bg-db-900 tw-text-white pt-2 pb-2" type="submit">Send</button>
          </div>
        </form>
        <div className="row mt-5">
          <div className="col-md-4">
            <h3 className="h3">Call Us</h3>
            <p className='tw-text-db-900'>+1-234-567-8900</p>
          </div>
          <div className="col-md-4">
          <h3 className="h3">Hours</h3> 
            <p>Mon - Fri: 11:00 Am - 8:00 Pm</p>
            <p>Sat , Sun: 9:00 Am - 10:00 Pm</p>
          </div>
          <div className="col-md-4">
            <h3 className="h3">Our Location</h3>
            <p>123 Bridge Street <br /> Nowhere Land, LA 12345 <br /> United States</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact