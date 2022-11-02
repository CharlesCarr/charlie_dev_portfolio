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
    <div className="h-full w-full border border-black flex justify-center items-center p-6">
      {/* left side project */}
      <div className="w-1/3 h-full border flex flex-col justify-between items-center py-6 px-4">
        <h1 className="font-bold mb-2 text-2xl">{title}</h1>
        <div className="w-full h-1 border-t border-black mb-2"></div>
        <p className="text-sm text-center leading-6 px-3">{description}</p>
        <div className="w-full h-4 border-t border-black mt-2"></div>
        <ul className="m-0 p-0 w-full flex justify-center items-center">
          <li>
            <FaGithub className="w-8 h-8 mr-3 cursor-pointer" onClick={() => gitHubClickHandler()} />
          </li>
          <li>
            <LinkIcon className="w-8 h-8 ml-3 cursor-pointer" onClick={() => demoClickHandler()} />
          </li>
        </ul>
      </div>

      {/* right side project */}
      <div className="w-2/3 h-full border flex flex-col items-center justify-center p-4">
        {/* change to video soon */}
        <div className="w-full h-3/4 border border-black flex justify-center items-center">
          <Image src={image} height={"225"} width={"450"} />
        </div>
        <ul className="w-full h-1/4 border border-black flex justify-around items-center">
          {tech.map((t: string) => (
            <li>{t}</li>
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
