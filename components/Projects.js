import beemaImg from "../public/projects/beema.png";
import huddleImg from "../public/projects/huddle.png";
import nextImg from "../public/projects/next.png";
import ninjaImg from "../public/projects/ninja.png";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div>
      <div id="projects" className="w-full mt-10">
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
              title="Next Website"
              backgroundImg={nextImg}
              projectUrl="/next"
            />
            <ProjectItem
              title="Huddle UI"
              backgroundImg={huddleImg}
              projectUrl="/huddle"
            />
            <ProjectItem
              title="Ninja List"
              backgroundImg={ninjaImg}
              projectUrl="/ninja"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
