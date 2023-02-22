import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="py-10 mt-20 align-baseline flex justify-between">
        <h1 className="text-xl font-burtons  dark:text-gray-500">Kwekss</h1>
        <p className="text-xl font-burtons  dark:text-gray-500">
          Built By John Asare
        </p>
        <div className="text-3xl flex justify-center gap-16  text-gray-600  dark:text-gray-500">
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
      </footer>
    </div>
  );
};

export default Footer;
