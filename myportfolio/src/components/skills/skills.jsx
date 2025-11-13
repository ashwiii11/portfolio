import React from 'react'
import {FaCss3,FaFigma,FaHtml5,Fajs,FaReact, FaJs} from 'react-icons/fa';
import {SiRadis} from 'react-icons/si';
import {FaGoogle} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';


const skills = () => {
  return (
    <div id="skills" classname="p-10 md:p-24">
        <h1 classname='text-2x1 md:text-4x1 text-white font-bold '>Skills</h1>
        <div classname='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2x1'>
                    <FAHtml5 color="#E34F26" size={50} />
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2x1'>
                    <FaCss3 color="#E34F26" size={50} />
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2x1'>
                    <FaReact color="#E34F26" size={50} />
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2x1'>
                    <FaFigma color="#E34F26" size={50} />
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2x1'>
                    <FaJs color="#E34F26" size={50} />
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2x1'>
                    <FaHtml5 color="#E34F26" size={50} />
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2x1'>
                    <FAHtml5 color="#E34F26" size={50} />
                </span>
            </div>
        </div>
      
    </div>
  )
}

export default skills
