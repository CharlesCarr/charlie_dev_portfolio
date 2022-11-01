import { FaGithub, FaLinkedin } from "react-icons/fa";

const MainSub = () => {
  const clickHandler = () => {
    window.open("https://github.com/CharlesCarr");
  };

  return (
    <div className="h-16 w-full rounded-md bg-neutral-600 mt-24 flex justify-between items-center relative">
      <div className="absolute -bottom-20 left-10 w-52 h-52 bg-teal-100 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-hBlob"></div>

      <div className="w-3/4 h-full flex justify-center items-center border-r-2 border-neutral-100">
        <p className="underline text-sm text-neutral-100 tracking-wider font-thin cursor-pointer">
          View My Projects Below
        </p>
      </div>

      <div className="flex justify-center items-center px-3 h-full">
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
