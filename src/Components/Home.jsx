import React from 'react'
import "../Styles/home.css"
import person1 from "../Assets/Home/person1.png"
import person2 from "../Assets/Home/person2.png"
import person3 from "../Assets/Home/person3.png"
import Address from './Home/Address'
import InternShipBlock from './Home/InternShipBlock'
import Clients from './Home/Clients'
import CoursesProjects from './Home/CoursesProjects'
import HowWeWork from './Home/HowWeWork'
import Connect from './Home/Connect'

const Home = () => {
  return (
    <div className="home-page">
        <div className="sub-sec-one">
            <div className="sub-sec-sub-one">
                <span>Educate.</span><br />
                <span>Inspire.</span><br />
                <span>Succeed!</span><br />
                <a href="#" className='explore-course'>Explore Our Courses</a>
            </div>
            <div className="sub-section-one">
                <div className="sub-section-images"><img src={person1} alt="" className="sub-importedIectionImages" /><span className='img-text'>Educate.</span></div>
                <div className="sub-section-images"><img src={person2} alt="" className="sub-importedIectionImages" /><span className='img-text'>Inspire.</span></div>
                <div className="sub-section-images"><img src={person3} alt="" className="sub-importedIectionImages" /><span className='img-text'>Succeed!</span></div>
             </div>
        </div>
        <Address/>
        <InternShipBlock/>
        <HowWeWork/>
        <CoursesProjects/>
        <Clients/>
        <Connect/>
    </div>
   )
}

export default Home