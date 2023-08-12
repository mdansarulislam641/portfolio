import React from 'react';
import {motion} from 'framer-motion';
const Education = () => {
    return (
        <section>
            <div className=''>
                {/* card  */}
                <motion.div 
                initial={{opacity:0 , x:200}}
                animate={{opacity:1 , x:0}}
                transition={{duration:0.5 , delay: .5}}
                className=' w-full mdl:w-2/3 mx-auto shadow-cardShadow rounded-lg p-10 hover:-translate-y-5 transition-all duration-500'>
                    <h3 className='text-textLight text-xl mdl:text-2xl lgl:text-3xl'>Diploma In Computer Engineering </h3>
                    <p className='mdl:text-xl my-1'>Dinajpur Polytechnic Institute , Dinajpur</p>
                    <h5 className='text-textGreen font-bold'>CGPA : 3.79 (out of 4.00)</h5>
                    <h3 className='mdl:text-xl my-1'>Since : 2017 - 2021</h3>
                    <h4 className='mdl:text-xl my-1'>Passing Year : 2021</h4>
                </motion.div>
                {/* card  */}
                <motion.div 
                initial={{opacity:0 , x:-200}}
                animate={{opacity:1 , x:0}}
                transition={{duration:0.5 , delay: .8}}
                className=' w-full mdl:w-2/3 mx-auto shadow-cardShadow rounded-lg p-10 mt-10 hover:-translate-y-5 transition-all duration-500 '>
                    <h3 className='text-textLight text-xl mdl:text-2xl lgl:text-3xl'>SSC (Secondary School Certificate)</h3>
                    <p className='mdl:text-xl my-1'>Balancha N.A.C High School</p>
                    <h3 className='mdl:text-xl my-1'>Group : Science</h3>
                    <h5 className='text-textGreen font-bold'>CGPA : 4.73 (out of 5.00)</h5>
                    <h4 className='mdl:text-xl my-1'>Passing Year : 2017</h4>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;