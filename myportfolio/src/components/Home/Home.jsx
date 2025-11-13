import React from 'react'
import avatarImg from '../../assets/7358602-removebg-preview.png'

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello' I am Ashwitha</h1>
        <p className='text-sm md:text-2xl tracking-tight'>To pursue a challenging career where I take ownership, contribute with energy, embrace challenges confidently, and deliver results with integrity for organizational growth.  

        </p>
        <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:px-4 hover:opaccity-85
        duration-300 hover:scaler-105 font-semibold rounded-3x1 bg-[#465697]'>
            Contact Me</button>

        </div>
        <div>
            <img className='' src={avatarImg} alt=""/>
        </div>
      
    </div>
  )
}

export default Home
