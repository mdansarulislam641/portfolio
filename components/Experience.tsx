import { bootstrap, css, html, js, next, react, tailwind, typescript } from "@/public";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-contentContainer  mx-auto py-10 lgl:py-20 px-4"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="max-w-containerSmall  mx-auto  grid place-content-center  grid-cols-1 lg:grid-cols-2 gap-5">
        {/* front end development  */}
        <div className="border border-textLight bg-textDark/10 transition-all duration-500 py-5 px-10 rounded-lg">
          <h2 className="text-textLight text-xl mb-5 md:text-2xl text-center">
            Frontend Development
          </h2>
          <ul className="grid grid-cols-2 justify-evenly gap-5 ">
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={html} alt="html-logo" />{" "}
              <span className="text-textLight">HTML (Expert)</span>
            </li>
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={css} alt="html-logo" />{" "}
              <span className="text-textLight">CSS (Expert)</span>
            </li>
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={bootstrap} alt="html-logo" />{" "}
              <span className="text-textLight">Bootstrap (Expert)</span>
            </li>
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={tailwind} alt="html-logo" />{" "}
              <span className="text-textLight">Tailwind (Expert)</span>
            </li>
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={js} alt="html-logo" />{" "}
              <span className="text-textLight">Tailwind (Mid-Level)</span>
            </li>
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={react} alt="html-logo" />{" "}
              <span className="text-textLight">React (Mid-Level)</span>
            </li>
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={typescript} alt="html-logo" />{" "}
              <span className="text-textLight">Typescript (Mid)</span>
            </li>
            <li className="flex px-3 py-2 justify-center items-center gap-2 border bg-gray-900  rounded-md border-textDark">
              <Image className="w-6" src={next} alt="html-logo" />{" "}
              <span className="text-textLight">Next JS (Mid-Level) </span>
            </li>
          </ul>
        </div>
        {/* back end development  */}
        <div>
          <h2 className="text-textGreen text-2xl text-center">
            Frontend Development
          </h2>
          <ul className="flex gap-5 border border-textGreen py-5 px-5 rounded-lg">
            <li className="flex w-[25%] justify-center items-center gap-2 border bg-gray-900 py-2 rounded-md border-[#34d399]">
              <Image className="w-6" src={html} alt="html-logo" />{" "}
              <span className="text-textLight">HTML (Expert)</span>
            </li>
            <li className="flex w-[25%] justify-center items-center gap-2 border bg-gray-900 py-2 rounded-md border-[#34d399]">
              <Image className="w-6" src={html} alt="html-logo" />{" "}
              <span className="text-textLight">HTML (Expert)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
