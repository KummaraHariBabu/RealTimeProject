import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Cources from './Components/Cources'
import User from './Components/User'
import About from './Components/About'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Home from './Components/Home'
import Forgotpassword from './Components/Password/Forgotpassword'
import NewPassword from './Components/Password/NewPassword'
import Confirmation from './Components/Password/Confirmation'
import InternShipPrograms from './Components/Home/InternShipPrograms'

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cources' element={<Cources/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword' element={<Forgotpassword/>} />
          <Route path='/newpassword' element={<NewPassword/>} />
          <Route path='/confirmation' element={<Confirmation/>}/>
          <Route path='/internshipprograms' element={<InternShipPrograms/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App