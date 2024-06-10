import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signin from './pages/Signin/Signin'
import MainDashboard from './pages/MainDashboard/MainDashboard'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signin/>}/>
          <Route path='/maindashboard' element={<MainDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App