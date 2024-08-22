import React from 'react'

const Login = ({showL,handleLogin,handleEmail,handlePass, loginData,logErr}) => {
  return (
    <div>
        <div className="contain tw-z-10">
            <div className="modal-wrapper col-md-4">
                <i className="bi bi-x bg-danger d-flex ms-auto text-white" onClick={showL} style={{cursor:"pointer", width:"max-content", borderRadius:'10px' , padding:"5px"}}></i>
                <h1 className="text-center">Login Form</h1> 
                <form action="" onSubmit={handleLogin}>
                    <div className="Email mb-3">
                        <label htmlFor="Email" className="form-label">Email: </label>
                        <input type="email" id="Email" className="form-control" value={loginData.email} onChange={handleEmail}/>
                        <span>{logErr.email}</span>
                    </div>
                    <div className="pass mb-3">
                        <label htmlFor="pass" className="form-label">Password: </label>
                        <input type="password" id="pass" className="form-control" autoComplete='false' value={loginData.password} onChange={handlePass}/>
                        <span>{logErr.password}</span>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login