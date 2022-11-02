import { FaGithub } from "react-icons/fa";
import { LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Project = ({ title, image, description, github, demo, tech }: any) => {
  const gitHubClickHandler = () => {
    window.open(github);
  };

  const demoClickHandler = () => {
    window.open(demo);
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      {/* left side project */}
      <div className="w-1/3 h-full border-4 border-black flex flex-col justify-between items-center py-14 px-4 mr-2 bg-[#acafb5]">
        <h1 className="font-bold mb-2 text-2xl tracking-wide">{title}</h1>
        <div className="w-full h-1 border-t-black border-b-0 border-x-0 border-4 mb-2"></div>
        <p className="text-sm text-center leading-6 px-3">{description}</p>
        <div className="w-full h-4 border-t-black border-b-0 border-x-0 border-4 mt-2"></div>
        <ul className="m-0 p-0 w-full flex justify-center items-center">
          <li>
            <FaGithub
              className="w-8 h-8 mr-3 cursor-pointer"
              onClick={() => gitHubClickHandler()}
            />
          </li>
          <li>
            <LinkIcon
              className="w-8 h-8 ml-3 cursor-pointer"
              onClick={() => demoClickHandler()}
            />
          </li>
        </ul>
      </div>

      {/* right side project */}
      <div className="w-2/3 h-full flex flex-col items-center justify-center">
        {/* change to video soon */}
        <div className="w-full h-3/4 flex justify-center items-center border-t-black border-x-black border-b-0 border-4 relative bg-black">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
        <ul className="w-full h-1/4 flex justify-around items-center  border-4 border-black shadow-inner">
          {tech.map((t: string) => (
            <li className="font-bold text-lg tracking-wide">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;

{
  /* <div className="text-sm h-screen flex flex-col justify-center items-center">
      <div className="w-full relative border-8 h-1/2">
        <Image
          alt="headshot"
          src={Headshot}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full h-1/4">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-white grow">{title}</h1>
          <div className="flex justify-center items-center">
            <LinkIcon className="text-4xl cursor-pointer" />
            <FaGithub className="text-4xl ml-2 cursor-pointer" />
          </div>
        </div>

        <p className="text-xs mb-3">{description}</p>
        <div className="flex justify-start items-center">
          {tech.map((t: string) => {
            return <p className="text-xs border mr-3 py-1 px-3 rounded-md">{t}</p>;
          })}
        </div>
      </div>
    </div> */
}
