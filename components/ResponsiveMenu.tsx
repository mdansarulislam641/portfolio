import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {BsCodeSlash} from 'react-icons/bs';
import {FaSuitcase } from 'react-icons/fa';
import {MdCastForEducation} from 'react-icons/md';
import {BiSolidUser , BiSolidMessageDetail} from 'react-icons/bi';

const ResponsiveMenu = () => {
    return (
        <section>
            <ul className='w-full flex justify-evenly py-2 items-center h-full'>
                <a href="#home"><li className='flex items-center flex-col justify-center'><AiFillHome className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Home</span></li></a>
                <a href="#about">  <li className='flex items-center flex-col justify-center'><BiSolidUser className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>About</span></li></a>
                <a href="#service"><li className='flex items-center flex-col justify-center'><BsCodeSlash className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Service</span></li></a>
             <a href="#projects">   <li className='flex items-center flex-col justify-center'><FaSuitcase className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Project</span></li></a>
              <a href="#resume">  <li className='flex items-center flex-col justify-center'><MdCastForEducation className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Resume</span></li></a>
            <a href="#contact">  
                <li className='flex items-center flex-col justify-center'><BiSolidMessageDetail className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Contact</span></li></a>
             </ul>
         </section>
    );
};

export default ResponsiveMenu;