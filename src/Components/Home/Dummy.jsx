import React, {useState} from 'react'
import Menu from '../Header Section/Menu'
import './about.scss'
import Footer from '../Footer Section/Footer';
import './mediaAbout.scss'
import picture14 from '../../Components/assets/images/Picture14.jpg'
import picture3 from '../../Components/assets/images/Picture3.jpg'
import picture25 from '../../Components/assets/images/Picture25.jpg'

function About() {
    const [selectedLink, setSelectedLink] = useState("");

    const links = [
        { id: 1, name: 'VISION', content: 'Desire to Design"s philosophy is centered on the collaboration of individuals with diverse expertise, combining the realms of real estate development and architecture. Our collective objective is to revolutionize the industry by delivering all-encompassing services, covering property identification, construction, and design. Notably, we have introduced the concept of accessible luxury, making it increasingly feasible for you to enjoy homes with lavish interiors at an affordable price.' },
        { id: 2, name: 'CONCEPT',  content: 'In our desire-to-design concept, we are driven by a set of fundamental aspirations that define our approach - the Desire for Functionality, the Quest for Serenity, the Pursuit of Quality, and the Aesthetic of Elegance. We are committed to understanding your desires and design preferences intimately, so that we can bring to life spaces that not only provide enduring utility but also cultivate profound connections between you and your surroundings, all while embodying these aspirations.' },
        { id: 3, name: 'VALUES', content: 'In the realm of Desire-to-Design, our foremost commitment is to provide holistic design solutions that not only resonate with our core values but also capture the essence of your personal style. Your space is a canvas for individual expression, and we believe it should be imbued with lasting craftsmanship that mirrors your distinctive aspirations. These principles stand as our unwavering pillars, and our unwavering dedication is to manifest your design aspirations into reality.' },
      ];
    
      const handleLinkClick = (linkId) => {
        setSelectedLink(linkId);
      };
  return (
   <>
      <Menu/>
      <div className="about_info">
        <div className="banner">
            <div className="content-section">
                <h3>About Us</h3>
                <p><a href="/">Home</a> .. <span>About Us</span></p>
                
            </div>
        </div>

        <div className="desire_design">
          <div className="sideImage">
            <img src={picture14} alt="no image" />
          </div>
          <div className="sideContent">
            <p>DESIRE TO DESIGN</p>
            <span>[ ABOUT DESIRE TO DESIGN ]</span>
            
           
            <p className='info'>DESIRE TO DESIGN Architects is a leading multidisciplinary firm that brings together a team of the finest architects, interior designers, and civil engineers, providing a comprehensive solution for all your architectural needs. We are dedicated to delivering exceptional results that captivate and exceed your expectations. Our team's expertise and knowledge span the spectrum, whether you're seeking innovative construction or visionary design.
            </p>
            <p className="info">We are firm believers in uniting the best of both realms – creativity and technology. Our team comprises experts who possess a unique fusion of artistic vision and technological proficiency. When it comes to our services, we stand by you at every juncture – from proficient project management and ingenious structural design to visionary interior design. With Desire to Design Architects at your side, you can relax and watch your dreams come to life.</p>
           
          </div>
        </div>

        

        <div className='projects'>
            <div className="workingSteps">
              <span>[ DESIRE TO DESIGN STRATEGY ]</span>
              <p>DESIRE TO DESIGN Philosophy</p>
              <span className='dots'>.....................</span>
                <div className="flipCards">
                    <div className="card">
                       <p>At Desire to Design, we understand that every client possesses a distinctive sense of style. Our vision is centered on customizing our architectural and interior design services to align with their individual preferences, resulting in genuinely unique and tailor-made designs. As top-tier architects in Delhi, our mission is to craft spaces that are not only functional and practical but also artistically enchanting, leaving you in awe. Each project is handled with the utmost care and a meticulous focus on every intricate detail, ensuring our vision of excellence is manifest in every creation.</p>
                    </div>
                    <div className="card">
                        <p>At Desire to Design, we uphold a set of core values that guide our approach to every project. We believe in providing our clients with unwavering attention, ensuring that each project receives our full dedication. Our commitment to excellence drives us to continually improve and deliver outstanding design solutions for a diverse range of spaces.
                          Our team serves as your dedicated partner in crafting spaces that leave you mesmerized. From intelligent design and construction to expert MEP services, strategic planning, meticulous styling, and effective project management, we stand by your side throughout the entire journey. Together, let's transform your vision into a breathtaking reality!</p>
                    </div>
                    <div className="card">
                        <p>At Desire to Design, our mission is to democratize affordable luxury in the world of architecture and interior design. We are committed to providing you with the opportunity to savor the "wow" factor of high-end design and interiors, all within a reasonable budget. Our approach seamlessly combines innovative thinking with efficient execution, ensuring that we fashion spaces that are not only stylish but also budget-friendly. We aspire to make the extraordinary accessible to everyone.</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="philosophy">
            <div className="founderImage">
              <img src={picture3} alt="no image" />
            </div>
            <div className="founderContent">
              <span>[ ABOUT OUR FOUNDERS]</span>
              <p>Our Philosophy in Simply and Quality Design</p>
              <div className="projectIcons">
                    <div className="linkHeadings">
                        {links.map((link) => (
                          <div key={link.id} className="link" style={{cursor: 'pointer',border: selectedLink === link.id ? '' : '1px solid transparent',}}
                            onClick={() => handleLinkClick(link.id)}>
                            <p className='linkHeading'>{link.name}</p>
                          </div>
                        ))}
                    </div>

                  <div className="linkContent">
                      {selectedLink !== null && (
                        <div className="linkContents">
                          {links.find((link) => link.id === selectedLink)?.content}
                        </div>
                       )}
                </div>
              </div>
            </div>
        </div>
      

        <div className="works">
          <div className="workContent">
                <span>[ HOW IT WORKS ]</span>
                <p>From Sketch to Life</p>
                <span className='dots'>.....................</span>
                <details>
                    <summary>What is 3D desing and how it work?</summary>
                  
                    <div className='summeryContent'>
                    3D design in architecture is a dynamic process that involves creating three-dimensional representations of architectural projects. It allows architects to visualize and communicate their ideas more vividly. Architects use specialized software to build virtual models of buildings, interiors, and landscapes, enabling them to assess spatial relationships, lighting, and aesthetics with precision.
                    </div>

                </details>
                <details>
                    <summary>How interior design is cost?</summary>
                  
                    <div className='summeryContent'>
                    Interior design costs can vary widely depending on several factors, including the scope of the project, the level of customization, and the designer's expertise. Typically, interior designers charge based on a combination of hourly rates, fixed fees, or a percentage of the total project cost. 
                    </div>

                </details>
                <details>
                    <summary>How much time I will spend on planning?</summary>
                  
                    <div className='summeryContent'>
                    The amount of time spent on planning for an architectural project can vary significantly based on the project's complexity, size, and specific requirements. Small residential projects may require a few weeks of planning, while large commercial or institutional projects can take several months or even years to complete the planning phase.
                    </div>

                </details>
                <details>
                    <summary>Can I create custom design?</summary>
                  
                    <div className='summeryContent'>
                    Absolutely, at Desire to Design Architects, we specialize in creating custom design solutions tailored to your unique vision and needs. Our team of talented architects is dedicated to bringing your ideas to life, ensuring that every aspect of your project reflects your individuality and preferences.
                    </div>

                </details>
            
          </div>
          <div className="workImage">
            <img src={picture25} alt="no image" />
          </div>
        </div>

        <div className="dashboardContent">
          <div className="content">
            <span>[ 100+ ]</span>
            <p>CURRENT CLIENTS</p>
          </div>
          <div className="content">
            <span>[ 17+ ]</span>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="content">
            <span>[ 35+ ]</span>
            <p>NO.OF EMPLOYEES</p>
          </div>
          <div className="content">
            <span>[ 2+ ]</span>
            <p>OFFICES WORLDWIDE</p>
          </div>
        </div>
       </div>

       <Footer/>
    
    </>
  )
}

export default About