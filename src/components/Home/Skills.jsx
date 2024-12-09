import { BiLogoMongodb } from "react-icons/bi";
import { FaCss3Alt, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiFirebaseFill, RiHtml5Fill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <RiHtml5Fill /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "ES6", icon: <IoLogoJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <BiLogoMongodb /> },
    { name: "Firebase", icon: <RiFirebaseFill /> },
  ];

  return (
    <>
      <section>
        <p className="text-sm mb-6">01/ Skills</p>
        <div className="grid grid-cols-2 md:grid-cols-3 uppercase border-t border-l">
          {skills.map((s, i) => {
            return (
              <div
                className={`p-2 md:p-4 border-b border-r hover:bg-gray-50 transition flex items-center space-x-2 md:space-x-3 text-xs md:text-base truncate ${
                  i % 2 == 0 && "bg-gray-50"
                }`}
                key={i}
              >
                <span className="text-xl md:text-3xl">{s.icon}</span>
                <span>{s.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
