import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import profileImage from "../public/assets/images/profile.jpeg";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto pt-32 pb-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01." />
      {/* main part start  */}
      <div className="flex flex-col lgl:flex-row gap-16">
        {/* text part  */}
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello my Name is Md Ansarul Haque and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2022 when i decided to try editing PSD to html -- turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            and{" "}
            <span className="text-textLight">
              I am complete Diploma in Engineering in Dinajpur polytechnic
              institute
            </span>{" "}
            and also i got{" "}
            <span className="text-textLight">CGPA: 3.79 in scale of 4.00</span>{" "}
          </p>
          <p>Here are a few technologies i have been working recently:</p>
          <ul className="max-w-[450px]  font-titleFont grid grid-cols-2 mt-3 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next Js
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        {/* img part  */}
        <div className="w-full lgl:w-1/3  h-80 mx-auto relative group">
          <div className="absolute h-[300px] mdl:h-[350px] w-full -left-6 -top-6 rounded-lg">
            <div className="w-full  h-full relative z-20 flex justify-center pl-10  lgl:pl-0 shadow-cardShadow">
              <Image
                className="rounded-lg h-full  object-fit"
                src={profileImage}
                alt="profile-image"
              />
             
         
            </div>
                 
            <div className="hidden absolute top-7 left-6 lgl:inline-flex  w-full h-full  rounded-md border-2 border-textGreen  group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform  duration-300"></div>

          </div>
        </div>
      </div>
   
    </section> 
  );
};

export default About;
