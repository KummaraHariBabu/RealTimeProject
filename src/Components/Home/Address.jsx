import React from 'react'
import "../../Styles/home/address.css"
import c1 from "../../Assets/image/timer.png"
import c2 from "../../Assets/image/rocket.png"
import c3 from "../../Assets/image/stock.png"
import about from "../../Assets/image/ABOUT.jpg"

const Address = () => {
  return (
    <div className="address-page">
        <div className="address-page-block">
            <div className='address-page-block-one right'>
                <img src={about} alt="" />                                
            </div>
            <div className='address-page-block-one left'>
                <h2 className="skills-heading">Get started on your career, the Skill CorteX way!</h2>
                <div className="content">
                    <div className="headcontent">
                        <img src={c1} alt="" />
                        <h5>01.</h5>
                        <p>Regular Evaluation</p>
                    </div>
                    <div class="infoContent">
                        <p>We make sure to regularly evaluate and track your progress so that you can thoroughly understand the concepts that have been taught.</p>
                    </div>             
                </div>
                <div className="content">
                    <div className="headcontent head2">
                        <img src={c2} alt="" />
                        <h5>02.</h5>
                        <p>Live Classes</p>
 
                    </div>
                    <div class="infoContent info2">
                        <p>Here you will get live classes where you can have one on one interaction with your mentor and can directly ask questions and clear your doubts. Thus giving you an easy access to learn from any corner of the world.</p>
                    </div>   
                </div>
                <div className="content">
                    <div className="headcontent head3">
                        <img src={c3} alt="" />
                        <h5>03.</h5>
                        <p>Completion Certificates</p>
                    </div>
                    <div class="infoContent info3">
                        <p>You will get the course completion certificate and also an internship completion certificate in certain courses.</p>
                    </div>                
                </div>
            </div>
        </div>
    </div>
 )
}

export default Address