import Image from "next/image";
import Headshot from "../../images/headshot.jpeg";
import { FaMapPin, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function LeftSection() {
  return (
    <section className="w-1/4 h-full flex flex-col border-r-4 border-black border-0 px-12 py-6 bg-[#acafb5]">
      <div className="w-full h-1/2 flex flex-col justify-center items-center relative">
        <Image src={Headshot} layout="fill" objectFit="cover" className="rounded-full" />
      </div>

      <div className="w-full h-1/2 flex flex-col justify-between items-center border-4 border-black mt-10 p-6 shadow-inner bg-[#ced1d3]">
        <p className="text-3xl mb-2 tracking-wide">CHARLIE CARR</p>
        <ul className="w-full flex justify-center items-center m-0 p-0">
          <li className="mr-3">
            <FaLinkedin className="w-6 h-6 cursor-pointer" />
          </li>
          <li className="mr-3">
            <FaGithub className="w-6 h-6 cursor-pointer" />
          </li>
          <li className="">
            <GrMail className="w-6 h-6 cursor-pointer" />
          </li>
        </ul>
        <div className="w-full flex justify-between items-center mt-3">
          <p className="font-light">Software Developer</p>
          <div className="flex items-center justify-center">
            <FaMapPin className="text-red-600 w-4 h-4" />
            <p className="ml-px">NYC</p>
          </div>
        </div>

        <div className="w-full h-4 border-b-2 border-black"></div>

        <ul className="w-full list-disc m-0 p-0 mt-3 ml-10">
          <li className="text-xs font-light mb-2">
            Prev. Front End Intern @ Revelio Labs
          </li>
          <li className="text-xs font-light mb-2">React / TypeScript Enthusiast</li>
          <li className="text-xs font-light">Customer Focused</li>
        </ul>
      </div>
    </section>
  );
}

export default LeftSection;
