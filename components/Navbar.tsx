import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 bg-bodyColor px-4'>
           <div className='max-w-container h-full mx-auto py-1 flex items-center justify-between font-titleFont'>
            {/* nav logo  */}
            <div className='text-[30px] font-bold'>Ansarul</div>
            {/* nav menu  */}
            <div>
                <ul className='flex gap-7 text-[15px] '>
                    <Link href="#home" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 '>
                    <li>Home</li>
                    </Link>
                    <Link href="#home" className='flex gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                    <span>01.</span>About
                    </Link>
                    <Link href="#home" className='flex gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                    <span>02.</span>Experience
                    </Link>
                    <Link href="#home" className='flex gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                    <span>03.</span>Project
                    </Link>
                    <Link href="#home" className='flex gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                    <span>04.</span>Contact
                    </Link>
                </ul>
                   
            </div>
           </div>
        </div>
    );
};

export default Navbar;