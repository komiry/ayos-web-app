import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to AYOS, your trusted solution for connecting skilled appliance repair technicians with clients in need of reliable services. At AYOS, we understand the challenges faced by both technicians and appliance owners in locating and providing professional repair solutions efficiently.</p>
          <p>AYOS is dedicated to delivering an innovative web application designed to streamline the process of finding and hiring repair professionals. Whether you're a technician seeking to expand your client base or a homeowner in need of expert repair services, our platform is built to bridge the gap and simplify the connection process.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At AYOS, our vision is to revolutionize the appliance repair industry by creating a seamless and efficient connection between clients and skilled technicians. We aim to bridge the gap, making it easier for homeowners to access reliable repair services and for technicians to reach those who need their expertise.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trained technician in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders  to ensure both clients and technicians stay on top of their repair needs. .</p>
        </div>
      </div>

    </div>
  )
}

export default About
