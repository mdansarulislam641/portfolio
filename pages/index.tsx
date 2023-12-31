import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import {motion} from 'framer-motion';
import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Resume from "@/components/Resume";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import ResponsiveMenu from "@/components/ResponsiveMenu";
export default function Home() {
  return (
    <>
      <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Md Ansarul Islam</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <main className="w-full h-screen bg-bodyColor text-textLight font-bodyFont overflow-x-hidden overflow-y-scroll">
       <div className="sticky top-0 z-50">
       <Navbar />
       </div>
        {/* banner section start */}
        <div className="w-full h-[88vh] xl:flex gap-20 justify-between items-center">
          <motion.div
          initial={{x:-20 , opacity:0}}
          animate ={{x: 0 , opacity: 1}}
          transition={{duration:1,delay: 1.5}}
          className="hidden xl:inline-flex fixed bottom-0 left-0  w-32 h-full">
            <LeftSide/>
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner/>
            <About/>
            <Service/>
          
            <Projects/>
            <Resume/>
            <ContactMe/>
          <Footer/>
          </div>
          <motion.div
          initial={{x:20 , opacity:0}}
          animate ={{x: 0 , opacity: 1}}
          transition={{duration:1,delay: 1.5}} className="hidden xl:inline-flex fixed bottom-0 right-0  w-32 h-full">
            <RightSide/>
          </motion.div>
          <div className="fixed lg:hidden bottom-0  w-full shadow-lg  bg-gray-900 z-50">
            <ResponsiveMenu/>
          </div>
        </div>
            <div>
            </div>
        {/* banner section end */}
      </main>
    </>
  );
}

