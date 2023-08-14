import {motion} from 'framer-motion';
import Image from 'next/image';
import profile from '../public/assets/images/homeprofil.png'
const Banner = () => {
    return (
      <section id='home' className='max-w-contentContainer mx-auto flex items-center gap-5'>
        
          <div  className=' flex flex-col  mx-auto mdl:py-24 gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
          <motion.h3
          initial={{y:10 , opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: .5 , delay: .6}}
          className='text-lg font-titleFont tracking-wide text-textGreen'>Hi , My Name is</motion.h3>
          <motion.h1
          initial={{y:10 , opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: .5 , delay: .7}}
          className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
          >Md Ansarul Haque <span className='text-textDark mt-2 lgl:mt-4 text-4xl lgl:text-5xl'>I build things for the web.</span></motion.h1>
          <motion.p 
           initial={{y:10 , opacity: 0}}
           animate={{y:0, opacity: 1}}
           transition={{duration: .5 , delay: .8}}
          className="text-base md:max-w-[650px] flex flex-col  text-textDark font-medium">
            
            I am a Web Developer with 1+ year experience in React . I have a strong foundation in a front end and also familiar to back-end development and am skilled in create user friendly and responsive web application using React and its ecosystem .{" "} 
            <a href="fgd" target='_blank'>
            <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Lear More.
            <span className='w-full absolute h-[1px] bg-textGreen left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 duration-500 transition-transform '></span>
            </span> 
            </a>
          </motion.p>
          <motion.button 
           initial={{y:10 , opacity: 0}}
           animate={{y:0, opacity: 1}}
           transition={{duration: .5 , delay: .9}}
          className='h-14 w-52 text-textGreen border font-titleFont border-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300 text-sm'>
            check out my project!
          </motion.button>
        </div>
        {/* img  */}
        <div className=' shadow-cardShadow rounded-lg h-full w-[50%]'>
          <Image src={profile} className='h-full w-full' alt='home-profile-image'/>
        </div>
      </section>
    );
};

export default Banner;