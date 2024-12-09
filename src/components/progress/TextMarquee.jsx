const TextMarquee = ({ text }) => {
  return (
    <div className="relative flex w-full overflow-hidden font-sohne lg:pb-5 leading-none">
      <div className="animate-marquee whitespace-nowrap lg:text-[20rem] md:text-[15rem] text-[13rem] leading-none">
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
      </div>

      <div className="absolute left-0 animate-marquee2 whitespace-nowrap lg:text-[20rem] md:text-[15rem] text-[13rem]">
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
        <span className="outline-text mx-4 uppercase tracking-wider">
          {text} -
        </span>
      </div>
    </div>
  );
};

export default TextMarquee;
