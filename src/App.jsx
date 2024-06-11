import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signin from './pages/Signin/Signin'
import MainDashboard from './pages/MainDashboard/MainDashboard'
import Dashboard from './components-dashboard/Dashboard/Dashboard'
import Events from './components-dashboard/Eventss/Events'
import Reports from './components-dashboard/Reports/Reports'
import Tasks from './components-dashboard/Tasks/Tasks'
import Users from './components-dashboard/Users/Users'
import Calender from './components-dashboard/Calender/Calender'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signin/>}/>
          <Route path='/maindashboard' element={<MainDashboard/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/calender' element={<Calender/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App