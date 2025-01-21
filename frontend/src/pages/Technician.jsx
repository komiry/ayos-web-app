import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Technician = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { technician } = useContext(AppContext) || [];

  const applyFilter = () => {
    if (technician && Array.isArray(technician)) {
      if (speciality) {
        setFilterDoc(technician.filter(doc => doc.speciality === speciality));
      } else {
        setFilterDoc(technician);
      }
    }
  };  

  useEffect(() => {
    applyFilter()
  }, [technician, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the technician expertise.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Phone_Technician' ? navigate('/technician') : navigate('/technician/Phone_Technician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Phone_Technician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Phone Technician</p>
          <p onClick={() => speciality === 'Plumber ' ? navigate('/technician') : navigate('/technician/Plumber ')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Plumber ' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Plumber</p>
          <p onClick={() => speciality === 'Aircon_Repair' ? navigate('/technician') : navigate('/technician/Aircon_Repair')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Aircon_Repair' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Aircon Repair</p>
          <p onClick={() => speciality === 'Carpenter' ? navigate('/technician') : navigate('/technician/Carpenter')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Carpenter' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Carpenter</p>
          <p onClick={() => speciality === 'Painter' ? navigate('/technician') : navigate('/technician/Painter')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Painter' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Painter</p>
          <p onClick={() => speciality === 'Electrician' ? navigate('/technician') : navigate('/technician/Electrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Electrician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Electrician</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technician