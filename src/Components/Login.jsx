import React,{ useState } from 'react'
import "../Styles/user.css"

const Login = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    // const [showPassword2, setShowPassword2] = useState(false);
  
  
    const togglePassword1 = () => {
      setShowPassword1((prevShowPassword) => !prevShowPassword);
    };
    // const togglePassword2 = () => {
    //   setShowPassword2((prevShowPassword) => !prevShowPassword);
    // };
  return (
    <div className='user-page'>
      <div className="sub-user-page">
        <form id='loginform' className='loginform'>
            <h4 id='sup-heading'>Login</h4>
            <label htmlFor="email">Email</label>: <input type="email" required/> <br />
            <label htmlFor="password">Password</label>
            : <input type={showPassword1 ? 'text' : 'password'} name="" id="psw" required/>
            <i className={`bi eye ${showPassword1 ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`} onClick={togglePassword1}></i> <br />
            <p className='remember-me'><input type="checkbox" id='checkbox' required/> <span>Remember me</span></p>
            <a href="/forgotpassword" id='forgot-psw'>Forgot password</a>
            <button id='S-UP-btn'>Login</button>
            <p className='account'>I don't have an Account?<a href='/user'>Sign Up</a></p>
            <p className='copyright' id='copyright'>Copyright © Skillcortex.com</p>

        </form>
      </div>
    </div>
    )
}

export default Login