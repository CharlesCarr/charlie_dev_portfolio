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
    <div className="text-sm">
      <div className="w-100 flex justify-center items-center">
        <Image
          alt="headshot"
          src={Headshot}
          width={150}
          height={150}
          objectFit="contain"
        />
      </div>
      <div className="w-100">
        <div className="w-100 flex justify-center items-center">
          <h1 className="text-white grow">{title}</h1>
          <div className="flex justify-center items-center">
            <LinkIcon className="text-4xl" />
            <FaGithub className="text-4xl ml-2" />
          </div>
        </div>

        <p className="text-xs">{description}</p>
        <div className="flex">
          {tech.map((t: string) => {
            return <p className="text-xs">{t}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
