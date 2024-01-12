import "../Styles/footer.css"
import logo from "../Assets/Logo/logoSkill.jpg"
import { useState } from "react"

function Footer() {
  const [email,setEmail] = useState('');
  const [isValidEmail,setIsValidEmail] = useState(true);

  const openEmail =()=>{
    if(isValidEmail) {
      const mailToLink = `mailto:${email}`;
      window.location.href = mailToLink;
    } else {
      alert("plz enter a valid email address.")
    }
  } 

  const handleEmail = (e)=>{
    const inputEmail = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
    setIsValidEmail(isValid);
    setEmail(inputEmail);
    console.log(inputEmail);
  }

  return (
    <div className='footer'>
      <div className="columns">
      
        <div className="logoInfo">
          <div className="footerInfo">
                  <img src={logo} alt="" />
                  <p>Stay connected with us! Follow and subscribe to our social media platforms for regular updates on learning new skills. Happy Learning!</p>
                  <div className="social">
                    <a href="https://github.com/KummaraHariBabu" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/hari-babu-kummara-b8a474269" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://kummaraharibabu.github.io/My-Portfolio/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100049243516246&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
                    <a href="https://kummaraharibabu.github.io/My-Portfolio/" target="_blank" rel="noopener noreferrer"><i class="bi bi-person-slash"></i></a>
                    <a href="https://x.com/haribabu8118?t=ThzNoaHvezdaqN43c2v87A&s=08" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    <a href="https://wa.me/8106394341" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                  </div>
          </div>
        </div>
        <div className="links">
          <div className="footerCol">
            <span>Quick Links</span>
            <a href="/about">About Us</a>
            <a href="#">Blog</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="footerCol">
            <span>Community</span>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Career</a>
          </div>

          <div className="footerCol">
            <span>More</span>
            <a href="#">FAQ</a>
            <a href="#">Campus Ambassador</a>
            <a href="#">Growth Community</a>
          </div>

          <div className="footerCol">
            <span>Contacts</span>
            <p><i className="bi bi-telephone-fill"></i> +91-8106394341</p>
            <p><i className="bi bi-envelope-fill"></i> harinaveen183@gmail.com</p>
            <div class="input-container">
              <input type="email" placeholder="Enter Mail" className={`sendmail${isValidEmail}? "" :"invalid-email"`} onChange={handleEmail}/>
              <i class="bi bi-send-fill email" onClick={openEmail}></i>
            </div>      
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <p>COPYRIGHT©SKILLCORTEX EDTECH. All rights reserved</p>
       

      </div>
</div>

  )
}

export default Footer
