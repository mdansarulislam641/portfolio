import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";
import eventMart from '../public/assets/projectImage/event-Mart-min.png'
import laptop from '../public/assets/projectImage/reseleLaptop-min.png'
import onlineService from '../public/assets/projectImage/onlineService-min.png'
import Link from "next/link";
const Projects = () => {
  
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 pt-24 mdl:pb-24">
      <SectionTitle title="Some things i have build" titleNo="03" />
    <div className="grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 gap-10 my-16">
        {/* PROJECT 1 */}
        <div className="shadow-cardShadow px-3 py-5 rounded-xl">
        <div className="w-full flex flex-col justify-center">
        <div className='content'>
       <div className='screen '>
                <Image className='w-full h-[100px]'  src={eventMart} alt="event-mart" />
            </div>
       </div>
        </div>
        <div className="my-2">
          <h2 className="text-textGreen text-xl">Event Mart</h2>
          <h4 className="text-textLight my-2 text-[22px] mdl:text-[30px]">Event Booking Website</h4>
          <div className="flex justify-between shadow-cardShadow px-4 py-2 rounded-2xl">
            <Link href="/1">
            <button className="flex items-center gap-1 shadow-cardShadow px-2 py-2 rounded-lg hover:bg-hoverColor transition-all duration-400"><FaCircleInfo/><span>View Details</span></button></Link>
            <a href="https://event-app-pi.vercel.app/" target="_blank">
            <button className="flex items-center gap-1 shadow-cardShadow px-2 py-2 rounded-lg hover:bg-hoverColor transition-all duration-400"><MdOutlineLiveTv/><span>Live Site</span></button></a>
          </div>
        </div>
        </div>
        
        {/* PROJECT 2 */}
        <div className="shadow-cardShadow px-3 py-5 rounded-xl">
        <div className="w-full flex flex-col justify-center">
        <div className='content'>
       <div className='screen-project-1 '>
                <Image className='w-full h-[100px]'  src={laptop} alt="event-mart" />
            </div>
       </div>
        </div>
        <div className="my-2">
          <h2 className="text-textGreen text-xl">Resale Laptop</h2>
          <h4 className="text-textLight my-2 text-[22px] mdl:text-[30px]">Reselling Laptop Website</h4>
          <div className="flex justify-between shadow-cardShadow px-4 py-2 rounded-2xl">
            <Link href='2'>
            <button className="flex items-center gap-1 shadow-cardShadow px-2 py-2 rounded-lg hover:bg-hoverColor transition-all duration-400"><FaCircleInfo/><span>View Details</span></button></Link>
            <a href="https://resell-product.web.app/" target="_blank">
            <button className="flex items-center gap-1 shadow-cardShadow px-2 py-2 rounded-lg hover:bg-hoverColor transition-all duration-400"><MdOutlineLiveTv/><span>Live Site</span></button></a>
          </div>
        </div>
        </div>
        
        {/* PROJECT 3 */}
        <div className="shadow-cardShadow px-3 py-5 rounded-xl">
        <div className="w-full flex flex-col justify-center">
        <div className='content'>
       <div className='screen-project-3 '>
                <Image className='w-full h-[100px]'  src={onlineService} alt="event-mart" />
            </div>
       </div>
        </div>
        <div className="my-2">
          <h2 className="text-textGreen text-xl">Event Mart</h2>
          <h4 className="text-textLight my-2 text-[22px] mdl:text-[30px]">Event Booking Website</h4>
          <div className="flex justify-between shadow-cardShadow px-4 py-2 rounded-2xl">
            <Link href="3">
            <button className="flex items-center gap-1 shadow-cardShadow px-2 py-2 rounded-lg hover:bg-hoverColor transition-all duration-400"><FaCircleInfo/><span>View Details</span></button></Link>
            <a href="https://genius-cart-6d01c.web.app/" target="_blank">
            <button className="flex items-center gap-1 shadow-cardShadow px-2 py-2 rounded-lg hover:bg-hoverColor transition-all duration-400"><MdOutlineLiveTv/><span>Live Site</span></button></a>
          </div>
        </div>
        </div>
         {/* <></> */}
        
        </div>
    </section>
  );
};

export default Projects;
