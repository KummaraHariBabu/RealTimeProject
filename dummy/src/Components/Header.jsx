import React from 'react'
import "../Styles/header.css"
import logo from "../Assets/Logo/logoSkill.jpg"
const Header = () => {
    let hamburgerClick = ()=>{
        let x = document.getElementById("myLinks");
        if(x.style.display === "block") {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    }
  return (
    <div className='header-page'>
        <a href="/"><img src={logo} alt="" /></a>
        <div className="header menu" id='myLinks'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='cources'>Courses</a>
            <a href='/contact'>Contact</a>
            <a href="/user" className='user'><i class="bi bi-people-fill"></i></a>
        </div>
        <a className="toggle"  href="javascript:void(0);" onClick={hamburgerClick}><i class="bi bi-list"></i></a>        
    </div>
  )
}

export default Header