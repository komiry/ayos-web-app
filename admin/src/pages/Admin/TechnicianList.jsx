import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const TechnicianList = () => {
  const { technician, changeAvailability, aToken, getAllTechnician } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllTechnician(); 
    }
  }, [aToken, getAllTechnician]); 

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Technicians</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {technician.length > 0 ? (
          technician.map((item, index) => (
            <div className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
              <img className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500' src={item.image} alt={item.name} />
              <div className='p-4'>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input
                    onChange={() => changeAvailability(item._id)}
                    type="checkbox"
                    checked={item.available}
                  />
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No technicians available</p>
        )}
      </div>
    </div>
  );
};

export default TechnicianList;
