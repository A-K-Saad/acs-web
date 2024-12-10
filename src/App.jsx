import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./db/sdk";

const App = () => {
  // show hashlink
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

  // smooth scroll to top on start
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
