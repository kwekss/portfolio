import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <div>
      <div className="text-center p-10 py-10">
        <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-500">
          LET'S BUILD SOMETHING TOGETHER
        </p>
        <h1 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          John Asare
        </h1>
        <h3 className="text-2xl py-2 md:text-3xl  dark:text-gray-600">
          Front-End Web Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-600 md:text-xl max-w-lg mx-auto dark:text-gray-500">
          {" "}
          I'm a front-end web developer specializing in building exceptional
          digital experiences. I'm focussed on building responsive front-end web
          applications.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-500">
        <Link
          href="https://www.linkedin.com/in/john-asare-275863221/"
          target={"_blank"}
          rel={"noopener norefferer"}
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://github.com/kwekss"
          target={"_blank"}
          rel={"noopener norefferer"}
        >
          <AiFillGithub />
        </Link>
        <Link href="mailto:asarejohnandrews@gmail.com">
          <AiFillMail />
        </Link>
      </div>
      <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Homepage;
