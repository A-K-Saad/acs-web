const ProjectCard = ({ project }) => {
  return (
    <div className="lg:space-y-8 space-y-4 py-6 md:py-24 border-b">
      <div className="flex flex-col lg:items-end gap-2">
        <div className="flex lg:flex-row-reverse items-center gap-3 md:gap-6">
          <div className="bg-accent h-4 w-4 md:h-6 md:w-6 rounded-full"></div>

          <a href={project.link} target="_blank">
            <h1 className="text-4xl md:text-6xl font-rajdhani font-medium">
              {project.name}
            </h1>
          </a>
        </div>
        <div className="relative flex-1 w-full">
          <svg
            width="0"
            height="0"
            viewBox="0 0 0 0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="project__img-shape">
                <path d="M7.06497 121.349L121.349 7.06497C124.912 3.50178 129.745 1.5 134.784 1.5H1322C1332.49 1.5 1341 10.0066 1341 20.5V476.5C1341 486.993 1332.49 495.5 1322 495.5H20.5C10.0066 495.5 1.5 486.993 1.5 476.5V134.784C1.5 129.745 3.50178 124.912 7.06497 121.349Z" />
              </clipPath>
            </defs>
          </svg>
          <a href={project.link} target="_blank">
            {/* Styled project showcase hidden in small device */}
            <div
              className="relative w-full h-[30rem] hidden lg:block"
              style={{ clipPath: 'url("#project__img-shape")' }}
            >
              <img
                className="w-full h-full object-cover rounded-xl"
                src={project.img}
                alt={project.name}
              />
              <div className="absolute inset-0 bg-black/5 rounded-2xl flex items-center justify-center"></div>
            </div>
            {/* Project image for small device */}
            <div className="relative w-full h-48 md:h-auto lg:hidden">
              <img
                className="w-full h-full object-cover rounded-md"
                src={project.img}
                alt={project.name}
              />
              <div className="absolute inset-0 bg-black/5 rounded-md flex items-center justify-center"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between md:gap-6 gap-3 mb-10">
        <a href={project.link} target="_blank">
          <h1 className="md:text-5xl text-2xl font-rajdhani font-medium whitespace-pre-line">
            {project.abbr}
          </h1>
        </a>
        <a href={project.link} target="_blank">
          <p className="max-w-xl sm:text-xl font-thin text-gray-600">
            {project.excerpt}
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
