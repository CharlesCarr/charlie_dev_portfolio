import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black flex px-60 py-24 text-sm">
      <div className="flex flex-col items-start w-1/2">
        <p className="text-xl mb-2">This Website</p>
        <p className="mb-2">Designed & Developed by Charlie Carr</p>
        <p className="mb-2">React, Next.js, TypeScript, Tailwind CSS</p>
        <div className="flex items-center hover:underline cursor-pointer">
          <p className="mr-2">See the Code</p>
          <FaGithub />
        </div>
      </div>

      <div className="flex flex-col items-end w-1/2">
        <p className="text-xl mb-2">Contact</p>
        <p className="mb-2">charliecarr4@gmail.com</p>
        <p className="mb-2">LinkedIn Profile</p>
        <p>GitHub Profile</p>
      </div>
    </div>
  );
};

export default Footer;
