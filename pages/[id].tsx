import { Project } from '@/public/types/projectDetailsType';
import {projectData} from '../pages/projectDatas'
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
interface ProjectDetailProps {
    project: Project;
  }
const ProjectDetailPage : React.FC<ProjectDetailProps>= ({ project}) =>{
    const {name , related , about ,github,id,image,liveLink,screenShortImage,technology} = project ;
    return (
        <section  >
        <Navbar/>
        <div className='max-w-contentContainer my-24 mx-auto grid grid-cols-1 lg:grid-cols-2 '>

        {/* img  */}
       <div className="w-full flex flex-col justify-center">
        <div className='content'>
       <div className='screen '>
                <Image width={50} height={100} src={image} alt="event-mart" />
            </div>
       </div>
        </div>
         {/* text  */}
       <div>
        <h3>{name}</h3>
        <h4>{related}</h4>

       </div>
    </div>
    </section>
    )
};

export const  getServerSideProps : GetServerSideProps<ProjectDetailProps> = async (context ) =>{
    console.log(context, "context")
    const projectId = context.params?.id ;
    const project = projectData.find((p : Project) => p.id === Number(projectId) );
 
        if (!project) {
            return {
              notFound: true,
            };
          }
        
          return {
            props: {
              project
            },
        }
}

export default ProjectDetailPage ;