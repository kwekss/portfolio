import html from "../public/skills/html.png";
import css from "../public/skills/css.png";
import github from "../public/skills/github1.png";
import javascript from "../public/skills/javascript.png";
import next from "../public/skills/nextjs.png";
import react from "../public/skills/react.png";
import tailwind from "../public/skills/tailwind.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <div id="skills" className="w-full py-10 p-2 ">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
          <p className="text-xl tracking-widest uppercase text-teal-600">
            Skills
          </p>
          <h2 className="py-4  dark:text-gray-500">What I Can Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  dark:bg-gray-700">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image src={html} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center  dark:text-gray-500">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  dark:bg-gray-700">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image src={css} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-gray-500 ">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  dark:bg-gray-700">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image src={javascript} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-gray-500">
                  <h3>JAVASCRIPT</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  dark:bg-gray-700">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image src={tailwind} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-gray-500">
                  <h3>TAILWIND</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  dark:bg-gray-700">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image src={react} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-gray-500">
                  <h3>REACT.JS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-700">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image src={next} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-gray-500">
                  <h3>NEXT.JS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-700">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image src={github} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-gray-500">
                  <h3>GITHUB</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
