import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import "../../Styles/user.css";

// ...

const NewPassword = () => {
    const navigate = useNavigate();
    const [showPassword1, setShowPassword1] = useState(false);
    const [passwordGenerated, setPasswordGenerated] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false); // New state
  
    const togglePassword1 = () => {
      setShowPassword1((prevShowPassword) => !prevShowPassword);
    };
  
    // password conditions
    const [password, setPassword] = useState('');
    const[otp, setOtp] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [hasClicked, setHasClicked] = useState(false);
  
    const handlePasswordChange = (event) => {
        event.preventDefault();
      const newPassword = event.target.value;
      setPassword(newPassword);
      validatePassword(newPassword, confirmPassword);
    };
  
    const handleConfirmPasswordChange = (event) => {
      const newOtp = event.target.value;
      event.preventDefault();
      setConfirmPassword(newOtp);
      validatePassword(newOtp, confirmPassword);
    };
  
    const validatePassword = (password, confirmPassword) => {
      const hasEightCharacters = password.length >= 8;
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasCapitalLetter = /[A-Z]/.test(password);
  
      const isValidPassword =
        hasEightCharacters && hasSpecialCharacter && hasNumber && hasCapitalLetter;
  
      setIsValid(isValidPassword);
     };
  
    const handleInputClick = () => {
      setHasClicked(true);
      setIsPasswordFocused(true); // Set the state to true when the password field is clicked
    };
  
    const handleGeneratePassword = () => {
      if (!password || !otp) {
        setHasClicked(true);
        // navigate('/confirmation');
        return;
      }
      setPasswordGenerated(true);
    };
  
    return (
      <div className='user-page'>
        <div className="sub-user-page">
          <form id='loginform' className='loginform'>
            <h4 id='sup-heading'>New Password</h4>
            <label htmlFor="otp">Enter OTP</label>
            : <input type="text" required />
            <label>Password</label>
            : <input
                type={showPassword1 ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                onClick={handleInputClick}
                onFocus={() => setIsPasswordFocused(true)} // Set the state to true when the password field is focused
                required
              />
            <i className={`bi eye ${showPassword1 ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`} onClick={togglePassword1}></i> <br />
            {isPasswordFocused && ( // Check if the password field is not focused
              <div style={{ color: hasClicked && isValid ? 'green' : '#e70c0c99', fontSize: '13px' }}>
                {hasClicked && isValid ? '' : 'Password must have at least 8 characters, special characters, numbers, and capital letters.'}
              </div>
            )}
  
  
            {passwordGenerated && (
              <div style={{ color: 'green', fontSize: '13px' }}>
                Your password is generated successfully!
              </div>
            )} <br />
  
            <button id='S-UP-btn' onClick={handleGeneratePassword}>Generate Password</button>
  
          </form>
        </div>
      </div>
    );
  };
  
  export default NewPassword;
  
