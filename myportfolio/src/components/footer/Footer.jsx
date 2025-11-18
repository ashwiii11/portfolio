import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2x1 md:text-6x1 font-bold'>
                Contact Me
            </h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out!</h3>

        </div>

        <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'>
                <MdOutlineEmail size={20}/>
                ashwithaacharya11@gmail.com
            </li>
            <li className='flex gap-1 items-center'>
                <CiLinkedin size={20}/>
                 https://linkedin.com/in/ashwitha-acharya-a8478a33a

            </li>
            <li className='flex gap-1 items-center'>
                <FaGithub size={20}/>
                 github.com/ashwiii11
            </li>
            <li></li>
        </ul>
      
    </div>
  )
}

export default Footer
