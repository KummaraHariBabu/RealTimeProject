import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Cources from './Components/Cources'
import User from './Components/User'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cources' element={<Cources/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App