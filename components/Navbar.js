import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  console.log(theme);
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons  dark:text-gray-500">Kwekss</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer text-2xl  dark:text-gray-500"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="/Resume.pdf"
              download="Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
