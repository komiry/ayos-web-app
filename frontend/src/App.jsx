import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Technician from './pages/Technician'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import FindJobs from './pages/FindJobs'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm :mx-[10%]'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/technician' element={<Technician/>}/>
      <Route path='/technician/:expertise' element={<Technician/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/my-appointment' element={<MyAppointment/>}/>
      <Route path='/find-jobs' element={<FindJobs/>}/>
      <Route path='/appointment/:techId' element={<Appointment/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
