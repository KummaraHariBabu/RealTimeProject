import React, { useState } from 'react';
import "../Styles/user.css";

const User = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);


  const togglePassword1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  const togglePassword2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };


  //password conditions
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isMatching, setIsMatching] = useState(true);
    const [hasClicked, setHasClicked] = useState(false);

  
    const handlePasswordChange = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      validatePassword(newPassword, confirmPassword);
    };
  
    const handleConfirmPasswordChange = (event) => {
      const newConfirmPassword = event.target.value;
      setConfirmPassword(newConfirmPassword);
      validatePassword(password, newConfirmPassword);
    };
  
    const validatePassword = (password, confirmPassword) => {
      // Validation criteria for the password
      const hasEightCharacters = password.length >= 8;
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasCapitalLetter = /[A-Z]/.test(password);
  
      // Check if all criteria are met
      const isValidPassword =
        hasEightCharacters && hasSpecialCharacter && hasNumber && hasCapitalLetter;
  
      setIsValid(isValidPassword);
  
      // Check if the passwords match
      setIsMatching(password === confirmPassword);
    };

    const handleInputClick = () => {
      setHasClicked(true);
    };

  return (
    <div className='user-page'>
      <div className="sub-user-page">
        <form id='loginform' className='loginform'>
            <h4 id='sup-heading'>Sign UP</h4>
            <label htmlFor="fname">First Name</label>: <input type="text" required/> <br />
            <label htmlFor="lname">Last Name</label>: <input type="text" required /> <br />
            <label htmlFor="email">Email</label>: <input type="email" required/> <br />
            <label htmlFor="phone">Phone Number</label>: <input type="phone" name="" id="" required /> <br />
            <label>Password</label>
            : <input type={showPassword1 ? 'text' : 'password'}  value={password} onChange={handlePasswordChange} onClick={handleInputClick} required />
            <i className={`bi eye ${showPassword1 ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`} onClick={togglePassword1}></i> <br />         
            <label>Confirm Password</label>
            : <input type={showPassword2 ? 'text' : 'password'}  value={confirmPassword} onChange={handleConfirmPasswordChange} onClick={handleInputClick} required/>
            <i className={`bi eye ${showPassword2 ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`} onClick={togglePassword2}></i> <br />         

            {hasClicked && (
              <div style={{ color: !isValid ? 'green' : '#e70c0c99', fontSize: '13px' }}>
                {!isValid ? 'Password Consist' : 'Password must have at least 8 characters, special characters, numbers, and capital letters.'}
              </div>
            )}

            {hasClicked && (
              <div style={{ color: !isMatching ? 'green' : '#e70c0c99', fontSize: '13px' }}>
                {!isMatching ? 'Password is matched!' : 'Passwords do not match.'}
              </div>
            )}
            <p className='terms-policy'><input type="checkbox" id='checkbox' required/> <span>I accept the Terms of Use & Privacy Policy</span></p>
            <button id='S-UP-btn'>Registration</button>
            <p className='account'>Already have an Account?<a href='/login'>Login here</a></p>
            <p className='copyright' id='copyright'>Copyright © Skillcortex.com</p>

        </form>
      </div>
    </div>
  );
};

export default User;
