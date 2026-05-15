import projects from "../data/projects";
import Tilt from "react-parallax-tilt";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="text-5xl font-bold mb-16 gradient-text">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project,index)=>(
          <Tilt key={index}>
            <div className="glass rounded-3xl overflow-hidden hover-glow">

              <img
                src={project.image}
                alt=""
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech,i)=>(
                    <span
                      key={i}
                      className="bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-sky-500 rounded-lg"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="px-5 py-2 border border-gray-500 rounded-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Projects;