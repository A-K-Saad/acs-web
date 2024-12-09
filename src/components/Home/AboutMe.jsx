import aksaad from "../../assets/images/profile.png";
const AboutMe = () => {
  return (
    <>
      {/* About Me section */}
      <section>
        <p className="text-sm mb-6">00/ About</p>
        <div className="md:flex items-center md:space-x-12 lg:space-x-20">
          <div className="flex items-end pl-2 pr-8">
            <img src={aksaad} alt="A K Saad" className="md:max-w-64 h-full" />
            <div className="whitespace-nowrap [writing-mode:vertical-rl] scale-[-1] mb-3">
              <h1 className="font-signature text-3xl md:text-5xl">
                Afjalul Karim Saad
              </h1>
            </div>
          </div>
          <div>
            <div className="mb-2 mt-3 pl-2 text-base flex items-center space-x-3">
              <span className="h-[2px] w-10 bg-black"></span>
              <span>Hello! myself,</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-zinc-800">
              Saad
            </h1>
            <p className="lg:text-lg text-zinc-600 max-w-3xl leading- font-light mb-6">
              Passionate Full-stack Web Developer based in Bangladesh. Crafting
              aesthetic, performant Web Applications that provide seamless user
              experiences. <br /> <br />
              Studying in 11th grade in Secondary High School. Interested in
              Science, passionate in Technology. Knowledge is my hobby. Love
              creating creative web application.
            </p>
            <div className="mb-2 mt-3 pl-2 text-base flex items-center space-x-3">
              <span className="h-[2px] w-10 bg-black"></span>
              <span>Get in Touch</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
