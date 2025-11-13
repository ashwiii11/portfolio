import React from 'react'
import AboutImg from '../../assets/7358653-removebg-preview.png';
import {IoArrowForward} from 'react-icons/io5';

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
   mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 '>
      <div>
        <h2 className='text-2x1 md:text-4x1 font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className='md:h-80' src={AboutImg} alt='About img'/>

            <ul>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1'/>

                    <spam className='w-96'>
                        <h1 className='text-x1 md:text-2x1 font-semibold leading-normal'>
                            Software Developer
                        </h1>
                        <p className='text-sm md:text-md leading-tight'>
                            Passionate and dedicated software developer with a strong foundation in computer science 
                            and a keen interest in building innovative solutions.
                             Proficient in various programming languages and frameworks, 
                             with hands-on experience in developing web and mobile application.
                        </p>

                        </spam>
                </div>


                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1'/>

                    <spam className='w-96'>
                        <h1 className='text-x1 md:text-2x1 font-semibold leading-normal'>
                            Frontend Developer
                        </h1>
                        <p className='text-sm md:text-md leading-tight'>
                            Passionate and dedicated software developer with a strong foundation in computer science 
                            and a keen interest in building innovative solutions.
                             Proficient in various programming languages and frameworks, 
                             with hands-on experience in developing web and mobile application.
                        </p>

                        </spam>
                </div>


                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1'/>

                    <spam className='w-96'>
                        <h1 className='text-x1 md:text-2x1 font-semibold leading-normal'>
                            Backend Developer
                        </h1>
                        <p className='text-sm md:text-md leading-tight'>
                            Passionate and dedicated software developer with a strong foundation in computer science 
                            and a keen interest in building innovative solutions.
 
                             with hands-on experience in developing web and mobile application.
                        </p>

                        </spam>
                </div>
            </ul>
        </div>

      </div>
    </div>
  );
  
};

export default About
