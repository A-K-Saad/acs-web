import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/Contact";
import Navigation from "../components/Home/Navigation";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";

const Home = () => {
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

export default Home;
