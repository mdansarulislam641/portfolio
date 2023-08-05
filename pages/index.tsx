import LeftSide from "@/components/LeftSide";
import MiddleArea from "@/components/MiddleArea";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Md Ansarul Islam</title>
      </Head>
      <main className="w-full h-screen bg-bodyColor text-textLight font-bodyFont overflow-x-hidden overflow-y-scroll">
        <Navbar />
        {/* banner section start */}
        <div className="w-full h-[88vh] xl:flex gap-20 justify-between items-center">
          <div className="hidden xl:inline-flex fixed bottom-0 left-0  w-32 h-full">
            <LeftSide/>
          </div>
          <div>
            <MiddleArea/>
          </div>
          <div className="hidden xl:inline-flex fixed bottom-0 right-0  w-32 h-full">
            <RightSide/>
          </div>
        </div>
        {/* banner section end */}
      </main>
    </>
  );
}

