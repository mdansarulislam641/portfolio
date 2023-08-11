import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import images from "../public/assets/images/profile-img.JPG";
import { TbBrandGithub } from "react-icons/tb";
const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some things i have build" titleNo="03" />
      <div className="flex flex-col w-full items-center justify-center gap-28 mt-20">
        {/* project 1 */}
        <div className="flex flex-col xl:flex-row gap-6">
        
            <a href="#" className="w-[500px] xl:w-1/2 h-auto relative group">
              <div>
                <Image
                  className="w-full h-[500px] object-contain"
                  src={images}
                  alt="project-image"
                />
              </div>
            </a>
        
          <div className="w-full xl:w-1/2 flex flex-col gap-6 items-end lgl:justify-evenly text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen  text-sm tracking-wide">
              Feature Project
            </p>
            <h3 className="text-2xl font-bold">Amazon Bold</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              This is a simple view of website that take to create a new model
              in our the maintain abusive word all time avoid . a new model in
              our the maintain abusive word all time avoid
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Typescript</li>
              <li>React Js</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-2">
              <a
                href="#"
                className="hover:text-textGreen duration-500 w-10 h-10 rounded-full bg-hoverColor hover:-translate-y-2 z-20 flex items-center justify-center "
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textGreen duration-500 w-10 h-10 rounded-full bg-hoverColor hover:-translate-y-2 z-20 flex items-center justify-center "
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textGreen duration-500 w-10 h-10 rounded-full bg-hoverColor hover:-translate-y-2 z-20 flex items-center justify-center "
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
       
            <a href="#" className="w-[500px] xl:w-1/2 h-auto relative group">
              <div>
                <Image
                  className="w-full h-[500px] object-contain"
                  src={images}
                  alt="project-image"
                />
              </div>
            </a>
          
          <div className="w-full xl:w-1/2 flex flex-col gap-6 items-end lgl:justify-evenly text-left z-10">
            <p className="font-titleFont  text-textGreen  text-sm tracking-wide">
              Feature Project
            </p>
            <h3 className="text-2xl font-bold">Amazon Bold</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md  xl:-mr-16">
              This is a simple view of website that take to create a new model
              in our the maintain abusive word all time avoid . a new model in
              our the maintain abusive word all time avoid
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Typescript</li>
              <li>React Js</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-2">
              <a
                href="#"
                className="hover:text-textGreen duration-500 w-10 h-10 rounded-full bg-hoverColor hover:-translate-y-2 z-20 flex items-center justify-center "
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textGreen duration-500 w-10 h-10 rounded-full bg-hoverColor hover:-translate-y-2 z-20 flex items-center justify-center "
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textGreen duration-500 w-10 h-10 rounded-full bg-hoverColor hover:-translate-y-2 z-20 flex items-center justify-center "
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
