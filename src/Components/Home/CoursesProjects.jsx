import React from 'react'
import courseimg from "../../Assets/Home/course.jpg";
import projectimg from "../../Assets/Home/projects.jpg"
import "../../Styles/home/coursesprojects.css"

const CoursesProjects = () => {
  return (
    <div className="courses-projects-page">
        <h1>Courses & Projects</h1>
        <div className="courses-block">
            <div className="projects-block">
                <img src={courseimg} alt="" />
                <button className="pro-btn">Apply for Courses</button>
            </div>
            <div className="projects-block">
                <img src={projectimg} alt="" />
                <button className="pro-btn">Apply for Projects</button>
            </div>
            {/* <div className="projects-block">
                <img src="" alt="" />
                <button className="pro-btn"></button>
            </div> */}
        </div>
    </div>
   )
}

export default CoursesProjects