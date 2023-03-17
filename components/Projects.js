import beemaImg from "../public/projects/beema.png";
import huddleImg from "../public/projects/huddle.png";
import weatherappImg from "../public/projects/weatherapp.png";
import cryptobaseImg from "../public/projects/cryptobase.png";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div>
      <div className="w-full mt-10">
        <div className="max-w-[1240px] mx-auto px-2 py-10">
          <p className="text-xl tracking-widest uppercase text-teal-600">
            Projects
          </p>
          <h2 className="py-4 dark:text-gray-500">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Beema UI"
              backgroundImg={beemaImg}
              projectUrl="/beema"
            />
            <ProjectItem
              title="Weather Application"
              backgroundImg={weatherappImg}
              projectUrl="/weather"
            />
            <ProjectItem
              title="Huddle UI"
              backgroundImg={huddleImg}
              projectUrl="/huddle"
            />
            <ProjectItem
              title="Cryptobase"
              backgroundImg={cryptobaseImg}
              projectUrl="/cryptobase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
