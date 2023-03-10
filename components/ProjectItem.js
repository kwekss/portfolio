import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w- full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-cyan-500 to-teal-500 dark:shadow-none">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-widest text-center pb-5 dark:text-gray-300">
          {title}
        </h3>

        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer dark:bg-gray-300">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
