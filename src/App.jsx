import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./db/sdk";
import AboutMe from "./components/Home/AboutMe";
import Contact from "./components/Home/Contact";
import Navigation from "./components/Home/Navigation";
import Projects from "./components/Home/Projects";
import Skills from "./components/Home/Skills";

const App = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    }, 0);
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="container m-auto px-4 lg:px-12">
        <Navigation />
        <main className="py-5 md:py-10 space-y-24">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default App;
