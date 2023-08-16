import { Project } from "@/public/types/projectDetailsType";
import { projectData } from "../pages/projectDatas";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {BsFillSendFill ,BsGithub } from 'react-icons/bs'
interface ProjectDetailProps {
  project: Project;
}
const ProjectDetailPage: React.FC<ProjectDetailProps> = ({ project }) => {
  const {
    name,
    related,
    about,
    github,
    id,
    image,
    liveLink,
    screenShortImage,
    technology,
  } = project;
  const width = "1000";
  const height = "100";
  return (
    <section className="w-full h-screen bg-bodyColor text-textLight font-bodyFont overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="max-w-contentContainer my-24 mx-auto flex flex-col lg:flex-row shadow-cardShadow px-5 py-5 rounded-xl gap-5 justify-around group relative">
        {/* img  */}
        <div className="w-full flex flex-col justify-center flex-1">
          <div className="content ">
            <div className="screen ">
              <Image
                width={width}
                height={height}
                layout="responsive"
                src={image}
                alt="event-mart"
              />
            </div>
          </div>
        </div>
        {/* text  */}
        <div className="flex-1">
          <h3 className="text-3xl lg:text-4xl text-textGreen font-semibold">
            {name}
          </h3>
          <h4 className="text-xl mdl:text-2xl text-textL">{related}</h4>
          <ul className="text-sm my-2 font-semibold">
            {
              about.map((a, idx)=>  <li key={idx}>{idx + 1}. {a}</li>
              )
            }
          </ul>
            {/* technology  */}
            <h5 className="text-textGreen m-1">technology used</h5>
            <ul className="flex flex-wrap gap-3 text-sm justify-start">
              {
                technology.map((tech , idx) => <li className="shadow-cardShadow bg-gray-700 px-2 py-2 rounded-xl text-gray-300" key={idx}>{tech}</li>)
              }
            </ul>
          
                  </div>
     
              {/* after  */}
              <div className="absolute -bottom-20 rounded-lg  -translate-x-[50%] left-[50%] bg-bodyColor shadow-cardShadow w-[80%] md:w-[70%] lgl:w-[40%] h-20 flex items-center justify-evenly ">
               <a href={liveLink} target="_blank">
               <button className="shadow-cardShadow p-3 rounded-lg hover:bg-hoverColor transition-all duration-300 flex  items-center gap-1 uppercase "><BsFillSendFill className="text-textGreen"/><span>Live Live</span></button>
               </a>
               <a href={github} target="_blank">
               <button className="shadow-cardShadow p-3 rounded-lg hover:bg-hoverColor transition-all duration-300  flex  items-center gap-1 uppercase "><BsGithub className="text-textGreen"/><span>Code Link</span></button>
               </a>
             
              </div>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProjectDetailProps
> = async (context) => {
  console.log(context, "context");
  const projectId = context.params?.id;
  const project = projectData.find((p: Project) => p.id === Number(projectId));

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetailPage;
