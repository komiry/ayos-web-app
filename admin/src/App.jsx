import React, { useContext } from 'react'
import { TechContext } from './context/TechContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTechnician from './pages/Admin/AddTechnician';
import TechniciansList from './pages/Admin/TechnicianList';
import Login from './pages/Login';
import TechnicianAppointments from './pages/Technician/TecnicianAppointments';
import TechnicianDashboard from './pages/Technician/TechnicianDashboard';
import TechnicianProfile from './pages/Technician/TechnicianProfile';

const App = () => {

  const { dToken } = useContext(TechContext)
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
          <Route path='/add-technician' element={<Addtechnician />} />
          <Route path='/technician-list' element={<techniciansList />} />
          <Route path='/technician-dashboard' element={<technicianDashboard />} />
          <Route path='/technician-appointments' element={<technicianAppointments />} />
          <Route path='/technician-profile' element={<technicianProfile />} />
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