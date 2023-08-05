import {BsGithub , BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {FiLinkedin , FiYoutube} from 'react-icons/fi';

const LeftSide = () => {
    return (
        <div className='w-full h-full flex flex-col justify-end gap-5 items-center'>
           <div className='flex flex-col gap-5'>
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><BsGithub size={22}/></span>
            </a>
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><CiFacebook size={22}/></span>
            </a>
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><FiLinkedin size={22}/></span>
            </a>
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><FiYoutube size={22}/></span>
            </a>
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><BsInstagram size={22}/></span>
            </a>
           </div>
           <div className='w-[2px] h-32 bg-textDark'></div>
        </div>
    );
};

export default LeftSide;