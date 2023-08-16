import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {BsCodeSlash} from 'react-icons/bs';
import {FaSuitcase } from 'react-icons/fa';
import {MdCastForEducation} from 'react-icons/md';
import {BiSolidUser , BiSolidMessageDetail} from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';
const ResponsiveMenu = () => {
    const router = useRouter();
    return (
        <section>
            <ul className='w-full flex justify-evenly py-2 items-center h-full'>
                <Link href={ router.query?.id ? `/#about` : "#about"} ><li className='flex items-center flex-col justify-center'><AiFillHome className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Home</span></li></Link>
                <Link href={ router.query?.id ? `/#about` : "#about"} ><li className='flex items-center flex-col justify-center'><BiSolidUser className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>About</span></li></Link>
                <Link href={ router.query?.id ? `/#services` : "#services"}><li className='flex items-center flex-col justify-center'><BsCodeSlash className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Service</span></li></Link>

                <Link href={ router.query?.id ? `/#projects` : "#projects"}>   <li className='flex items-center flex-col justify-center'><FaSuitcase className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Project</span></li></Link>
              <Link href={ router.query?.id ? `/#resume` : "#resume"}>  <li className='flex items-center flex-col justify-center'><MdCastForEducation className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Resume</span></li></Link>
              <Link href={ router.query?.id ? `/#contact` : "#contact"}>
                <li className='flex items-center flex-col justify-center'><BiSolidMessageDetail className="w-6 md:w-7 h-6 md:h-7 text-textGreen"/> <span className='text-[14px]'>Contact</span></li></Link>  
             </ul>
         </section>
    );
};

export default ResponsiveMenu;