import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/Contact";
import Navigation from "../components/Home/Header";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="px-4 md:px-14 lg:px-24 py-5 md:py-10 space-y-24">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
