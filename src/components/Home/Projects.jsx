import { useState } from "react";
import ProjectCard from "./ProjectCard";
import foodie from "../../assets/images/foodieS.png";
import socioHood from "../../assets/images/socio-hood.png";
import { VscLinkExternal } from "react-icons/vsc";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Foodie",
      abbr: "E-commerce Website",
      img: foodie,
      excerpt:
        "E-commerce website for helping people order their daily necessary foods online. User-friendly ui and personalized dashboard. Secured with razorpay payment.",
      link: "https://foodie-mart.web.app/",
    },
    {
      id: 2,
      name: "Socio Hood",
      abbr: "Social Network Platform",
      img: socioHood,
      excerpt:
        "A simple social media website for being connected with people online. Easy to use and available general social media features.",
      link: "https://diffwebforsocialnetwork.netlify.app/",
    },
  ]);
  return (
    <>
      <section>
        <p className="text-sm mb-6">02/ Projects</p>
        <div className="max-w-6xl mx-auto md:px-6 pb-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <a
          href="https://github.com/A-K-Saad?tab=repositories"
          target="_blank"
          className="px-10 py-3 rounded-full bg-accent text-white shadow-xl flex items-center justify-center w-max hover:bg-[#5c2750] transition-all m-auto"
        >
          <VscLinkExternal className="text-2xl mr-2" />
          View More Projects
        </a>
      </section>
    </>
  );
};

export default Projects;
