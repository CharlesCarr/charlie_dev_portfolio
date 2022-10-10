import { FaGithub, FaLinkedin } from "react-icons/fa";

const MainSub = () => {
  const clickHandler = () => {
    window.open("https://github.com/CharlesCarr");
  };

  return (
    <div className="h-16 w-full rounded-md bg-neutral-600 mt-24 flex justify-between items-center">
      <div className="w-3/4 h-full flex justify-center items-center border-r-2 border-neutral-100">
        <p className="underline text-sm text-neutral-100 tracking-wider font-thin cursor-pointer">
          View My Projects Below
        </p>
      </div>

      <div className="flex justify-center items-center px-6 h-full">
        <div
          className="flex justify-center items-center h-9 w-9 bg-neutral-800 mr-3 rounded-full cursor-pointer"
          onClick={() => clickHandler()}
        >
          <FaGithub className="w-5 h-5 text-neutral-100" />
        </div>
        <div className="flex justify-center items-center h-9 w-9 bg-neutral-800 rounded-full cursor-pointer">
          <FaLinkedin className="w-5 h-5 text-neutral-100" />
        </div>
      </div>
    </div>
  );
};

export default MainSub;
