import { HiOutlineChevronUp } from "react-icons/hi";

const BackToTopBtn = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="
      absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-black transition-all duration-500"
    >
      <HiOutlineChevronUp className="h-8 w-8 stroke-[1px]" />
    </button>
  );
};

export default BackToTopBtn;
