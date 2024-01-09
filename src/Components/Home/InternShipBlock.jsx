import { useState } from "react";
import internimg1 from "../../Assets/image/internship-explore.webp";
import internimg2 from "../../Assets/image/job-program-explore.webp";
import internimg3 from '../../Assets/image/skill-course-explore.webp';
import "../../Styles/home/internshipBlock.css"

const InternShipBlock = () => {
  const [selectedLink, setSelectedLink] = useState('');

  const links = [
    { id: 1, name: 'Skill Courses', content: [<h3>Learn Your Way To Success With <span className='span-text'>150+</span> Skill Courses.</h3>, 'New Courses Every', 'On-Demand Industry Skills', 'Completion Certificate', <button>Explore Courses</button>], img: internimg3 },
    { id: 2, name: 'Internship programs', content: [<h3>Upskill And Get A <span className="span-text">Guaranteed </span>Internship.</h3>, 'Industry Approved Self-Paced Content','Realtime Projects & Case Studies','NSDC Certificate & Internship Opportunities', <button>Explore Programs</button>], img: internimg1 },
    { id: 3, name: 'Job Programs', content: [<h3>Learn While We Get You <span className="span-text">Job-Ready.</span></h3>, 'Cohort based Live Classes', 'Career Assistance & Placements' ,'Industry Case Studies and Capstone Projects', <button>Apply Now</button>],img: internimg2 },
  ];

  const handleLinkClicked = (linkId) => {
    setSelectedLink(linkId);
  }

  return (
    <div className="internshipblock-page">
      <div className="internship-blocks">
        <h2>Explore<span className='span-text'>.</span> Upskill<span className='span-text'>.</span> Build</h2>
           <div className="programLinks">
            <div className="linkHeadings">
              {links.map((link) => (
                <div
                  key={link.id}
                  className='link'
                  style={{
                    cursor: 'pointer',
                    border: selectedLink === link.id ? '' : '1px solid transparent'
                  }}
                  onClick={() => handleLinkClicked(link.id)}
                >
                  <p className='linkHeading'><span className="linksHeaders">{link.name}</span></p>
                </div>
              ))}
            </div>
            <div className="linkContent">
              {selectedLink !== null && (
                <div className='linkContents'>
                  <ul>
                    {links.find((link) => link.id === selectedLink)?.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <img src={links.find((link)=> link.id === selectedLink) ?.img} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>

    </div>
  )
}

export default InternShipBlock;
