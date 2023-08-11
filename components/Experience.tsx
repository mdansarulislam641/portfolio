import { bootstrap, chrome, css, express, firebase, git, github, html, js, mongo, mozila, next, node, react, tailwind, typescript, vs } from "@/public";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {motion} from 'framer-motion';
const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-contentContainer  mx-auto  py-10 lgl:py-20 px-4"
    >
      <SectionTitle title="What Skill I Have
Experience" titleNo="02" />
      <div className="max-w-containerSmall my-10 mx-auto  grid   grid-cols-1 lg:grid-cols-2  gap-x-8 gap-y-10">
        {/* front end development  */}
        <motion.div
        initial={{opacity: 0 , x: -500}}
        animate={{opacity:1 , x: 0}}
        transition={{duration:0.8 , delay: .5}}
        className="border border-textLight bg-textDark/10 transition-all duration-500 py-5  px-6 rounded-lg hover:bg-transparent">
          <h2 className="text-textLight text-xl mb-5 md:text-2xl text-center">
            Frontend Development
          </h2>
          <ul className="grid grid-cols-2 justify-evenly gap-5 ">
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={html} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">HTML (Expert)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={css} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">CSS (Expert)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={bootstrap} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Bootstrap (Expert)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={tailwind} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Tailwind (Expert)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={js} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Tailwind (Mid-Level)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={react} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">React (Mid-Level)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={typescript} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Typescript (Mid)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={next} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Next JS (Mid-Level) </span>
            </li>
          </ul>
        </motion.div>
        {/* back end development  */}
        <motion.div 
         initial={{opacity: 0 , x: 500}}
         animate={{opacity:1 , x: 0}}
         transition={{duration:0.8 , delay: .5}}
        className="border-[.5px] border-textLight bg-textDark/10 transition-all duration-500 py-5  px-6 rounded-lg hover:bg-transparent">
          <h2 className="text-textLight text-xl mb-5 md:text-2xl text-center">
            Back-End Development
          </h2>
          <ul className="grid grid-cols-2 justify-evenly gap-5 ">
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={typescript} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Typescript (Mid)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={node} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Node js (Basic)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={express} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Express (Mid-Level)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={mongo} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">MongoDB (Mid)</span>
            </li>
          </ul>
        </motion.div>

         {/* Tools  */}
         <motion.div 
          initial={{opacity: 0 }}
          animate={{opacity:1 }}
          transition={{duration:0.8 , delay: .5}}
         className="border border-textLight bg-textDark/10 transition-all duration-500 py-5 px-6 rounded-lg hover:bg-transparent">
          <h2 className="text-textLight text-xl mb-5 md:text-2xl text-center">
            Necessary Tools & Platform
          </h2>
          <ul className="grid grid-cols-2 justify-evenly gap-5 ">
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={vs} alt="html-logo" />{" "}
              <span className="text-textLight text-sm md:text-base">VS Code (Expert)</span>
            </li>
            
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={github} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Github (Mid-Level)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={git} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Git (Expert)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={chrome} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Chrome (Expert)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={mozila} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Mozila (Mid)</span>
            </li>
            <li className="flex md:px-3 px-1 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={firebase} alt="html-logo" />{" "}
              <span className="text-sm md:text-base text-textLight">Firebase (Mid)</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
