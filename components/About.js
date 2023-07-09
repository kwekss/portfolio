import React from "react";
import aboutimage from "../public/about.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <div className="w-full md:h-screen p-2 flex items-center py-6">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-teal-600">
              About
            </p>
            <h2 className="py-4  dark:text-gray-500"> Who I am</h2>
            <p className="py-2 text-gray-600 dark:text-gray-500">
              I am a Junior Front-End Web and React Native Developer. Passionate
              about crafting engaging user experiences and bringing innovative
              ideas to life, I strive to create visually appealing and
              functional websites and mobile applications.
            </p>
            <p className="py-2 text-gray-600 dark:text-gray-500">
              With a solid foundation in front-end development, I possess a
              strong understanding of HTML, CSS, and JavaScript. I enjoy
              leveraging my knowledge of these technologies to build intuitive
              user interfaces that captivate users and provide seamless
              navigation. Whether it's coding responsive layouts or implementing
              interactive elements, I am constantly seeking opportunities to
              enhance the user journey. In addition to my expertise in web
              development, I have a growing proficiency in React Native. This
              versatile framework enables me to develop cross-platform mobile
              applications, allowing businesses to reach a wider audience. I am
              adept at utilizing React Native's component-based architecture and
              leveraging its extensive library to create native-like experiences
              on both iOS and Android platforms.
            </p>
            <p className="py-2 text-gray-600 dark:text-gray-500">
              I am an excellent team player and thrive in collaborative
              environments. I value open communication and believe that sharing
              ideas and knowledge is essential for personal and professional
              growth. I am also comfortable working independently and taking
              ownership of projects, ensuring that deadlines are met and
              objectives are achieved.
            </p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-cenrer justify-center p-4 hover:scale-105 ease-in duration-300 dark:shadow-none">
            <Image src={aboutimage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
