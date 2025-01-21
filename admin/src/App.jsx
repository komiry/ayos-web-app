import React, { useContext } from 'react'
import { TechnicianContext } from './context/TechnicianContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTechnician from './pages/Admin/AddTechnician';
import TechnicianList from './pages/Admin/TechnicianList';
import Login from './pages/Login';
import TechnicianAppointment from './pages/Technician/TechnicianAppointment';
import TechnicianDashboard from './pages/Technician/TechnicianDashboard';
import TechnicianProfile from './pages/Technician/TechnicianProfile';

const App = () => {

  const { dToken } = useContext(TechnicianContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-technician' element={<AddTechnician />} />
          <Route path='/technician-list' element={<TechnicianList />} />
          <Route path='/technician-dashboard' element={<TechnicianDashboard />} />
          <Route path='/technician-appointments' element={<TechnicianAppointment />} />
          <Route path='/technician-profile' element={<TechnicianProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App