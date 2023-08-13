import React from 'react';
import {BsGithub , BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {FiLinkedin , FiYoutube} from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className='
        py-20 text-center max-w-container' >
           <div className=''>
           <h2 className='text-textGreen text-2xl mdl:text-3xl lgl:text-5xl text-extrabold font-bold'><a href="#home">MD ANSARUL HAQUE</a></h2>
         
           <p className='text-white my-2'>12/08/2023</p>
           <div>
            <div className="flex justify-center gap-5 pt-2 z-40">
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><BsGithub size={22}/></span>
            </a>
             
            <a href="https://www.facebook.com/md.ansarulislam.641/" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><CiFacebook size={22}/></span>
            </a>
            <a href="https://www.linkedin.com/in/md-ansarul-haque/" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><FiLinkedin size={22}/></span>
            </a>
            <a href="https://www.youtube.com/channel/UCObZ5J2bfiHqsE7iNYGhvUA" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><FiYoutube size={22}/></span>
            </a>
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><BsInstagram size={22}/></span>
            </a>
              
            </div>
                   <p className='text-white my-2'>  copyright Md Ansarul Haque</p>
           </div>
           </div>
        </footer>
    );
};

export default Footer;