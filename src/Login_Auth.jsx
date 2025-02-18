import React, { useState } from 'react'

const Login_Auth = () => {
    const[isLogin ,SetIsLogin]=useState();

  return (
    <div className="container">
        <div className="form-container">
            <div className="form-toggle">
                <button className={isLogin ? 'active' : ""} onClick={()=>SetIsLogin(1)}>Login</button>
                <button className={! isLogin ? 'active' : "" }onClick={()=>SetIsLogin(0)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' /> 
                <a href='#'>Forgot Password</a>
                <button>Login</button> 
                <p>Not a Mamber? <a href='#' onClick={()=>SetIsLogin(false)}>SignUp Now</a></p>
            </div>
                </> : <> <div className='form'><h2>Signup Form</h2>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' /> 
                <input type='password' placeholder='confirm password' />
                </div>
                <div><button id="btn">Submit</button></div>
                </>
                }
        </div>
    </div>
  )
}

export default Login_Auth
