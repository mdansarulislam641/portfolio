import React , {useState} from 'react'
import SectionTitle from "./SectionTitle";
import Experience from './Experience';
import Education from './Education';
import Achieve from './Achieve';
const Resume = () => {
    
    const [resume , setResume]  = useState('skill');
    
    const handleChange  = (value : string)  =>{
        setResume(value)
    }
    return (
        <section id="resume" className="max-w-container mx-auto lgl:px-20 pt-10 pb-24">
        <SectionTitle title="My Resume" titleNo="04" />

        {/* resume top btn  */}
        <div
       
        className="flex justify-center  mdl:text-2xl shadow-cardShadow my-10">
            <button onClick={()=>handleChange("skill")} className={`flex-1 ${resume === "skill" && 'shadow-cardShadow text-textGreen'} py-3 lgl:py-7 px-4 lgl:px-4`}>PROFESSIONAL SKILLS </button>
            <button onClick={()=>handleChange("education")}  className={`flex-1 ${resume === "education" && 'shadow-cardShadow text-textGreen'}  py-7 px-4`}>EDUCATION </button>
            <button onClick={()=>handleChange("achieve")}  className={`flex-1 ${resume === "achieve" && 'shadow-cardShadow text-textGreen'}  py-7 px-4`}>ACHIEVE</button>
        </div>

        {/* skills  */}
        <div>
            {resume === "skill" && <Experience/>}
            {resume === "education" && <Education/>}
            {resume === "achieve" && <Achieve/>}
        </div>


            </section>
    );
};

export default Resume;