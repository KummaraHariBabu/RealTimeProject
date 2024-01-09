import React from 'react'
import "../../Styles/home/internshipBlock.css"
import internimg1 from "../../Assets/image/internship-explore.webp"

const InternShipBlock = () => {
  return (
    <div className="internshipblock-page">
      <div className="internship-blocks">
        <h2>Explore <span className='span-text'>.</span> Upskill <span className='span-text'>.</span> Build</h2>
        <div className="cources-block">
          <a href="">Skill Courses</a>
          <a href="">Internship Programs</a>
          <a href="">Job Programs</a>
        </div>
        <div className="content-block">
          <div className="content-blocks left">
           
            <ul>
              <li><h4>Learn Your Way To Success With <span className='span-text'>150+</span> Skill Courses</h4></li>
              <li>New Courses Every Month</li>
              <li>On-Demand Industry Skills</li>
              <li>Completion Certificate</li>
              <li><button>Explore Cources</button></li>
            </ul>
          </div>
          <div className="content-blocks right">
            <img src={internimg1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternShipBlock