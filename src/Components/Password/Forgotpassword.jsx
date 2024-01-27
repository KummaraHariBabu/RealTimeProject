import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import "../../Styles/user.css";

const Forgotpassword = () => {
  const navigate = useNavigate();  // Use useNavigate hook
  const [email, setEmail] = useState('');

  const handleGenerateOTP = () => {
    // Perform any necessary logic before navigating
    // For now, let's just navigate to the "/newpassword" route
     // Use navigate function instead of history.push
    if(email==="") {
      alert("Enter email!")
    } else {
      navigate('/newpassword');
    }
  };

  return (
    <div className='user-page'>
      <div className="sub-user-page">
        <form id='loginform' className='loginform'>
          <h4 id='sup-heading'>Forgot Password</h4>
          <label htmlFor="email">Email</label>
          : <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/> <br /><br />

          <button id='S-UP-btn' onClick={handleGenerateOTP}>Generate OTP</button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
