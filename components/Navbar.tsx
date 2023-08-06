import Link from 'next/link';
import {motion} from 'framer-motion';

const Navbar = () => {
    return (
        <nav className='w-full shadow-navbarShadow h-20 lg:h-[12vh] bg-bodyColor px-4'>
           <div className='max-w-container h-full mx-auto py-1 flex items-center justify-between font-titleFont'>
            {/* nav logo  */}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}} ><h1 className='text-[20px] lg:text-[30px] font-bold'>Ansarul</h1> </motion.div>
            {/* nav menu  */}
            <div className='hidden mdl:flex items-center gap-7'>
                <ul className='flex gap-7 text-[15px] '>
                    <Link href="#home" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 '>
                    <motion.li 
                    initial={{y: -10 , opacity: 0}}
                    animate={{y:0 , opacity: 1}}
                    transition={{duration: 0.1 , delay: 0.3}}
                    >Home</motion.li>
                    </Link>
                    <Link href="#about" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                    <motion.li
                     initial={{y: -10 , opacity: 0}}
                     animate={{y:0 , opacity: 1}}
                     transition={{duration: 0.2 , delay: 0.3}}
                     className='flex gap-1'><span className='text-textGreen'>01.</span>About</motion.li>
                    </Link>
                    <Link href="#experience" className='flex gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                    <motion.li
                     initial={{y: -10 , opacity: 0}}
                     animate={{y:0 , opacity: 1}}
                     transition={{duration: 0.3 , delay: 0.3}}
                    className='flex gap-1'><span className='text-textGreen'>02.</span>Experience</motion.li>
                    </Link>
                    <Link href="#home" className='flex gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                   <motion.li
                    initial={{y: -10 , opacity: 0}}
                    animate={{y:0 , opacity: 1}}
                    transition={{duration: 0.4 , delay: 0.3}}
                   className='flex gap-1'> <span className='text-textGreen' >03.</span>Project</motion.li>
                    </Link>
                    <Link href="#home" className='flex gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 items-center'>
                  <motion.li
                   initial={{y: -10 , opacity: 0}}
                   animate={{y:0 , opacity: 1}}
                   transition={{duration: 0.5 , delay: 0.3}}
                  className='flex gap-1'>  <span className='text-textGreen'>04.</span>Contact</motion.li>
                    </Link>
                </ul>
           <a href="/MERN-Stack-Deleloper.pdf" target='_blank'>
           <motion.button
                    initial={{y: -10 ,opacity:0}}
                    animate={{y:0 , opacity:1 }}
                    transition={{duration: 0.1 , delay: .5}}
                className='px-4 py-2 rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor  duration-300'>
                    Resume
                </motion.button>
           </a>
                   
            </div>
            {/* small device section start */}
            <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform transition-all duration-300 ease-in-out group-hover:translate-x-2' ></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform transition-all duration-300 ease-in-out translate-x-3 group-hover:translate-x-0' ></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform transition-all duration-300 ease-in-out translate-x-1  group-hover:translate-x-3' ></span>
            </div>
            {/* small device section end  */}
           </div>
        </nav>
    );
};

export default Navbar;