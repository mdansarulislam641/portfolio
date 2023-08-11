import SectionTitle from "./SectionTitle";
import { BsCodeSlash } from "react-icons/bs";
import { FaLayerGroup , FaReact , FaServer , FaFigma} from "react-icons/fa";
import { SiJavascript} from "react-icons/si";
const Service = () => {
  return (
    <section
      id="services"
      className="max-w-contentContainer  mx-auto  py-10 lgl:py-20 px-4"
    >
      <SectionTitle title="What Do I Provide" titleNo="02" />

      {/* service card container  */}
      <div className="w-full grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 mdl:gap-5 lgl:gap-8 my-20 gap-y-10">
        {/* card  */}
        <div className=" shadow-cardShadow rounded-lg py-8 px-7 hover:-translate-y-5 transition-all duration-500 delay-200">
          <span>
            <BsCodeSlash size={50} color="#64ffda" font="bold" className="font-bold" style={{fontStyle: 'bold'}} />
          </span>
          <h3 className="text-xl my-5 mdl:text-2xl lgl:text-[30px]  ">Frontend Development</h3>
          <p>
            I'm A Frontend Specialist. I have created many Website With Fancy
            Frontend. I can be your frontend Engineer.
          </p>
        </div>
        {/* card  */}
        <div className=" shadow-cardShadow rounded-lg p-8 hover:-translate-y-5 transition-all duration-500 delay-200">
          <span>
            <FaLayerGroup size={50} color="#64ffda" font="bold" className="font-bold" style={{fontStyle: 'bold'}} />
          </span>
          <h3 className="text-xl my-5 mdl:text-[28px]  ">  Mern Development</h3>
          <p>
        
I'm a MERN Developer .I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer.
          </p>
        </div>
        {/* card  */}
        <div className=" shadow-cardShadow rounded-lg p-8 hover:-translate-y-5 transition-all duration-500 delay-200">
          <span>
            <FaReact size={50} color="#64ffda" font="bold" className="font-bold" style={{fontStyle: 'bold'}} />
          </span>
          <h3 className="text-xl my-5 mdl:text-[28px]  ">  React Development</h3>
          <p>
        
I'm A React Developer. I have created many single page application using React.JS. I can be your React Developer.
          </p>
        </div>
        {/* card  */}
        <div className=" shadow-cardShadow rounded-lg p-8 hover:-translate-y-5 transition-all duration-500 delay-200">
          <span>
            <FaServer size={50} color="#64ffda" font="bold" className="font-bold" style={{fontStyle: 'bold'}} />
          </span>
          <h3 className="text-xl my-5 mdl:text-[28px]  "> Backend Development</h3>
          <p>
          
I'm A Backend Developer. I have created many projects Server Side Api Endpoint. I can be your Backend Developer.
          </p>
        </div>
        {/* card  */}
        <div className=" shadow-cardShadow rounded-lg p-8 hover:-translate-y-5 transition-all duration-500 delay-200">
          <span>
            <SiJavascript size={50} color="#64ffda" font="bold" className="font-bold" style={{fontStyle: 'bold'}} />
          </span>
          <h3 className="text-xl my-5 mdl:text-[28px]  "> Javascript Development</h3>
          <p>
          
I'm a Javascript Developer. I have created many website using Javascript. I can be your Javascript Developer.
          </p>
        </div>
        {/* card  */}
        <div className=" shadow-cardShadow rounded-lg p-8 hover:-translate-y-5 transition-all duration-500 delay-200">
          <span>
            <FaFigma size={50} color="#64ffda" font="bold" className="font-bold" style={{fontStyle: 'bold'}} />
          </span>
          <h3 className="text-xl my-5 mdl:text-[28px]  "> Figma To HTML</h3>
          <p>
          
I'm a Convert Figma to HTML. I have created many website Convert figma to HTML . I can be your Figma to Front-end Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
