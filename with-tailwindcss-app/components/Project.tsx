import Image from "next/image";
import { ProjectData } from "../types/ProjectData";
import Headshot from "../images/headshot.jpeg";
import { FaGithub } from "react-icons/fa";
import { LinkIcon } from "@heroicons/react/24/solid";

const Project: any = ({
  title,
  image,
  description,
  github,
  demo,
  tech,
}: ProjectData) => {
  return (
    <div className="text-sm h-screen flex flex-col justify-center items-center">
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
            return <p className="text-xs border mr-3 py-1 px-3">{t}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
